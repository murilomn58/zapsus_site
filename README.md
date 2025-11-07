# 🌐 ZAPSUS Website  
**Site institucional do ZAPSUS — o primeiro copiloto de IA para otimizar filas de cirurgia eletiva no SUS.**

---

## 🚀 Sobre o Projeto  

O **ZAPSUS** é uma solução inovadora baseada em **Inteligência Artificial** que tem como objetivo **otimizar a gestão de filas de cirurgias eletivas** no Sistema Único de Saúde (SUS).  

Por meio da assistente virtual **"Susy"**, o sistema oferece:  
- 👩‍⚕️ **Acompanhamento contínuo** dos pacientes durante o período de espera  
- 🧾 **Respostas auditáveis**, baseadas em fontes oficiais  
- 🔗 **Integração nativa** com **DataSUS**, **BigQuery** e outros sistemas do SUS  
- ⚙️ **Otimização do fluxo** pré e pós-operatório  

---

## 🧱 Estrutura do Projeto  

```bash
zapsus-website/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   └── main.js         # Scripts JavaScript
├── images/
│   └── team/           # Fotos da equipe
│       ├── juan.jpg
│       ├── kelly.jpg
│       ├── renato.jpg
│       ├── jean.jpg
│       ├── murilo.jpg
│       └── paulo.jpg
└── README.md           # Este arquivo
```

---

## 🌍 Deploy no GitHub Pages  

### 1. Criar o Repositório  

```bash
# No diretório do projeto
cd zapsus-website

# Inicializa o repositório Git
git init
git add .
git commit -m "Initial commit - ZAPSUS website"

# Adiciona o repositório remoto (substitua 'seu-usuario')
git remote add origin https://github.com/seu-usuario/zapsus-website.git
git branch -M main
git push -u origin main
```

### 2. Publicar no GitHub Pages  
1. Acesse o repositório no GitHub  
2. Vá em **Settings → Pages**  
3. Em **Source**, selecione:
   - Branch: `main`  
   - Folder: `/ (root)`  
4. Clique em **Save**  
5. Após alguns minutos, o site estará disponível em:  
   `https://seu-usuario.github.io/zapsus-website/`

---

## ☁️ Deploy no Hostgator  

### Método 1 — Via cPanel  
1. Faça login no **cPanel**  
2. Vá em **File Manager**  
3. Acesse `public_html`  
4. Faça upload dos arquivos do projeto  
5. Acesse seu domínio para visualizar o site  

### Método 2 — Via FTP  
1. Conecte-se via **FileZilla** ou outro cliente FTP  
2. Navegue até `public_html`  
3. Faça upload de todos os arquivos  
4. Pronto! O site estará ativo  

### Método 3 — Via Git (**Recomendado**)  
```bash
cd public_html
git clone https://github.com/seu-usuario/zapsus-website.git .
```
Para futuras atualizações:  
```bash
git pull origin main
```

---

## 🛠️ Tecnologias Utilizadas  
- **HTML5** — Estrutura semântica e acessível  
- **CSS3** — Design moderno com variáveis e responsividade  
- **JavaScript (Vanilla)** — Interatividade leve e performática  
- **Google Fonts (Inter)** — Tipografia limpa e legível  
- **SVG** — Ícones e elementos vetoriais otimizados  

---

## ✨ Principais Funcionalidades  
- ✅ Design **responsivo** (mobile-first)  
- ✅ Navegação **suave** (smooth scroll)  
- ✅ **Menu mobile** interativo  
- ✅ **Animações** em scroll  
- ✅ **Formulário de contato** funcional  
- ✅ Botão **"voltar ao topo"**  
- ✅ **Acessibilidade** (WCAG 2.1)  
- ✅ **SEO** otimizado  
- ✅ Foco em **performance**  

---

## 🧩 Estrutura das Seções do Site  
1. **Hero** — Apresentação principal com chat ilustrativo  
2. **Contexto** — Impactos psicossociais, econômicos e sistêmicos  
3. **Funcionalidades** — Como o ZAPSUS atua na jornada do paciente  
4. **Benefícios** — Impactos mensuráveis na gestão hospitalar  
5. **Cuidado Contínuo** — Exemplo de conversa com a assistente Susy  
6. **Integração** — Diagrama técnico de arquitetura  
7. **Equipe** — Profissionais multidisciplinares  
8. **Roadmap** — Próximas etapas de evolução  
9. **CTA** — Chamada para ação estratégica  
10. **Contato** — Formulário e informações institucionais  

---

## 👥 Equipe  

| Membro | Função | Formação |
|--------|---------|-----------|
| **Paulo Garcia** | Fundador / Data Analytics | Mestrando – University of Portsmouth |
| **Kelly Barbato** | Clínica Médica | MS, PhD – INTO/MS |
| **Renato Ferraz** | Senior Full Stack Developer | — |
| **Juan David Nieto** | Pesquisador | Ph.D. C – UFF |
| **Jean Kairo** | Engenheiro de Telecomunicações | IME |
| **Murilo Narciso** | Engenheiro Civil | IME |

---

## 📞 Contato  

- ✉️ **E-mail**: contato@zapsus.ia.br  
- 🌐 **Website**: [https://zapsus.ia.br](https://zapsus.ia.br)  
- 📍 **Localização**: Rio de Janeiro, Brasil  

---

## dY", Formulario de Contato Funcional  
 
O formulario da secao **"Entre em Contato"** usa o [FormSubmit](https://formsubmit.co) para entregar cada mensagem diretamente no email **contato@zapsus.ia.br**.  
 
1. **Primeiro envio:** o FormSubmit mandara um email de confirmacao; clique em *Confirm submission* para liberar as proximas mensagens.  
2. **Mensagens personalizadas:** ajuste os atributos `data-success-message` e `data-error-message` do `<form id="contact-form">` em `index.html` para mudar os textos exibidos ao usuario.  
3. **Trocar o destino:** substitua o valor dos atributos `action` e `data-endpoint` do mesmo `<form>` pelo novo email (use sempre o formato `https://formsubmit.co/ajax/SEU-EMAIL` para manter a experiencia AJAX).  
4. **Testar localmente:** abra o `index.html` no navegador, envie uma mensagem e acompanhe o request no painel *Network* do DevTools para confirmar que o status HTTP voltou como `200`.  
 
Se preferir outro provedor (EmailJS, Netlify Forms, backend proprio etc.), basta atualizar o `data-endpoint` e a funcao `submitContactForm` em `js/main.js`.  
 
---
 
## 📄 Licença  

© 2025 **ZAPSUS**. Todos os direitos reservados.  

---

## 🔄 Atualizações  

```bash
# Atualizar alterações locais
git add .
git commit -m "Descrição da atualização"
git push origin main
```

Ou, se estiver hospedado no Hostgator:  
```bash
cd public_html
git pull origin main
```

---

## 🐛 Suporte  

Encontrou um problema ou tem uma sugestão?  
Envie um e-mail para **contato@zapsus.ia.br** 💬  

---

Desenvolvido com ❤️ pela equipe **ZAPSUS**  
> “Tecnologia a serviço do cuidado e da eficiência no SUS.”  
