const mongoose = require("mongoose");


const parolaBankSchema = mongoose.Schema({
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

const Parola = mongoose.model("Parola", parolaBankSchema);

module.exports =  Parola;
