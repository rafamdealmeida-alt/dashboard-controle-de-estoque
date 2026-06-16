# Dashboard Controle de Estoque - Deployment no Vercel

## Estrutura para Vercel

O projeto foi configurado para rodar no Vercel com a seguinte estrutura:

- **Frontend**: Arquivos estáticos em `frontend/`
- **Backend**: API serverless em `api/` (funções do Vercel)

## Como fazer Deploy

### Pré-requisitos
- Conta no Vercel (https://vercel.com)
- Git instalado

### Passos

1. **Push do código para GitHub**
   ```bash
   git add .
   git commit -m "Configurar para Vercel"
   git push origin main
   ```

2. **Conectar ao Vercel**
   - Acesse https://vercel.com/new
   - Conecte sua conta GitHub
   - Selecione este repositório
   - Clique em "Deploy"

3. **Configurar variáveis de ambiente (se necessário)**
   - No dashboard do Vercel, vá para Settings > Environment Variables
   - Adicione as variáveis conforme necessário (.env.example)

## Configurações do Vercel

- `vercel.json`: Configuração principal
  - Routes para API e frontend
  - Memória e timeout das funções
  - Framework Node.js

- `api/index.js`: Entrada da API serverless

## URLs de acesso

- **Frontend**: `https://seu-projeto.vercel.app`
- **API**: `https://seu-projeto.vercel.app/api`

## Desenvolvimento Local

```bash
# Instalar dependências
npm install --prefix backend

# Rodar backend localmente
npm start --prefix backend

# O frontend em `frontend/` deve ser servido por um servidor local
# Recomendado usar: Live Server (extensão VS Code) ou `npx serve frontend`
```

## Notas

- O backend foi convertido para funções serverless (Vercel Functions)
- O arquivo `app.js` funciona tanto em produção quanto desenvolvimento
- As chamadas de API no frontend detectam automaticamente o ambiente (local vs produção)
- Banco de dados: Atualmente em memória. Para produção, configure um banco real nas variáveis de ambiente
