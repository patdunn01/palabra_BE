const mongoose = require("mongoose");


const wortBankSchema = mongoose.Schema({
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

const Wort = mongoose.model("Wort", wortBankSchema);

module.exports =  Wort;
