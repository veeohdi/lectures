class Constellation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: true });

    this.particles = [];
    this.particleCount = 80;
    this.maxDistance = 120;
    this.mouseDistance = 200;
    this.mouse = { x: -9999, y: -9999 };
    this.smoothMouse = { x: -9999, y: -9999 };
    this.mouseActive = false;

    // Pre-computed color map to avoid string parsing in the hot loop
    this.colorMap = {
      '': [150, 200, 255],
      'pathology': [66, 165, 245],
      'chemistry': [255, 183, 77],
      'haematology': [239, 83, 80],
      'microbiology': [105, 240, 174],
      'pharmacology': [179, 136, 255]
    };
    this.currentColor = this.colorMap[''];

    // Cache card bounding rects (updated on scroll/resize, not every frame)
    this.cardRects = [];
    this.cardRectsStale = true;

    // Cache DOM attributes to avoid querying every frame
    this.isLight = document.documentElement.getAttribute('data-theme') === 'light';
    this.isLiteMode = document.body.classList.contains('lite-mode');
    this.subject = document.documentElement.getAttribute('data-subject') || '';

    this.init();
    this._boundAnimate = this.animate.bind(this);
    requestAnimationFrame(this._boundAnimate);

    // --- Event listeners ---
    window.addEventListener('resize', () => {
      this.resize();
      this.cardRectsStale = true;
    });

    // Use passive listeners for maximum scroll/move perf
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouseActive = true;
      if (this.smoothMouse.x < -9000) {
        this.smoothMouse.x = e.clientX;
        this.smoothMouse.y = e.clientY;
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      this.mouseActive = false;
      this.mouse.x = -9999;
      this.mouse.y = -9999;
      this.smoothMouse.x = -9999;
      this.smoothMouse.y = -9999;
    }, { passive: true });

    window.addEventListener('scroll', () => {
      this.cardRectsStale = true;
    }, { passive: true });

    // Observe DOM changes (subject filter changes card count)
    this._mutObs = new MutationObserver(() => { 
      this.cardRectsStale = true; 
      this.isLight = document.documentElement.getAttribute('data-theme') === 'light';
      this.isLiteMode = document.body.classList.contains('lite-mode');
      this.subject = document.documentElement.getAttribute('data-subject') || '';
    });
    this._mutObs.observe(document.documentElement, {
      attributes: true, attributeFilter: ['data-theme', 'data-subject', 'class']
    });
    this._mutObs.observe(document.getElementById('root') || document.body, {
      childList: true, subtree: true
    });
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.canvas.style.width = window.innerWidth + 'px';
    this.canvas.style.height = window.innerHeight + 'px';
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const area = window.innerWidth * window.innerHeight;
    this.particleCount = Math.min(Math.floor(area / 15000), 120);
    this.particles = [];
    this.createParticles();
  }

  init() {
    this.resize();
  }

  createParticles() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        baseRadius: Math.random() * 2.5 + 1.5
      });
    }
  }

  updateCardRects() {
    this.cardRects = [];
    const cards = document.querySelectorAll('.glass-glow');
    for (let i = 0; i < cards.length; i++) {
      const el = cards[i];
      const r = el.getBoundingClientRect();
      // Only include cards that are visible in the viewport
      if (r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < window.innerHeight) {
        // Hardcoded border-radius for extreme performance (avoids getComputedStyle thrashing)
        const br = 26;
        // Check if the card has actually animated into view via inline style
        const op = parseFloat(el.style.opacity || 1);
        if (op < 0.1) continue;
        this.cardRects.push({
          left: r.left,
          top: r.top,
          right: r.right,
          bottom: r.bottom,
          w: r.width,
          h: r.height,
          radius: br
        });
      }
    }
  }

  // Helper: trace a rounded rect path
  roundedRectPath(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
  }

  drawCardEdgeGlow(mx, my, color) {
    const glowRange = 220;
    const ctx = this.ctx;

    for (let i = 0; i < this.cardRects.length; i++) {
      const r = this.cardRects[i];

      // Quick reject: skip cards far from mouse
      const nearestX = Math.max(r.left, Math.min(mx, r.right));
      const nearestY = Math.max(r.top, Math.min(my, r.bottom));
      const dx = mx - nearestX;
      const dy = my - nearestY;
      const distSq = dx * dx + dy * dy;
      if (distSq > glowRange * glowRange) continue;

      const dist = Math.sqrt(distSq);
      const intensity = 1 - (dist / glowRange);

      // Mix towards white for the hot center
      const mixR = color[0] + (255 - color[0]) * intensity | 0;
      const mixG = color[1] + (255 - color[1]) * intensity | 0;
      const mixB = color[2] + (255 - color[2]) * intensity | 0;

      ctx.save();

      // Create a "border only" clip using rounded rects with evenodd
      const bw = 1.5; // border glow width
      const rad = r.radius;
      ctx.beginPath();
      // Outer rounded rect (clockwise)
      this.roundedRectPath(ctx, r.left - 1, r.top - 1, r.w + 2, r.h + 2, rad + 1);
      // Inner rounded rect (counter-clockwise via reversed winding)
      this.roundedRectPath(ctx, r.left + bw, r.top + bw, r.w - bw * 2, r.h - bw * 2, Math.max(rad - bw, 0));
      ctx.clip('evenodd');

      const grad = ctx.createRadialGradient(mx, my, 0, mx, my, glowRange);
      grad.addColorStop(0, 'rgba(' + mixR + ',' + mixG + ',' + mixB + ',' + (0.9 * intensity) + ')');
      grad.addColorStop(0.4, 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (0.5 * intensity) + ')');
      grad.addColorStop(1, 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',0)');
      ctx.fillStyle = grad;
      ctx.fillRect(r.left - 2, r.top - 2, r.w + 4, r.h + 4);

      ctx.restore();
    }
  }

  animate() {
    requestAnimationFrame(this._boundAnimate);

    if (this.isLiteMode) return;
    const isLight = this.isLight;

    // Update subject color (cheap string lookup, no parsing)
    const subject = this.subject;
    this.currentColor = this.colorMap[subject] || this.colorMap[''];
    const cc = this.currentColor;

    const w = window.innerWidth;
    const h = window.innerHeight;
    this.ctx.clearRect(0, 0, w, h);

    // Smooth mouse lerp
    if (this.mouseActive) {
      this.smoothMouse.x += (this.mouse.x - this.smoothMouse.x) * 0.15;
      this.smoothMouse.y += (this.mouse.y - this.smoothMouse.y) * 0.15;
    }

    const smx = this.smoothMouse.x;
    const smy = this.smoothMouse.y;
    const mouseActive = this.mouseActive;
    const maxDist = this.maxDistance;
    const mouseDist = this.mouseDistance;

    // --- Draw particles ---
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      // Mouse proximity
      let glowFactor = 0;
      if (mouseActive) {
        const dx = p.x - smx;
        const dy = p.y - smy;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < mouseDist) {
          glowFactor = 1 - (d / mouseDist);
        }
        // Subtle repel
        if (d < 100 && d > 0) {
          p.x += dx * 0.01;
          p.y += dy * 0.01;
        }
      }

      const radius = p.baseRadius + glowFactor * 3.5;
      const opacity = 0.3 + glowFactor * 0.7;

      // Color mix towards white
      const mix = Math.min(glowFactor * 1.5, 1);
      const mr = cc[0] + (255 - cc[0]) * mix | 0;
      const mg = cc[1] + (255 - cc[1]) * mix | 0;
      const mb = cc[2] + (255 - cc[2]) * mix | 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, radius, 0, 6.2832); // 2*PI

      if (!isLight && glowFactor > 0.05) {
        this.ctx.shadowBlur = glowFactor * 25;
        this.ctx.shadowColor = 'rgba(' + mr + ',' + mg + ',' + mb + ',' + (0.5 + glowFactor * 0.5) + ')';
      }

      this.ctx.fillStyle = isLight
        ? 'rgba(0,0,0,' + opacity + ')'
        : 'rgba(' + mr + ',' + mg + ',' + mb + ',' + opacity + ')';
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      // Inter-particle lines
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dSq = dx * dx + dy * dy;
        if (dSq < maxDist * maxDist) {
          const d = Math.sqrt(dSq);
          const lineOp = (1 - d / maxDist) * 0.25;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = isLight
            ? 'rgba(0,0,0,' + lineOp + ')'
            : 'rgba(' + cc[0] + ',' + cc[1] + ',' + cc[2] + ',' + lineOp + ')';
          this.ctx.lineWidth = 0.6;
          this.ctx.stroke();
        }
      }

      // Line to mouse
      if (mouseActive) {
        const dx = p.x - smx;
        const dy = p.y - smy;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < mouseDist) {
          const lineOp = (1 - d / mouseDist) * 0.4;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(smx, smy);
          this.ctx.strokeStyle = isLight
            ? 'rgba(0,0,0,' + lineOp + ')'
            : 'rgba(' + cc[0] + ',' + cc[1] + ',' + cc[2] + ',' + lineOp + ')';
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    // --- Draw edge glow on cards (entirely on canvas, zero CSS overhead) ---
    if (mouseActive && !isLight) {
      if (this.cardRectsStale) {
        this.updateCardRects();
        this.cardRectsStale = false;
      }
      this.drawCardEdgeGlow(smx, smy, cc);
    }
  }
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  new Constellation('constellation-canvas');
});
