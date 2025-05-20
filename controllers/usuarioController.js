const usuarioService = require('../services/usuarioService');
const { sendJson, getBodyData } = require('../utils/http');
const { logError } = require('../utils/logger');

function validar(dados) {
  if (!dados.nome)  throw new Error('Campo "nome" é obrigatório');
  if (!dados.email) throw new Error('Campo "email" é obrigatório');
  if (!dados.senha) throw new Error('Campo "senha" é obrigatório');
}

module.exports = {
  async listar(req, res) {
    try {
      const lista = await usuarioService.listar();
      sendJson(res, 200, lista);
    } catch (err) {
      logError(err);
      sendJson(res, 500, { mensagem: 'Erro interno' });
    }
  },

  async criar(req, res) {
    try {
      const body = JSON.parse(await getBodyData(req));
      validar(body);
      const criado = await usuarioService.criar(body);
      sendJson(res, 201, criado);
    } catch (err) {
      logError(err);
      const msg = err.code === 11000 ? 'Email já cadastrado' : err.message;
      sendJson(res, 400, { mensagem: msg });
    }
  },

  async buscarPorId(req, res, id) {
    try {
      const usuario = await usuarioService.buscarPorId(id);
      if (!usuario) return sendJson(res, 404, { mensagem: 'Usuário não encontrado' });
      sendJson(res, 200, usuario);
    } catch (err) {
      logError(err);
      sendJson(res, 400, { mensagem: 'ID inválido' });
    }
  },

  async atualizar(req, res, id) {
    try {
      const body = JSON.parse(await getBodyData(req));
      validar(body);
      const up = await usuarioService.atualizar(id, body);
      if (!up) return sendJson(res, 404, { mensagem: 'Usuário não encontrado' });
      sendJson(res, 200, up);
    } catch (err) {
      logError(err);
      const msg = err.code === 11000 ? 'Email já cadastrado' : err.message;
      sendJson(res, 400, { mensagem: msg });
    }
  },

  async deletar(req, res, id) {
    try {
      const del = await usuarioService.deletar(id);
      if (!del) return sendJson(res, 404, { mensagem: 'Usuário não encontrado' });
      sendJson(res, 204);
    } catch (err) {
      logError(err);
      sendJson(res, 400, { mensagem: 'ID inválido' });
    }
  }
};