# 🚀 Guia Rápido de Deploy - ZAPSUS

## Opção 1: Deploy no GitHub + Hostgator (RECOMENDADO)

### Passo 1: Subir para o GitHub

```bash
# 1. Abra o terminal e entre no diretório do projeto
cd zapsus-website

# 2. Inicialize o Git
git init

# 3. Adicione todos os arquivos
git add .

# 4. Faça o primeiro commit
git commit -m "🚀 Initial commit - ZAPSUS website"

# 5. Crie um repositório no GitHub (via interface web)
# https://github.com/new

# 6. Conecte ao repositório remoto (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/zapsus-website.git

# 7. Envie para o GitHub
git branch -M main
git push -u origin main
```

### Passo 2: Deploy no Hostgator

**Via SSH (Melhor método):**

```bash
# 1. Acesse seu servidor via SSH
ssh usuario@seu-dominio.com

# 2. Vá para a pasta public_html
cd public_html

# 3. Clone o repositório
git clone https://github.com/SEU-USUARIO/zapsus-website.git temp-folder
mv temp-folder/* .
mv temp-folder/.gitignore .
rm -rf temp-folder

# 4. Ajuste permissões
chmod -R 755 .
```

**Para atualizar depois:**
```bash
cd public_html
git pull origin main
```

---

## Opção 2: Deploy Direto no Hostgator (Via cPanel)

### Via File Manager:

1. Faça login no **cPanel** do Hostgator
2. Abra o **File Manager**
3. Navegue até `public_html`
4. Clique em **Upload**
5. Faça upload de TODOS os arquivos e pastas:
   - `index.html`
   - `css/` (pasta completa)
   - `js/` (pasta completa)
   - `images/` (pasta completa)
6. Aguarde o upload completar
7. Acesse seu domínio: `https://seu-dominio.com`

### Via FTP (FileZilla):

1. Baixe e instale o [FileZilla](https://filezilla-project.org/)
2. Conecte ao seu servidor:
   - Host: `ftp.seu-dominio.com`
   - Usuário: seu usuário FTP
   - Senha: sua senha FTP
   - Porta: `21`
3. Navegue até `/public_html/`
4. Arraste todos os arquivos do projeto para o servidor
5. Aguarde a transferência completar
6. Acesse: `https://seu-dominio.com`

---

## Opção 3: GitHub Pages (Para Teste)

### Ativação:

1. Vá ao seu repositório no GitHub
2. Clique em **Settings**
3. No menu lateral, clique em **Pages**
4. Em "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em **Save**
6. Aguarde 2-5 minutos
7. Acesse: `https://SEU-USUARIO.github.io/zapsus-website/`

---

## ✅ Checklist Pré-Deploy

Antes de fazer o deploy, verifique:

- [ ] Todas as imagens da equipe estão na pasta `images/team/`
- [ ] Links do LinkedIn estão corretos
- [ ] Email de contato está atualizado
- [ ] Informações da equipe estão corretas
- [ ] Links internos funcionam (#home, #features, etc.)
- [ ] Testou em mobile e desktop

---

## 🔄 Como Atualizar o Site

### Se usou Git + Hostgator:

```bash
# 1. Faça mudanças no código local
# 2. Commit e push
git add .
git commit -m "Descrição da mudança"
git push origin main

# 3. No servidor Hostgator via SSH
cd public_html
git pull origin main
```

### Se usou cPanel/FTP:

1. Faça mudanças localmente
2. Faça upload novamente dos arquivos modificados
3. Substitua os arquivos antigos

---

## 🐛 Solução de Problemas

### Problema: Site mostra página padrão do Hostgator
**Solução:** Certifique-se de que os arquivos estão em `public_html/` e não em `public_html/zapsus-website/`

### Problema: Imagens não aparecem
**Solução:** Verifique se as fotos foram enviadas para `images/team/` e têm os nomes corretos:
- juan.jpg
- kelly.jpg
- renato.jpg
- jean.jpg
- murilo.jpg
- paulo.jpg

### Problema: CSS não carrega
**Solução:** Verifique se a pasta `css/` foi enviada corretamente e contém o arquivo `style.css`

### Problema: Erro 404
**Solução:** Verifique se o arquivo `index.html` está na raiz de `public_html/`

---

## 📞 Ajuda

Se precisar de ajuda, entre em contato:
- Email: contato@zapsus.ia.br

---

## 🎉 Pronto!

Seu site está no ar! 🚀

Acesse e compartilhe:
- **Produção**: https://seu-dominio.com
- **GitHub Pages**: https://SEU-USUARIO.github.io/zapsus-website/

---

*Desenvolvido com ❤️ pela equipe ZAPSUS*
