/**
 * MENU MOBILE
 * Toggle menu responsivo com melhor acessibilidade
 */

const MobileMenu = (() => {
  const button = document.querySelector('.mobile-menu-button');
  const menu = document.querySelector('.mobile-menu');
  let isOpen = false;

  const toggle = () => {
    isOpen = !isOpen;
    menu.classList.toggle('active', isOpen);
    button?.setAttribute('aria-expanded', isOpen);
  };

  const close = () => {
    isOpen = false;
    menu.classList.remove('active');
    button?.setAttribute('aria-expanded', 'false');
  };

  button?.addEventListener('click', toggle);
  
  // Fechar menu ao clicar em um link
  menu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', close);
  });

  // Fechar menu ao redimensionar a tela
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) close();
  });

  return { toggle, close };
})();