# 📅 Agenda Eletrônica

Projeto acadêmico (projeto 1) desenvolvido por **Fernanda Takao** para a disciplina de **Programação Web Back-End**, ministrada pelos professores **Monique Emídio de Oliveira e Willian Massami Watanabe**. O sistema simula uma agenda eletrônica, com um CRUD para cada uma das entidades: *Evento*, *Notificacao* e *Usuario*. 

## 🚀 Tecnologias Utilizadas

- Node.js
- MongoDB via Mongoose
- HTTP 
- Dotenv
- UUID
- Nodemon

## 📌 Funcionalidades

- Cadastro de usuários
- Agendamento de eventos com data e descrição
- Atualização e listagem de eventos
- Armazenamento de logs
- Validações e tratamento de exceções
- Conexão com banco MongoDB local

## 🔧 Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/FernandaTakao/AgendaEletronica.git
cd AgendaEletronica
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo, ou adaptado ao seu contexto:

```
MONGODB_URI=mongodb://localhost:27017/agenda
```

4. Inicie o servidor:

```bash
node server.js
```

---

## Exemplos de Requisições

### ✅ Criar usuário (POST)
`POST http://localhost:3000/usuarios`

```json
{
  "nome": "Emma Bovary",
  "email": "emmabovary@example.com",
  "senha": "senha1234"
}
```

### 📅 Criar evento (POST)
`POST http://localhost:3000/eventos`

```json
{
  "titulo": "Terapia",
  "descricao": "Segunda sessão de terapia",
  "inicio": "2025-06-12T15:30:00Z",
  "fim": "2025-06-12T15:30:00Z",
  "local": "Clinica Estabilizar",
  "tags": "terapia"
}
```

### 📑 Atualizar evento (PUT)
`PUT http://localhost:3000/eventos/{id}`

```json
{
  "titulo": "Consulta psiquiátrica",
  "descricao": "Consulta psiquiátrica bimestral",
  "inicio": "2025-06-12T15:30:00Z",
  "fim": "2025-06-12T15:30:00Z",
  "local": "Clinica Estabilizar",
  "tags": "psiquiatra"
}
```

### 📥 Listar eventos (GET)
`GET http://localhost:3000/eventos`

---

## ⚠️ Observações

- O campo `senha` foi adicionado apenas para simular aplicações reais. 
- Os logs de requisições e erros são gravados em `logs/requests.log` e `logs/errors.log`.

---

## 📚 Créditos 

Este projeto foi desenvolvido como objeto avaliativo da disciplina Programação Web Back-End e tem perspectiva de evoluir e se tornar produto de um TCC focado em saúde mental e registro de pensamentos disfuncionais. Os materiais de apoio incluíram as aulas da disciplina, vídeoaulas complementares no YouTube e tópicos no fórum online Stackoverflow.
