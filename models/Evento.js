const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  inicio: { type: Date, required: true },
  fim: { type: Date },
  local: { type: String },
  tags: [String]
});

module.exports = mongoose.model('Evento', EventoSchema);
