// src/data/faqData.js
export const faqData = [
  {
    id: 1,
    category: 'errors',
    question: '❌ Erro: VERCEL_TOKEN is not defined',
    answer: `Este erro ocorre quando o GitHub Actions não consegue acessar o token do Vercel. Solução:

1. Vá em Settings do seu repositório GitHub
2. Selecione "Secrets and variables" > "Actions"
3. Clique em "New repository secret"
4. Nome: VERCEL_TOKEN
5. Valor: Cole seu token do Vercel (https://vercel.com/account/tokens)
6. Clique em "Add secret"
7. Faça um novo push para testar`,
    tags: ['Vercel', 'Secrets', 'GitHub Actions'],
    githubIssueTemplate: 'Erro: VERCEL_TOKEN is not defined no GitHub Actions'
  },
  {
    id: 2,
    category: 'errors',
    question: '❌ Erro: npm ERR! code ERESOLVE',
    answer: `Conflito de dependências no npm. Solução:

1. Abra o arquivo package-lock.json
2. Execute: npm ci --legacy-peer-deps
3. Se ainda falhar, tente: npm install --force
4. Commit e push novamente

Alternativa: Use o mesmo Node.js em sua máquina local e no CI para evitar incompatibilidades.`,
    tags: ['npm', 'Dependências', 'Build'],
    githubIssueTemplate: 'Erro ERESOLVE ao fazer build do projeto'
  },
  {
    id: 3,
    category: 'errors',
    question: '❌ Erro: Build falhou | npm run build',
    answer: `O seu código tem um erro que impede a compilação. Solução:

1. Execute localmente: npm run build
2. Verifique os erros no terminal
3. Corrija os erros (sintaxe, imports faltando, etc)
4. Teste novamente localmente
5. Se passou localmente, mas falha no CI, verifique variáveis de ambiente

Dica: Adicione ao seu workflow:
env:
  VITE_API_URL: \${{ secrets.VITE_API_URL }}
  VITE_API_KEY: \${{ secrets.VITE_API_KEY }}`,
    tags: ['Build', 'Erro de Compilação', 'Debug'],
    githubIssueTemplate: 'Build falhou no GitHub Actions mas funciona localmente'
  },
  {
    id: 4,
    category: 'errors',
    question: '❌ Erro: Deploy cancelado por timeout',
    answer: `O deploy está demorando muito e sendo cancelado. Solução:

1. Verifique o tamanho do node_modules
2. Use cache no workflow:
   - uses: actions/cache@v3
     with:
       path: node_modules
       key: \${{ runner.os }}-\${{ hashFiles('**/package-lock.json') }}

3. Use npm ci em vez de npm install
4. Remova arquivos desnecessários (.log, .cache, etc)
5. Considere rodar testes em paralelo

Timeout padrão é 360 minutos.`,
    tags: ['Timeout', 'Performance', 'Deploy'],
    githubIssueTemplate: 'Deploy cancelado por timeout'
  },
  {
    id: 5,
    category: 'config',
    question: '⚙️ Como adicionar variáveis de ambiente?',
    answer: `Para usar variáveis de ambiente no seu deploy:

1. GitHub: Settings > Secrets and variables > Actions
2. Adicione como "New repository secret"
3. No seu workflow YAML, use:
   env:
     VITE_API_URL: \${{ secrets.VITE_API_URL }}
     VITE_API_KEY: \${{ secrets.VITE_API_KEY }}

4. No código React, acesse:
   const apiUrl = import.meta.env.VITE_API_URL;

Nota: Variáveis com prefixo VITE_ são expostas ao frontend (seguro).`,
    tags: ['Configuração', 'Secrets', 'Variáveis'],
    githubIssueTemplate: 'Dúvida: Como configurar variáveis de ambiente'
  },
  {
    id: 6,
    category: 'config',
    question: '⚙️ Como configurar diferentes branches (main vs develop)?',
    answer: `Crie dois workflows diferentes ou um condicional:

OPÇÃO 1: Workflows separados
- deploy-prod.yml (trigger: push main)
- deploy-staging.yml (trigger: push develop)

OPÇÃO 2: Um workflow com condicional
- if: github.ref == 'refs/heads/main'
  name: Deploy Produção
- if: github.ref == 'refs/heads/develop'
  name: Deploy Staging

Dica: Use ambientes diferentes no Vercel para cada branch.`,
    tags: ['Branches', 'Workflow', 'Produção'],
    githubIssueTemplate: 'Dúvida: Deploy diferentes para main e develop'
  },
  {
    id: 7,
    category: 'deploy',
    question: '🚀 Deploy está lento. Como otimizar?',
    answer: `Dicas para acelerar o deploy:

1. Use npm ci em vez de npm install (mais rápido)
2. Adicione cache ao workflow:
   - uses: actions/cache@v3
     with:
       path: node_modules
       key: \${{ runner.os }}-\${{ hashFiles('**/package-lock.json') }}

3. Remova testes ou coloque em job paralelo
4. Use Node.js 18+ (mais otimizado)
5. Minimize o tamanho do build

Tempo esperado: 2-3 min primeira vez, 30-60s próximas.`,
    tags: ['Performance', 'Otimização', 'Deploy'],
    githubIssueTemplate: 'Pedido: Como otimizar tempo de deploy'
  },
  {
    id: 8,
    category: 'debug',
    question: '🐛 App funciona localmente mas falha em produção',
    answer: `Problemas comuns:

1. VARIÁVEIS DE AMBIENTE não configuradas
   → Adicione ao Secrets

2. CAMINHOS DE ARQUIVO diferentes (Windows vs Linux)
   → Use sempre /

3. VERSÃO DO NODE.JS diferente
   → Especifique no workflow: node-version: '18'

4. IMPORTS/EXPORTS inconsistentes
   → Verifique sintaxe ES6

5. BASE URL incorreta
   → Defina base em vite.config.js

Dica: Ativar debug: DEBUG: '*'`,
    tags: ['Debug', 'Produção', 'Troubleshooting'],
    githubIssueTemplate: 'App funciona localmente mas falha em produção'
  },
  {
    id: 9,
    category: 'debug',
    question: '🐛 Como ver os logs do GitHub Actions?',
    answer: `Para ver logs detalhados:

1. Vá ao seu repositório GitHub
2. Clique em "Actions"
3. Selecione o workflow que falhou
4. Clique em "Logs"
5. Expanda os steps para detalhes

Para mais informações:
- Ative debug mode adicionando secret:
  ACTIONS_STEP_DEBUG: true

- Ou no workflow:
  - name: Enable debug
    run: echo "DEBUG=*" >> $GITHUB_ENV

Os logs mostram exatamente onde falhou.`,
    tags: ['Logs', 'Debug', 'GitHub Actions'],
    githubIssueTemplate: 'Dúvida: Como ver logs do GitHub Actions'
  },
  {
    id: 10,
    category: 'security',
    question: '🔐 Como proteger meus secrets?',
    answer: `Boas práticas:

1. NUNCA faça commit de .env com valores reais
2. Use .env.example com valores fake
3. Secrets do GitHub são criptografados
4. Cada repositório tem seus próprios secrets
5. Logs NÃO mostram valores dos secrets
6. Revoke tokens comprometidos imediatamente

Para testar localmente:
- Crie .env.local (gitignored)
- Adicione variáveis reais
- Em produção, use Secrets do GitHub

Nunca compartilhe tokens!`,
    tags: ['Segurança', 'Secrets', 'Boas Práticas'],
    githubIssueTemplate: 'Dúvida: Como proteger secrets adequadamente'
  },
  {
    id: 11,
    category: 'security',
    question: '🔐 Como revogar um token comprometido?',
    answer: `Se um token foi exposto:

1. GitHub Tokens:
   - Settings > Developer settings > Tokens
   - Delete o comprometido
   - Gere um novo
   - Atualize nos Secrets

2. Vercel Tokens:
   - https://vercel.com/account/tokens
   - Delete
   - Gere novo
   - Atualize no GitHub

3. AWS/Outros:
   - Siga processo similar

⚠️ URGENTE: Faça isso assim que descobrir!`,
    tags: ['Segurança', 'Tokens', 'Emergency'],
    githubIssueTemplate: 'URGENTE: Token comprometido - como revogar'
  }
];

export const categories = [
  { id: 'all', label: '📋 Todos', icon: '📋' },
  { id: 'errors', label: '❌ Erros', icon: '❌' },
  { id: 'config', label: '⚙️ Config', icon: '⚙️' },
  { id: 'deploy', label: '🚀 Deploy', icon: '🚀' },
  { id: 'debug', label: '🐛 Debug', icon: '🐛' },
  { id: 'security', label: '🔐 Segurança', icon: '🔐' }
];