const ctrl = require('../controllers/eventoController');

module.exports = async function eventoRoutes(req, res) {
  const { method, url } = req;

  if (url === '/eventos') {
    if (method === 'GET')  return ctrl.listar(req, res);
    if (method === 'POST') return ctrl.criar (req, res);
  }

  if (url.startsWith('/eventos/')) {
    const [, , seg2, seg3] = url.split('/'); // seg2 = id | 'busca'

    if (seg2 === 'busca' && seg3 && method === 'GET') {
      return ctrl.buscarPorPalavraChave(
        req,
        res,
        decodeURIComponent(seg3)
      );
    }

    if (method === 'GET')    return ctrl.buscarPorId (req, res, seg2);
    if (method === 'PUT')    return ctrl.atualizar   (req, res, seg2);
    if (method === 'DELETE') return ctrl.deletar     (req, res, seg2);
  }
};