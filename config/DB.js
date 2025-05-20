require('dotenv').config();
const mongoose = require('mongoose');

// para depurar
console.log('Valor do .env:', process.env.MONGO_URI);  

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar no MongoDB:', err));