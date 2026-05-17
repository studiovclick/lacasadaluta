/**
 * CONFIG.JS
 * Configurações centralizadas da aplicação
 * Facilita manutenção e mudanças de valores
 */

const Config = {
  // DADOS DE CONTATO
  phone: '5551994698455',
  email: 'contato@lacasadaluta.com.br',
  website: 'https://lacasadaluta.com.br',

  // REDE SOCIAL
  instagram: '@lacasadaluta1',
  facebook: 'lacasadaluta',

  // ENDEREÇO
  address: 'Rua Exemplo, 123 - Porto Alegre, RS',
  hours: {
    monday: '08:00 - 22:00',
    tuesday: '08:00 - 22:00',
    wednesday: '08:00 - 22:00',
    thursday: '08:00 - 22:00',
    friday: '08:00 - 22:00',
    saturday: '09:00 - 18:00',
    sunday: 'Fechado'
  },

  // MENSAGENS PADRÃO
  messages: {
    whatsapp_default: 'Olá, vim pelo site da La Casa da Luta e gostaria de informações.',
    whatsapp_teacher: (name) => `Olá ${name},\nvim pelo site da La Casa da Luta\ne gostaria de mais informações.`,
    error: 'Ocorreu um erro. Tente novamente.',
    success: 'Mensagem enviada com sucesso!'
  },

  // ANIMAÇÕES
  animations: {
    scroll_duration: 500,
    carousel_interval: 5000,
    aos_offset: 50
  },

  // ENDPOINTS (se houver backend)
  api: {
    baseUrl: 'https://api.lacasadaluta.com.br',
    endpoints: {
      contact: '/api/contact',
      newsletter: '/api/newsletter'
    }
  },

  // VERSÃO DA APP
  version: '1.0.0',
  buildDate: '2026-05-16',

  // FUNÇÃO AUXILIAR PARA WHATSAPP
  openWhatsApp(message = this.messages.whatsapp_default) {
    const url = `https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  },

  // FUNÇÃO AUXILIAR PARA EMAIL
  sendEmail(subject = 'Contato La Casa da Luta') {
    const mailto = `mailto:${this.email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailto;
  },

  // LOG DE INICIALIZAÇÃO
  init() {
    console.log(`%c🥋 La Casa da Luta v${this.version}`, 'color: #d4af37; font-size: 16px; font-weight: bold;');
    console.log('%cBuild: ' + this.buildDate, 'color: #666;');
    console.log('%cConfig carregado com sucesso!', 'color: #28a745;');
  }
};

// Auto-inicializar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Config.init());
} else {
  Config.init();
}
