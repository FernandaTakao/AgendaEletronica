const Usuario = require('../models/Usuario');

module.exports = {
  async criar(dados) {
    return Usuario.create(dados);
  },
  async listar() {
    return Usuario.find();
  },
  async buscarPorId(id) {
    return Usuario.findById(id);
  },
  async atualizar(id, dados) {                       
    return Usuario.findByIdAndUpdate(id, dados, { new: true });
  },
  async deletar(id) {                                
    return Usuario.findByIdAndDelete(id);
  }
};
