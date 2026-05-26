// Pacing Quest — motion layer
// Patterns: scroll progress, header frost, scroll-reveal + stagger, magnetic buttons, parallax blobs.

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
    const revealEls = document.querySelectorAll('[data-reveal]');
    if (revealEls.length) {
      if (prefersReduced) {
        revealEls.forEach((el) => el.classList.add('is-visible'));
      } else {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const el = entry.target;
              const parent = el.closest('[data-stagger]');
              if (parent && !el.style.transitionDelay) {
                const idx = [...parent.children].indexOf(el);
                el.style.transitionDelay = `${idx * 90}ms`;
              }
              el.classList.add('is-visible');
              io.unobserve(el);
            });
          },
          { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
        );
        revealEls.forEach((el) => io.observe(el));
      }
    }

    // --- Legacy animate-on-scroll support ---
    const legacyEls = document.querySelectorAll('.animate-on-scroll');
    if (legacyEls.length && !prefersReduced) {
      const lio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            lio.unobserve(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      legacyEls.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        lio.observe(el);
      });
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
