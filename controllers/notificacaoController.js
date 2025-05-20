const notificacaoService   = require('../services/notificacaoService');
const { sendJson, getBodyData } = require('../utils/http');
const { logError } = require('../utils/logger');

function validar(dados) {
  if (!dados.evento)   throw new Error('Campo "evento" é obrigatório');
  if (!dados.mensagem) throw new Error('Campo "mensagem" é obrigatório');
  if (!dados.dia) throw new Error('Campo "dia" é obrigatório');
}

module.exports = {
  async listar(req, res) {
    try {
      const lista = await notificacaoService.listar();
      sendJson(res, 200, lista);
    } catch (err) {
      logError(err);
      sendJson(res, 500, { mensagem: 'Erro inesperado' });
    }
  },

  async criar(req, res) {
    try {
      const body = JSON.parse(await getBodyData(req));
      validar(body);
      const criada = await notificacaoService.criar(body);
      sendJson(res, 201, criada);
    } catch (err) {
      logError(err);
      sendJson(res, 400, { mensagem: err.message });
    }
  },

  async buscarPorId(req, res, id) {
    try {
      const item = await notificacaoService.buscarPorId(id);
      if (!item) return sendJson(res, 404, { mensagem: 'Notificação não encontrada' });
      sendJson(res, 200, item);
    } catch (err) {
      logError(err);
      sendJson(res, 400, { mensagem: 'ID inválido!' });
    }
  },

  async atualizar(req, res, id) {
  try {
    const body = await getBodyData(req);
    const noti = await notificacaoService.atualizar(id, JSON.parse(body));
    if (!noti) return sendJson(res, 404, { mensagem: 'Notificação não encontrada!' });
    sendJson(res, 200, noti);
  } catch (err) {
    logError(err);
    sendJson(res, 400, { mensagem: err.message });
  }
},

  async deletar(req, res, id) {
    try {
      const del = await notificacaoService.deletar(id);
      if (!del) return sendJson(res, 404, { mensagem: 'Notificação não encontrada' });
      sendJson(res, 204);
    } catch (err) {
      logError(err);
      sendJson(res, 400, { mensagem: 'ID inválido' });
    }
  }
};