export const mockDeployData = {
  totalDeploys: 42,
  deploysThisMonth: 5,
  successRate: 95.2,
  successChange: 2.1,
  averageTime: '1m 23s',
  timeChange: '↓ 15s mais lento',
  activeVersion: 'v2.3.1',
  deployDaysAgo: 2,
  successCount: 40,
  failedCount: 2,
};

export const mockTimelineData = [
  {
    time: 'Hoje 14:32',
    message: '✅ Deploy bem-sucedido',
    description: 'Branch: main | Commit: a3f2b1c | Vercel',
    status: 'OK',
    statusType: 'success',
  },
  {
    time: 'Hoje 12:15',
    message: '✅ Deploy bem-sucedido',
    description: 'Branch: main | Commit: 7e9d4k2 | Vercel',
    status: 'OK',
    statusType: 'success',
  },
  {
    time: 'Ontem 18:47',
    message: '❌ Deploy falhou',
    description: 'Erro: Build falhou | npm run build | Vercel',
    status: 'FALHA',
    statusType: 'failed',
  },
  {
    time: 'Ontem 16:20',
    message: '✅ Deploy bem-sucedido',
    description: 'Branch: main | Commit: 5c1m8x9 | Vercel',
    status: 'OK',
    statusType: 'success',
  },
  {
    time: '2 dias atrás 11:05',
    message: '✅ Deploy bem-sucedido',
    description: 'Branch: main | Commit: 2k7p9l3 | Vercel',
    status: 'OK',
    statusType: 'success',
  },
  {
    time: '3 dias atrás 09:33',
    message: '⏳ Deploy em andamento',
    description: 'Branch: main | Commit: 9q3r8f1 | Vercel',
    status: 'PROCESSANDO',
    statusType: 'pending',
  },
];