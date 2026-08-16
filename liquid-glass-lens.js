/**
 * High-Fidelity Physics-Based Liquid Glass Tabs & Search Engine
 * - Snell's Law Refraction Profile
 * - Pill-shaped Squircle Bezel Displacement Maps & Dynamic Specular Sheen
 * - Applied to Course Filter Tabs and Search Bar
 */
(function (global) {
  'use strict';

  const SURFACE_FNS = {
    convex_squircle: (x) => Math.pow(1 - Math.pow(1 - Math.max(0, Math.min(1, x)), 4), 0.25),
    convex_circle: (x) => Math.sqrt(Math.max(0, 1 - (1 - x) * (1 - x))),
    lip: (x) => {
      const clamped = Math.max(0, Math.min(1, x));
      const convex = Math.pow(1 - Math.pow(1 - Math.min(clamped * 2, 1), 4), 0.25);
      const concave = 1 - Math.sqrt(Math.max(0, 1 - (1 - clamped) * (1 - clamped))) + 0.1;
      const t = 6 * clamped ** 5 - 15 * clamped ** 4 + 10 * clamped ** 3;
      return convex * (1 - t) + concave * t;
    }
  };

  function calculateRefractionProfile(glassThickness, bezelWidth, heightFn, ior, samples) {
    samples = samples || 128;
    const eta = 1 / ior;

    function refract(nx, ny) {
      const dot = ny;
      const k = 1 - eta * eta * (1 - dot * dot);
      if (k < 0) return null;
      const sq = Math.sqrt(k);
      return [-(eta * dot + sq) * nx, eta - (eta * dot + sq) * ny];
    }

    const profile = new Float64Array(samples);
    for (let i = 0; i < samples; i++) {
      const x = i / samples;
      const y = heightFn(x);
      const dx = x < 1 ? 0.0001 : -0.0001;
      const y2 = heightFn(x + dx);
      const deriv = (y2 - y) / dx;
      const mag = Math.sqrt(deriv * deriv + 1);
      const ref = refract(-deriv / mag, -1 / mag);
      if (!ref) {
        profile[i] = 0;
        continue;
      }
      profile[i] = ref[0] * ((y * bezelWidth + glassThickness) / ref[1]);
    }
    return profile;
  }

  function generateDisplacementMap(w, h, radius, bezelWidth, profile, maxDisp) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const ctx = c.getContext('2d');
    const img = ctx.createImageData(w, h);
    const d = img.data;

    for (let i = 0; i < d.length; i += 4) {
      d[i] = 128;
      d[i + 1] = 128;
      d[i + 2] = 0;
      d[i + 3] = 255;
    }

    const r = radius;
    const rSq = r * r;
    const r1Sq = (r + 1) ** 2;
    const rBSq = Math.max(r - bezelWidth, 0) ** 2;
    const wB = w - r * 2;
    const hB = h - r * 2;
    const S = profile.length;

    for (let y1 = 0; y1 < h; y1++) {
      for (let x1 = 0; x1 < w; x1++) {
        const x = x1 < r ? x1 - r : x1 >= w - r ? x1 - r - wB : 0;
        const y = y1 < r ? y1 - r : y1 >= h - r ? y1 - r - hB : 0;
        const dSq = x * x + y * y;
        if (dSq > r1Sq || dSq < rBSq) continue;

        const dist = Math.sqrt(dSq);
        const fromSide = r - dist;
        const op = dSq < rSq ? 1 : 1 - (dist - Math.sqrt(rSq)) / (Math.sqrt(r1Sq) - Math.sqrt(rSq));
        if (op <= 0 || dist === 0) continue;

        const cos = x / dist;
        const sin = y / dist;
        const bi = Math.min(((fromSide / bezelWidth) * S) | 0, S - 1);
        const disp = profile[bi] || 0;
        const dX = (-cos * disp) / maxDisp;
        const dY = (-sin * disp) / maxDisp;
        const idx = (y1 * w + x1) * 4;

        d[idx] = (128 + dX * 127 * op + 0.5) | 0;
        d[idx + 1] = (128 + dY * 127 * op + 0.5) | 0;
      }
    }
    ctx.putImageData(img, 0, 0);
    return c.toDataURL();
  }

  function generateSpecularMap(w, h, radius, bezelWidth, angle) {
    angle = angle != null ? angle : Math.PI / 3;
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const ctx = c.getContext('2d');
    const img = ctx.createImageData(w, h);
    const d = img.data;
    d.fill(0);

    const r = radius;
    const rSq = r * r;
    const r1Sq = (r + 1) ** 2;
    const rBSq = Math.max(r - bezelWidth, 0) ** 2;
    const wB = w - r * 2;
    const hB = h - r * 2;
    const sv = [Math.cos(angle), Math.sin(angle)];

    for (let y1 = 0; y1 < h; y1++) {
      for (let x1 = 0; x1 < w; x1++) {
        const x = x1 < r ? x1 - r : x1 >= w - r ? x1 - r - wB : 0;
        const y = y1 < r ? y1 - r : y1 >= h - r ? y1 - r - hB : 0;
        const dSq = x * x + y * y;
        if (dSq > r1Sq || dSq < rBSq) continue;

        const dist = Math.sqrt(dSq);
        const fromSide = r - dist;
        const op = dSq < rSq ? 1 : 1 - (dist - Math.sqrt(rSq)) / (Math.sqrt(r1Sq) - Math.sqrt(rSq));
        if (op <= 0 || dist === 0) continue;

        const cos = x / dist;
        const sin = -y / dist;
        const dot = Math.abs(cos * sv[0] + sin * sv[1]);
        const edge = Math.sqrt(Math.max(0, 1 - (1 - fromSide) ** 2));
        const coeff = dot * edge;
        const col = (255 * coeff) | 0;
        const alpha = (col * coeff * op) | 0;
        const idx = (y1 * w + x1) * 4;

        d[idx] = col;
        d[idx + 1] = col;
        d[idx + 2] = col;
        d[idx + 3] = alpha;
      }
    }
    ctx.putImageData(img, 0, 0);
    return c.toDataURL();
  }

  function ensureSvgDefs() {
    let defs = document.getElementById('liquid-glass-eta-defs');
    if (!defs) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.id = 'liquid-glass-eta-svg';
      svg.setAttribute('width', '0');
      svg.setAttribute('height', '0');
      svg.style.cssText = 'position:absolute; width:0; height:0; overflow:hidden; pointer-events:none; z-index:-1;';
      svg.setAttribute('color-interpolation-filters', 'sRGB');

      defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      defs.id = 'liquid-glass-eta-defs';
      svg.appendChild(defs);
      document.body.appendChild(svg);
    }
    return defs;
  }

  let filterIdCounter = 0;
  const elementsMap = new WeakMap();

  function buildFilterForElement(el, options) {
    if (!el || !el.isConnected) return;
    const rect = el.getBoundingClientRect();
    const w = Math.round(rect.width);
    const h = Math.round(rect.height);
    if (w < 10 || h < 10) return;

    const radius = options?.borderRadius != null ? options.borderRadius : Math.min(Math.round(h / 2), 24);
    const opts = Object.assign({
      surfaceKey: 'convex_squircle',
      glassThickness: 32,
      bezelWidth: Math.min(14, radius - 1),
      ior: 2.5,
      scaleRatio: 0.9,
      blurAmount: 0.2,
      specularOpacity: 0.6,
      specularSaturation: 4.0,
      borderRadius: radius,
      specularAngle: Math.PI / 4
    }, options);

    const heightFn = SURFACE_FNS[opts.surfaceKey] || SURFACE_FNS.convex_squircle;
    const clampedBezel = Math.min(opts.bezelWidth, opts.borderRadius - 1, Math.min(w, h) / 2 - 1);

    const profile = calculateRefractionProfile(opts.glassThickness, clampedBezel, heightFn, opts.ior, 128);
    const maxDisp = Math.max(...Array.from(profile).map(Math.abs)) || 1;
    const dispUrl = generateDisplacementMap(w, h, opts.borderRadius, clampedBezel, profile, maxDisp);
    const specUrl = generateSpecularMap(w, h, opts.borderRadius, clampedBezel * 2.2, opts.specularAngle);
    const scale = maxDisp * opts.scaleRatio;

    let filterId = elementsMap.get(el);
    if (!filterId) {
      filterId = 'lg-lens-filter-' + (++filterIdCounter);
      elementsMap.set(el, filterId);
    }

    const defs = ensureSvgDefs();
    let filterEl = document.getElementById(filterId);
    if (!filterEl) {
      filterEl = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
      filterEl.id = filterId;
      defs.appendChild(filterEl);
    }

    filterEl.setAttribute('x', '0%');
    filterEl.setAttribute('y', '0%');
    filterEl.setAttribute('width', '100%');
    filterEl.setAttribute('height', '100%');

    filterEl.innerHTML = `
      <feGaussianBlur in="SourceGraphic" stdDeviation="${opts.blurAmount}" result="blurred_source" />
      <feImage href="${dispUrl}" x="0" y="0" width="${w}" height="${h}" result="disp_map" />
      <feDisplacementMap in="blurred_source" in2="disp_map" scale="${scale}" xChannelSelector="R" yChannelSelector="G" result="displaced" />
      <feColorMatrix in="displaced" type="saturate" values="${opts.specularSaturation}" result="displaced_sat" />
      <feImage href="${specUrl}" x="0" y="0" width="${w}" height="${h}" result="spec_layer" />
      <feComposite in="displaced_sat" in2="spec_layer" operator="in" result="spec_masked" />
      <feComponentTransfer in="spec_layer" result="spec_faded">
        <feFuncA type="linear" slope="${opts.specularOpacity}" />
      </feComponentTransfer>
      <feBlend in="spec_masked" in2="displaced" mode="normal" result="with_sat" />
      <feBlend in="spec_faded" in2="with_sat" mode="normal" />
    `;

    const val = `url(#${filterId})`;
    el.style.backdropFilter = val;
    el.style.webkitBackdropFilter = val;
  }

  function refreshElements() {
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach((pill) => {
      buildFilterForElement(pill);
    });

    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach((searchInput) => {
      buildFilterForElement(searchInput, {
        borderRadius: 20,
        bezelWidth: 14,
        glassThickness: 34,
        ior: 2.3
      });
    });
  }

  // Pointer glare on course filter tabs and search bar
  function initInteractions() {
    document.addEventListener('pointermove', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (pill) {
        const rect = pill.getBoundingClientRect();
        const angle = Math.atan2(e.clientY - (rect.top + rect.height / 2), e.clientX - (rect.left + rect.width / 2));
        buildFilterForElement(pill, { specularAngle: angle });
        return;
      }

      const searchInput = e.target.closest('.search-input');
      if (searchInput) {
        const rect = searchInput.getBoundingClientRect();
        const angle = Math.atan2(e.clientY - (rect.top + rect.height / 2), e.clientX - (rect.left + rect.width / 2));
        buildFilterForElement(searchInput, {
          borderRadius: 20,
          bezelWidth: 14,
          glassThickness: 34,
          ior: 2.3,
          specularAngle: angle
        });
      }
    }, { passive: true });
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refreshElements, 120);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(refreshElements, 100);
      initInteractions();
    });
  } else {
    setTimeout(refreshElements, 100);
    initInteractions();
  }

  global.LiquidGlassTabs = {
    apply: buildFilterForElement,
    refresh: refreshElements
  };

})(typeof window !== 'undefined' ? window : this);
