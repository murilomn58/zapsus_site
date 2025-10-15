# 📋 COMANDOS PRONTOS - COPY & PASTE

## 🔧 Configuração Inicial do Git

```bash
# Entre no diretório do projeto
cd zapsus-website

# Configure seu nome e email (se ainda não fez)
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com"

# Inicialize o repositório
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "🚀 Initial commit - ZAPSUS website completo com fotos da equipe"

# Verifique o status
git status
```

## 🌐 Conectar ao GitHub

```bash
# Substitua SEU-USUARIO pelo seu username do GitHub
git remote add origin https://github.com/SEU-USUARIO/zapsus-website.git

# Renomeie a branch para main
git branch -M main

# Envie para o GitHub
git push -u origin main
```

## 🚀 Deploy no Hostgator via SSH

```bash
# Conecte ao servidor (substitua os dados)
ssh seu-usuario@seu-dominio.com

# Vá para public_html
cd public_html

# Limpe arquivos antigos (CUIDADO! Faça backup antes)
# rm -rf *
# rm -rf .htaccess

# Clone o repositório
git clone https://github.com/SEU-USUARIO/zapsus-website.git temp
mv temp/* .
mv temp/.gitignore .
rm -rf temp

# Ajuste permissões
chmod -R 755 .
find . -type f -exec chmod 644 {} \;

# Verifique se está tudo OK
ls -la

# Saia do servidor
exit
```

## 🔄 Comandos para Atualizar o Site

### No seu computador (após fazer mudanças):

```bash
# Veja o que mudou
git status

# Adicione as mudanças
git add .

# Faça commit com mensagem descritiva
git commit -m "Atualização: descrição do que mudou"

# Envie para o GitHub
git push origin main
```

### No servidor Hostgator:

```bash
# Conecte via SSH
ssh seu-usuario@seu-dominio.com

# Entre no diretório
cd public_html

# Puxe as atualizações
git pull origin main

# Ajuste permissões (se necessário)
chmod -R 755 .

# Saia
exit
```

## 🗑️ Comandos Úteis

### Ver histórico de commits:
```bash
git log --oneline
```

### Ver diferenças antes de commitar:
```bash
git diff
```

### Desfazer mudanças não commitadas:
```bash
git restore nome-do-arquivo
```

### Ver arquivos que serão commitados:
```bash
git status
```

### Limpar cache do Git:
```bash
git rm -r --cached .
git add .
git commit -m "Limpeza de cache"
```

## 🔐 Configurar SSH para GitHub (Opcional mas Recomendado)

```bash
# Gere uma chave SSH
ssh-keygen -t ed25519 -C "seu-email@example.com"

# Copie a chave pública
cat ~/.ssh/id_ed25519.pub

# Cole no GitHub: Settings > SSH and GPG keys > New SSH key

# Teste a conexão
ssh -T git@github.com

# Mude para SSH
git remote set-url origin git@github.com:SEU-USUARIO/zapsus-website.git
```

## 📦 Criar um Backup do Site

```bash
# No servidor via SSH
cd /home/seu-usuario
tar -czf backup-zapsus-$(date +%Y%m%d).tar.gz public_html/

# Baixar backup para seu computador via SCP
scp seu-usuario@seu-dominio.com:/home/seu-usuario/backup-zapsus-*.tar.gz .
```

## 🧹 Limpeza e Manutenção

### Limpar arquivos temporários do servidor:
```bash
cd public_html
find . -name "*.tmp" -delete
find . -name "*.log" -delete
find . -name ".DS_Store" -delete
```

### Verificar espaço em disco:
```bash
du -sh public_html/
df -h
```

## 🔍 Verificação Final

### Antes de fazer deploy, verifique:

```bash
# Teste local (abra index.html no navegador)
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux

# Verifique se todas as imagens existem
ls -lh images/team/

# Conte os arquivos
find . -type f | wc -l

# Veja o tamanho total
du -sh .
```

## 🎯 URLs Importantes para Salvar

- **Repositório GitHub**: https://github.com/SEU-USUARIO/zapsus-website
- **GitHub Pages**: https://SEU-USUARIO.github.io/zapsus-website
- **Site Produção**: https://zapsus.ia.br
- **cPanel Hostgator**: https://seu-dominio.com:2083

## 💡 Dicas Importantes

1. **SEMPRE** faça commit antes de dar pull no servidor
2. **SEMPRE** teste localmente antes de fazer push
3. **SEMPRE** faça backup antes de mexer no servidor
4. Use mensagens de commit descritivas
5. Não commite arquivos grandes (>1MB)
6. Não commite senhas ou dados sensíveis

## 📞 Contatos de Suporte

- **Hostgator**: https://www.hostgator.com.br/suporte
- **GitHub**: https://support.github.com/
- **Email Equipe**: contato@zapsus.ia.br

---

## ✅ Checklist Final Antes do Deploy

- [ ] Todas as fotos estão em `images/team/`
- [ ] Links do LinkedIn estão corretos
- [ ] Email e contato atualizados
- [ ] Testei o site localmente
- [ ] Fiz commit de todas as mudanças
- [ ] Push para o GitHub funcionou
- [ ] Fiz backup do servidor
- [ ] Testei o site em mobile
- [ ] Verifiquei todos os links

---

*Bom deploy! 🚀*
