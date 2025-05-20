const repo = require('../repositories/eventoRepository');

module.exports = {
  listar:        ()           => repo.listar(),
  criar:         (d)          => repo.criar(d),
  buscarPorId:   (id)         => repo.buscarPorId(id),
  buscarPorPalavraChave: (p)  => repo.buscarPorPalavraChave(p),   
  atualizar:     (id, d)      => repo.atualizar(id, d),           
  deletar:       (id)         => repo.deletar(id)                 
};