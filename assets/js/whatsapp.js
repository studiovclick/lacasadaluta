/**
 * WHATSAPP FLUTUANTE
 * Botão flutuante para contato rápido
 */

const WhatsApp = (() => {
  const button = document.querySelector('.floating-whatsapp');
  const PHONE = '5551994698455';
  const DEFAULT_MESSAGE = 'Olá, vim pelo site da La Casa da Luta e gostaria de informações.';

  const open = (message = DEFAULT_MESSAGE) => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (button) {
    button.addEventListener('click', () => open());
  }

  return { open };
})();

/**
 * FUNÇÃO GLOBAL: Abrir WhatsApp com mensagem personalizada
 */
function abrirWhats(nome, numero) {
  const mensagem = `
Olá ${nome},
vim pelo site da La Casa da Luta
e gostaria de mais informações.
`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}