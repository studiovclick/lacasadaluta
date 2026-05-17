/**
 * ANIMAÇÃO AO SCROLL
 * Usa Intersection Observer para melhor performance
 */

const FadeAnimation = (() => {
  const fadeElements = document.querySelectorAll('.fade-up');
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  fadeElements.forEach(element => observer.observe(element));

  return { observer };
})();