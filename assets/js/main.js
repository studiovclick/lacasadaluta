/**
 * APP PRINCIPAL
 * Inicializa funcionalidades gerais do site
 */

const App = (() => {
  /**
   * SCROLL SUAVE
   * Suporta links internos com # e comportamento smooth
   */
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  /**
   * DETECTAR CLIQUE NO BOTÃO WHATSAPP FLUTUANTE
   */
  const initFloatingButton = () => {
    const btn = document.querySelector('.floating-whatsapp');
    if (btn) {
      btn.style.cursor = 'pointer';
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.1)';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
      });
    }
  };

  const initModalityCards = () => {
    const cards = document.querySelectorAll('.modalidades .card');

    cards.forEach(card => {
      const selectCard = () => {
        cards.forEach(item => {
          const isSelected = item === card;
          item.classList.toggle('selected', isSelected);
          item.setAttribute('aria-pressed', String(isSelected));
        });
      };

      card.addEventListener('click', selectCard);
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectCard();
        }
      });
    });
  };

  /**
   * INICIALIZAR TUDO
   */
  const init = () => {
    initSmoothScroll();
    initFloatingButton();
    initModalityCards();
    console.log('🥋 La Casa da Luta - App Inicializado');
  };

  // Auto-iniciar quando DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { init };
})();

// Função legada mantida para compatibilidade
function abrirWhats(nome, numero) {
  const mensagem = `
Olá ${nome},
vim pelo site da La Casa da Luta
e gostaria de mais informações.
`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}