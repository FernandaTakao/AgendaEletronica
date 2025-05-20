const Event = require('../models/Evento');

module.exports = {
  async criar(dados) {
    return await Event.create(dados);
  },
  async listar() {
    return await Event.find();
  },
  async buscarPorId(id) {
    return await Event.findById(id);
  },
  async atualizar(id, dados) {
    return await Event.findByIdAndUpdate(id, dados, { new: true });
  },
  async deletar(id) {
    return await Event.findByIdAndDelete(id);
  },
  async buscarPorPalavraChave(palavra) {       
    const regex = new RegExp(palavra, 'i');
    return Event.find({ tags: regex });
  }
};

