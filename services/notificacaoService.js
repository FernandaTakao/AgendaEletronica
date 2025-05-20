const repo = require('../repositories/notificacaoRepository');

module.exports = {
  listar:      ()          => repo.listar(),
  criar:       d           => repo.criar(d),
  buscarPorId: id          => repo.buscarPorId(id),
  atualizar:   (id, d)     => repo.atualizar(id, d),  
  deletar:     id          => repo.deletar(id)         
};
