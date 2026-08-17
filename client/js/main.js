/* Wisks and Wishes: minimal vanilla JavaScript for scroll state and smooth page navigation. */
(() => {
  const header = document.querySelector('[data-header]');
  const root = document.documentElement;

  function updateScrollEffects() {
    const y = window.scrollY;
    const progress = Math.min(y / Math.max(window.innerHeight * 0.52, 1), 1);
    header.classList.toggle('is-scrolled', y > 24);
    root.style.setProperty('--hero-round', `${progress * 82}px`);
    root.style.setProperty('--copy-y', `${Math.min(y * -0.13, 72)}px`);
    root.style.setProperty('--copy-fade', `${1 - progress * 0.18}`);
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  updateScrollEffects();
  window.addEventListener('scroll', updateScrollEffects, { passive: true });
})();
