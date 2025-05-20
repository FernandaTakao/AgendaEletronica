const eventoRoutes = require('./eventoRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const notificacaoRoutes = require('./notificacaoRoutes');

module.exports = {
  router: async function(req, res) {
    if (req.url.startsWith('/eventos')) {
      return eventoRoutes(req, res);
    }
    if (req.url.startsWith('/usuarios')) {
      return usuarioRoutes(req, res);
    }
    if (req.url.startsWith('/notificacoes')) {
      return notificacaoRoutes(req, res);
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ mensagem: 'Rota não encontrada' }));
  }
};