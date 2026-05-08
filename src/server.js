const express = require('express');
const mongoose = require('mongoose');

const connectDatabase = require('./config/database');
const limiter = require('./config/security')
const Pessoa = require('./models/pessoa');


const app = express();
const PORT = 3000;

app.use(limiter);
app.use(express.json());

app.get('/debug', async (req, res) => {
    const dbName = mongoose.connection.name;
  
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
  
    res.json({
      banco: dbName,
      colecoes: collections.map(c => c.name),
    });
  });

app.get('/', (req, res) => {
  res.json({ mensagem: 'API REST em Node.js com Express.' });
});

app.get('/pessoas', async (req, res) => {
  try {
    const pessoas = await Pessoa.find();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({
      mensagem: 'Erro ao buscar pessoas.',
      erro: error.message,
    });
  }
});

async function startServer() {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Nao foi possivel iniciar a aplicacao.', error.message);
  }
}

startServer();