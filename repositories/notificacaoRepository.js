const Notificacao = require('../models/Notificacao');

module.exports = {
  async criar(dados) {
    return Notificacao.create(dados);
  },
  async listar() {
    return Notificacao.find().populate('evento');
  },
  async buscarPorId(id) {
    return Notificacao.findById(id).populate('evento');
  },
  async atualizar(id, dados) {                
    return Notificacao.findByIdAndUpdate(id, dados, { new: true }).populate('evento');
  },
  async deletar(id) {                        
    return Notificacao.findByIdAndDelete(id);
  }
};
