const eventoService = require('../services/eventoService');
const { sendJson, getBodyData } = require('../utils/http');

module.exports = {
  async listar(req, res) {
    const eventos = await eventoService.listar();
    sendJson(res, 200, eventos);
  },

  async criar(req, res) {
    const body = await getBodyData(req);
    const novoEvento = await eventoService.criar(JSON.parse(body));
    sendJson(res, 201, novoEvento);
  },

  async buscarPorId(req, res, id) {
    try {
      const evento = await eventoService.buscarPorId(id);
      if (!evento) {
        sendJson(res, 404, { mensagem: 'Evento não encontrado!' });
      } else {
        sendJson(res, 200, evento);
      }
    } catch (err) {
      sendJson(res, 400, { mensagem: 'ID inválido!' });
    }
  },

  async buscarPorPalavraChave(req, res, palavra) {
    const eventos = await eventoService.buscarPorPalavraChave(palavra);
    sendJson(res, 200, eventos);
  },


  async atualizar(req, res, id) {
  try {
    const body = await getBodyData(req);
    const dadosAtualizados = JSON.parse(body);

    const evento = await eventoService.atualizar(id, dadosAtualizados);
    if (!evento) {
      return sendJson(res, 404, { mensagem: 'Evento não encontrado' });
    }
    sendJson(res, 200, evento);
  } catch (err) {
    sendJson(res, 400, { mensagem: 'Requisição inválida', detalhe: err.message });
  }
},

  async deletar(req, res, id) {
    try {
      const deletado = await eventoService.deletar(id);
      if (!deletado) return sendJson(res, 404, { mensagem: 'Evento não encontrado!' });
      sendJson(res, 204);        
    } catch (err) {
      sendJson(res, 400, { mensagem: 'ID inválido!' });
    }
  }

};
