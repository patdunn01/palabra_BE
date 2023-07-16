const mongoose = require("mongoose");


const motBankSchema = mongoose.Schema({
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

const Mot = mongoose.model("Mot", motBankSchema);

module.exports =  Mot;
