/**
 * CARROSSEL DE DEPOIMENTOS
 * Auto-play com transição suave
 */

const Carousel = (() => {
  const testimonials = Array.from(document.querySelectorAll('.testimonial-card'));

  if (!testimonials.length) {
    return { next: () => {}, show: () => {} };
  }

  let current = 0;
  const INTERVAL = 5000;

  const show = () => {
    testimonials.forEach((item, index) => {
      item.style.display = index === current ? 'block' : 'none';
    });
  };

  const next = () => {
    current = (current + 1) % testimonials.length;
    show();
  };

  show();
  const timer = setInterval(next, INTERVAL);

  return { next, show, stop: () => clearInterval(timer) };
})();