// const http = require('http');
// const { router } = require('./routes/router');
// const { logRequest } = require('./utils/logger');
// require('./config/DB');

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   logRequest(req);
//   router(req, res);
// });

// server.listen(PORT, () => {
//   console.log(`Servidor rodando em http://localhost:${PORT}`);
// });

const http = require('http');
const { router } = require('./routes/router');
const { logRequest } = require('./utils/logger');
const mongoose = require('mongoose');        
require('./config/DB');                       

const PORT = 3000;

const server = http.createServer((req, res) => {
  logRequest(req);                             
  router(req, res);                          
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


function gracefulShutdown(signal) {
  console.log(`\n${signal} recebido. Encerrando servidor...`);

  server.close(async () => {
    console.log('Servidor HTTP fechado.');

    try {
      await mongoose.connection.close(false);  
      console.log('Conexão com MongoDB encerrada.');
      process.exit(0);
    } catch (err) {
      console.error('Erro ao fechar MongoDB:', err);
      process.exit(1);
    }
  });
}

['SIGINT', 'SIGTERM'].forEach(sig => {
  process.on(sig, () => gracefulShutdown(sig));
});
