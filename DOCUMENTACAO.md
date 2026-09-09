# 🥋 La Casa da Luta - Documentação

## 📋 Sumário
1. [Estrutura do Projeto](#estrutura)
2. [Como Usar](#como-usar)
3. [Deployment](#deployment)
4. [Performance](#performance)
5. [SEO](#seo)
6. [PWA](#pwa)

---

## 📁 Estrutura do Projeto

```
la_casa_da_luta/
├── index.html                 # Arquivo principal
├── manifest.json              # Configuração PWA
├── robots.txt                 # Para crawlers
├── sitemap.xml               # Mapa do site para SEO
├── sw.js                     # Service Worker
├── package.json              # Dependências e scripts
├── .gitignore               # Arquivos ignorados
├── README.md                # Este arquivo
│
├── assets/
│   ├── css/                 # Estilos
│   │   ├── variables.css
│   │   ├── animations.css
│   │   ├── style.css
│   │   └── responsive.css
│   │
│   ├── js/                  # Scripts
│   │   ├── config.js        # ⭐ Configurações centralizadas
│   │   ├── main.js
│   │   ├── menu.js
│   │   ├── animations.js
│   │   ├── carrousel.js
│   │   └── whatsapp.js
│   │
│   ├── img/                 # Imagens
│   │   ├── logo.png
│   │   ├── favicon.ico
│   │   ├── icon-192.png     # PWA icon
│   │   ├── icon-512.png     # PWA icon
│   │   ├── modalidades/
│   │   ├── professores/
│   │   └── ...
│   │
│   └── fonts/               # Tipografias locais
│
└── pages/                   # Páginas adicionais (futuro)
```

---

## 🚀 Como Usar

### 1. Desenvolvimento Local
```bash
# Instalar dependências
npm install

# Iniciar servidor local
npm start

# Com watch (reload automático)
npm run dev
```

Acesse: `http://localhost:8000`

### 2. Modificar Configurações
Edit `assets/js/config.js`:
```javascript
const Config = {
  phone: '5500000000000',
  email: 'contato@grenaldaluta.com.br',
  instagram: '@grenaldaluta1',
  // ...
};
```

### 3. Usar as Funções Globais
```javascript
// Abrir WhatsApp
Config.openWhatsApp('Olá! Gostaria de informações.');

// Enviar email
Config.sendEmail('Assunto da mensagem');

// Abrir WhatsApp (com nome)
abrirWhats('Professor João', '5500000000000');
```

---

## 🌐 Deployment

### Opção 1: Netlify (Recomendado)
1. Conecte seu repositório GitHub
2. Build command: deixe em branco
3. Publish directory: `.`
4. Deploy automático em cada push

### Opção 2: Vercel
1. Importe o repositório
2. Configurações automáticas
3. Domínio customizado

### Opção 3: GitHub Pages
1. Coloque no repositório `username/username.github.io`
2. GitHub Pages publica automaticamente

### Opção 4: Servidor Tradicional
1. Use SFTP/FTP para enviar arquivos
2. Coloque os arquivos na raiz do servidor
3. Configure SSL (HTTPS)

---

## ⚡ Performance

### Otimizações Implementadas
- ✅ CSS separado por módulo
- ✅ JavaScript modularizado (IIFE)
- ✅ Service Worker para cache
- ✅ Intersection Observer em animações
- ✅ Lazy loading com AOS

### Para Minificar
```bash
npm run build
```

Gera:
- `assets/css/style.min.css`
- `assets/js/main.min.js`

### Imagens
1. Comprima as imagens com [TinyPNG](https://tinypng.com)
2. Use WebP format quando possível
3. Implemente lazy loading

---

## 🔍 SEO

### ✅ Implementado
- Meta tags (description, keywords)
- Open Graph (redes sociais)
- Structured Data pronto
- robots.txt
- sitemap.xml
- Favicon

### 📈 Melhorias Recomendadas
1. Submeter sitemap.xml ao Google Search Console
2. Adicionar schema.json estruturado
3. Criar página 404 customizada
4. Implementar analytics (Google Analytics)

---

## 📱 PWA (Progressive Web App)

### Recursos Implementados
- ✅ Manifest.json
- ✅ Service Worker com caching
- ✅ Ícones de app
- ✅ Suporte offline
- ✅ Instalável em mobile

### Como Instalar

**Android:**
1. Abra a página no Chrome
2. Menu → "Instalar app"

**iOS:**
1. Abra a página no Safari
2. Compartilhar → "Adicionar à Tela de Início"

---

## 🔧 Manutenção

### Adicionar Nova Página
1. Crie um arquivo em `pages/nova-pagina.html`
2. Copie a estrutura de `index.html`
3. Atualize links em `sitemap.xml`

### Adicionar Nova Seção
1. Edite `index.html`
2. Adicione ID único: `id="minha-secao"`
3. Atualize menu de navegação

### Atualizar Config
1. Edite `assets/js/config.js`
2. Mudanças refletem em toda a app

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| Service Worker não funciona | Verifique console do navegador |
| Menu mobile não fecha | Limpe cache do navegador |
| Imagens não carregam | Verifique caminhos em `img src=` |
| WhatsApp não abre | Valide número em `config.js` |

---

## 📞 Contato & Suporte

- **WhatsApp:** 00 00000-0000
- **Email:** contato@grenaldaluta.com.br
- **Instagram:** @grenaldaluta1

---

**Última atualização:** 16 de maio de 2026  
**Versão:** 1.0.0  
**Status:** ✅ Produção

🎯 Lighthouse Score Esperado: 90+
🎯 FCP (First Contentful Paint): < 1.5s
🎯 LCP (Largest Contentful Paint): < 2.5s
🎯 CLS (Cumulative Layout Shift): < 0.1
