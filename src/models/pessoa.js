const mongoose = require('mongoose');

const pessoaSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    ra: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('pessoas', pessoaSchema, 'pessoas');