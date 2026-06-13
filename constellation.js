class Constellation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.particles = [];
    this.particleCount = 80; // Adjust based on performance
    this.maxDistance = 120;
    this.mouseDistance = 180;
    this.mouse = { x: null, y: null };
    
    this.baseColor = 'rgba(100, 150, 255, '; // Light blueish
    
    this.init();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    // Re-adjust particle count based on screen size
    const area = this.canvas.width * this.canvas.height;
    this.particleCount = Math.min(Math.floor(area / 15000), 120);
    this.particles = [];
    this.createParticles();
  }

  init() {
    this.resize();
  }

  createParticles() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.5 + 1.5,
        baseRadius: Math.random() * 2.5 + 1.5
      });
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    // Check if we are in light mode to adjust color
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const isLiteMode = document.body.classList.contains('lite-mode'); 
    
    if (isLiteMode) return; 
    
    const subject = document.documentElement.getAttribute('data-subject');
    let colorRGB = '150, 200, 255'; // default blue
    if (subject === 'pathology') colorRGB = '66, 165, 245';
    else if (subject === 'chemistry') colorRGB = '255, 183, 77';
    else if (subject === 'haematology') colorRGB = '239, 83, 80';
    else if (subject === 'microbiology') colorRGB = '105, 240, 174';
    else if (subject === 'pharmacology') colorRGB = '179, 136, 255';

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    const lineColorBase = isLight ? 'rgba(0, 0, 0, ' : 'rgba(' + colorRGB + ', ';
    
    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i];
      
      p.x += p.vx;
      p.y += p.vy;
      
      // Bounce off edges
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
      
      // Calculate mouse interaction for glowing stars
      let distToMouse = Infinity;
      if (this.mouse.x !== null) {
        let dx = p.x - this.mouse.x;
        let dy = p.y - this.mouse.y;
        distToMouse = Math.sqrt(dx * dx + dy * dy);
      }
      
      let glowFactor = 0;
      if (distToMouse < this.mouseDistance) {
        glowFactor = 1 - (distToMouse / this.mouseDistance);
      }
      
      // Brighten and drastically enlarge stars near mouse
      let currentRadius = p.baseRadius + (glowFactor * 3.5);
      let dotOpacity = 0.3 + (glowFactor * 0.7);
      
      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
      this.ctx.fillStyle = isLight ? 'rgba(0, 0, 0, ' + dotOpacity + ')' : 'rgba(' + colorRGB + ', ' + dotOpacity + ')';
      
      // Add glow effect in dark mode
      if (!isLight && glowFactor > 0.05) {
        this.ctx.shadowBlur = glowFactor * 20;
        this.ctx.shadowColor = 'rgba(' + colorRGB + ', ' + (0.4 + glowFactor * 0.6) + ')';
      } else {
        this.ctx.shadowBlur = 0;
      }
      
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // reset for lines
      
      // Draw lines between particles
      for (let j = i + 1; j < this.particles.length; j++) {
        let p2 = this.particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < this.maxDistance) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          let opacity = 1 - (dist / this.maxDistance);
          this.ctx.strokeStyle = lineColorBase + (opacity * 0.25) + ')';
          this.ctx.lineWidth = 0.6;
          this.ctx.stroke();
        }
      }
      
      // Draw line to mouse
      if (this.mouse.x !== null) {
        let dx = p.x - this.mouse.x;
        let dy = p.y - this.mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < this.mouseDistance) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          let opacity = 1 - (dist / this.mouseDistance);
          this.ctx.strokeStyle = lineColorBase + (opacity * 0.4) + ')';
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
          
          // Subtle mouse repel
          if (dist < 100) {
            p.x += dx * 0.01;
            p.y += dy * 0.01;
          }
        }
      }
    }
  }
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  new Constellation('constellation-canvas');
});
