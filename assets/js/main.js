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

  const initSupportModals = () => {
    const triggers = document.querySelectorAll('[data-open-support-modal]');
    const modals = document.querySelectorAll('.support-modal');

    const closeModal = modal => {
      modal.hidden = true;
      document.body.classList.remove('modal-open');
    };

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const modal = document.getElementById(trigger.dataset.openSupportModal);
        if (!modal) return;
        modal.hidden = false;
        document.body.classList.add('modal-open');
        modal.querySelector('.support-modal-close')?.focus();
      });
    });

    modals.forEach(modal => {
      modal.querySelector('[data-close-support-modal]')?.addEventListener('click', () => closeModal(modal));
      modal.addEventListener('click', event => {
        if (event.target === modal) closeModal(modal);
      });
      modal.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => closeModal(modal));
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') modals.forEach(closeModal);
    });
  };

  /**
   * INICIALIZAR TUDO
   */
  const init = () => {
    initSmoothScroll();
    initFloatingButton();
    initModalityCards();
    initSupportModals();
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