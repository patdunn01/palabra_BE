const mongoose = require("mongoose");

const wordBankSchema = mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  sentence: {
    type: String,
    required: true,
  },
  english: {
    type: String,
    required: true,
  },
  englishmeaning: {
    type: String,
    required: true,
  },
  answers: { 
    type: Array, 
    required: true 
  },
});

const Word = mongoose.model("Word", wordBankSchema);

module.exports = Word;
