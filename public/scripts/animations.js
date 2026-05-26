// Pacing Quest — motion layer
// Patterns: scroll progress, header frost, scroll-reveal + stagger, magnetic buttons, parallax blobs.
// Reveal is purely additive: content is visible by default (see .js gating in CSS),
// and a backstop guarantees nothing ever stays hidden if the observer doesn't fire.

(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const init = () => {
    // --- Scroll progress bar ---
    const bar = document.getElementById('scroll-progress');
    if (bar) {
      const updateBar = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = max > 0 ? (window.scrollY / max) * 100 + '%' : '0%';
      };
      window.addEventListener('scroll', updateBar, { passive: true });
      updateBar();
    }

    // --- Header frost on scroll ---
    const headerEl = document.getElementById('site-header');
    if (headerEl) {
      const updateHeader = () => {
        headerEl.classList.toggle('scrolled', window.scrollY > 40);
      };
      window.addEventListener('scroll', updateHeader, { passive: true });
      updateHeader();
    }

    // --- Scroll-reveal with stagger (data-reveal / data-stagger) ---
    const revealEls = [...document.querySelectorAll('[data-reveal]')];
    if (revealEls.length) {
      const reveal = (el) => {
        const parent = el.closest('[data-stagger]');
        if (parent && !el.style.transitionDelay) {
          const idx = [...parent.children].indexOf(el);
          el.style.transitionDelay = `${idx * 90}ms`;
        }
        el.classList.add('is-visible');
      };

      if (prefersReduced || !('IntersectionObserver' in window)) {
        revealEls.forEach(reveal);
      } else {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              reveal(entry.target);
              io.unobserve(entry.target);
            });
          },
          { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
        );
        revealEls.forEach((el) => io.observe(el));

        // Reveal anything already in view immediately (don't wait for the first callback)
        const vh = window.innerHeight || document.documentElement.clientHeight;
        revealEls.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < vh && r.bottom > 0) reveal(el);
        });

        // Backstop: never let content stay hidden if the observer misbehaves
        const backstop = () => revealEls.forEach(reveal);
        window.addEventListener('load', () => setTimeout(backstop, 1600));
        setTimeout(backstop, 4000);
      }
    }

    if (prefersReduced) return;

    // --- Magnetic buttons ---
    document.querySelectorAll('.btn-magnetic').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.17;
        const y = (e.clientY - r.top - r.height / 2) * 0.17;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });

    // --- Parallax blobs ---
    const blobs = document.querySelectorAll('.parallax-blob');
    if (blobs.length) {
      let ticking = false;
      const moveBlobs = () => {
        const sy = window.scrollY;
        blobs.forEach((b, i) => {
          const speed = i % 2 === 0 ? 0.08 : -0.05;
          b.style.transform = `translateY(${sy * speed}px)`;
        });
        ticking = false;
      };
      window.addEventListener(
        'scroll',
        () => {
          if (!ticking) {
            window.requestAnimationFrame(moveBlobs);
            ticking = true;
          }
        },
        { passive: true }
      );
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
