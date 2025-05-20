const ctrl = require('../controllers/usuarioController');

module.exports = async function(req, res) {
  const { method, url } = req;

  if (url === '/usuarios') {
    if (method === 'GET')  return ctrl.listar(req,res);
    if (method === 'POST') return ctrl.criar (req,res);
  }

  if (url.startsWith('/usuarios/')) {
    const [, , id] = url.split('/');
    if (method === 'GET')    return ctrl.buscarPorId(req,res,id);
    if (method === 'PUT')    return ctrl.atualizar  (req,res,id);
    if (method === 'DELETE') return ctrl.deletar    (req,res,id);
  }
};
