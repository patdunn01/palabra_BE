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
  englishMeaning: {
    type: String,
    required: true,
  },
  answers: { type: [String], required: true },
});

module.exports = mongoose.model("Word", wordBankSchema);