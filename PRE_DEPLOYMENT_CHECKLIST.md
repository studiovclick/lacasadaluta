# ✅ PRÉ-DEPLOYMENT CHECKLIST

## 📋 Antes de Colocar no Ar

### 🎯 ESSENCIAL (Bloqueantes)
- [ ] Domínio configurado (`grenaldaluta.com.br`)
- [ ] SSL/HTTPS ativado
- [ ] Telefone correto em `config.js` e `index.html`
- [ ] Email correto em `config.js`
- [ ] Testar WhatsApp em desktop e mobile
- [ ] Testar em Chrome, Firefox, Safari, Edge
- [ ] Testar em mobile (iPhone, Android)
- [ ] Imagens do site carregam corretamente
- [ ] Sem erros no console (F12)

### 📸 IMAGENS
- [ ] `assets/img/logo.png` (existe e é bom)
- [ ] `assets/img/favicon.ico` (criado)
- [ ] `assets/img/icon-192.png` (PWA - 192x192)
- [ ] `assets/img/icon-512.png` (PWA - 512x512)
- [ ] `assets/img/modalidades/*.png` (todas presentes)
- [ ] `assets/img/professores/*.jpg` (todas presentes)
- [ ] Todas as imagens < 500KB (otimizadas)
- [ ] Alt text em todas as imagens

### 🔧 CONFIGURAÇÕES
- [ ] `config.js` atualizado com dados reais
- [ ] `manifest.json` com icons corretos
- [ ] `sitemap.xml` com URLs atualizadas
- [ ] `robots.txt` configurado
- [ ] `.htaccess` se servidor Apache
- [ ] `vercel.json` ou `netlify.toml` se cloud

### 🧪 TESTE DE FUNCIONALIDADE
- [ ] Menu mobile abre/fecha
- [ ] Links internos fazem scroll suave
- [ ] Botão WhatsApp flutuante funciona
- [ ] Carrossel de depoimentos toca
- [ ] Animações AOS funcionam
- [ ] Formulários (se houver) enviam dados
- [ ] Performance > 80 no Lighthouse

### 🔍 SEO
- [ ] Submeter sitemap.xml ao Google
- [ ] Submeter ao Google Search Console
- [ ] Configurar Google Analytics
- [ ] Meta description em todas as páginas
- [ ] Open Graph tags corretos
- [ ] Mobile-friendly test OK
- [ ] Page Speed Insights > 80

### 🔐 SEGURANÇA
- [ ] HTTPS obrigatório
- [ ] .gitignore contém `.env`
- [ ] Sem credenciais nos arquivos
- [ ] CORS headers configurados
- [ ] CSP headers ativos
- [ ] X-Frame-Options: SAMEORIGIN

### 📱 PWA
- [ ] manifest.json válido
- [ ] Icons em tamanhos corretos
- [ ] Service Worker registra sem erros
- [ ] Testado offline
- [ ] Installable no mobile

### 🌐 DEPLOYMENT
- [ ] Repositório GitHub criado
- [ ] Netlify/Vercel conectado
- [ ] Build automático configurado
- [ ] Domínio customizado apontando
- [ ] HTTPS automático (Let's Encrypt)
- [ ] Deploy preview funcionando
- [ ] Production build OK

### 📊 PERFORMANCE
- [ ] Pagina carrega em < 3s
- [ ] FCP < 1.5s
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] GTmetrix > 80%
- [ ] Sem recursos bloqueadores

### 📞 FINAL
- [ ] Testar link de contato
- [ ] Testar link do Instagram
- [ ] Testar link do Facebook
- [ ] Número WhatsApp atualizado
- [ ] Endereço correto no footer
- [ ] Horários atualizados

### 📝 DOCUMENTAÇÃO
- [ ] README.md completo
- [ ] DOCUMENTACAO.md lido
- [ ] Todos entendem deploy process
- [ ] Backups documentados
- [ ] Processo de manutenção documentado

---

## ⚠️ ERROS COMUNS A EVITAR

❌ Usar HTTP ao invés de HTTPS  
❌ Esquecer de adicionar favicon  
❌ Caminhos de imagens errados  
❌ WhatsApp com número inválido  
❌ Esquecer de atualizar sitemap  
❌ Não minificar CSS/JS  
❌ Deixar console com erros  
❌ Não testar em mobile  
❌ Credenciais no GitHub  
❌ Service Worker não funciona  

---

## 🧠 CHECKLIST FINAL ANTES DO PUSH

```bash
# 1. Testar localmente
npm start
# → Verificar em http://localhost:8000

# 2. Checar console
# → F12 → Console → Sem erros?

# 3. Lighthouse audit
# → F12 → Lighthouse → Score > 80?

# 4. Performance
# → GTmetrix ou PageSpeed Insights

# 5. Mobile test
# → Testar em device real ou DevTools

# 6. Final tests
# → Clique em todos os botões
# → Teste todos os links
# → Verifique responsive

# 7. Se tudo OK → Deploy! 🚀
```

---

## 📱 TESTE ESPECÍFICO: WHATSAPP

```javascript
// Testar no console do navegador:
Config.openWhatsApp('Teste do site');
// Ou:
abrirWhats('Seu Nome', '5551994698455');
```

Deve abrir uma aba com WhatsApp.

---

## 🧪 TESTE DE PERFORMANCE

### Local (npm start)
```bash
npm run build
npm start
# Acesse: http://localhost:8000
# Abra DevTools → Lighthouse
```

### Ferramentas Online
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://webpagetest.org)

**Meta:** LightHouse > 80 em todas as métricas

---

## 🚀 DEPOIS DO DEPLOYMENT

### Dia 1
- [ ] Verificar se página carrega
- [ ] Testar WhatsApp
- [ ] Verificar analytics
- [ ] Monitorar erros

### Semana 1
- [ ] Submeter ao Google
- [ ] Configurar Search Console
- [ ] Monitorar posições
- [ ] Corrigir bugs reportados

### Mês 1
- [ ] Análise de dados
- [ ] Otimizações baseadas em dados
- [ ] Feedback de usuários
- [ ] Melhorias contínuas

---

## 🆘 ALGO DEU ERRADO?

### Página em branco
1. Verificar console (F12)
2. Verificar caminhos CSS/JS
3. Verificar se HTML está válido

### WhatsApp não funciona
1. Verificar número em `config.js`
2. Testar em navegador diferente
3. Verificar conexão internet

### Imagens não carregam
1. Verificar se `assets/img/` existe
2. Verificar nomes de arquivo (case-sensitive)
3. Verificar permissões dos arquivos

### Menu mobile não funciona
1. Verificar console para erros JS
2. Testar em navegador diferente
3. Limpar cache do navegador

---

**Status:** Pronto para o grande lançamento! 🚀✨

Boa sorte! 🥋💪
