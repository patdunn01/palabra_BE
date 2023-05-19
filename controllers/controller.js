const asyncHandler = require('express-async-handler');
const Word = require("../models/wordBankSchema");

const getWords = asyncHandler(async (req, res) => {
  const events = await Word.find();
  res.status(200).json(events);
  });

const setWords = asyncHandler(async (req, res) => {
  const word = await Word.create({
    word: req.body.word,
    sentence: req.body.sentence,
    english: req.body.english,
    englishmeaning: req.body.englishmeaning,
    answers: req.body.answers,
    
  })
  res.status(200).json(word);
})


module.exports = { 
  getWords,
  setWords,
};