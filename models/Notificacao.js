const mongoose = require('mongoose');

const NotificacaoSchema = new mongoose.Schema({
  evento: { type: mongoose.Schema.Types.ObjectId, ref: 'Evento', required: true },
  mensagem: { type: String, required: true },
  dia: { type: Date, required: true }
});

module.exports = mongoose.model('Notificacao', NotificacaoSchema);
