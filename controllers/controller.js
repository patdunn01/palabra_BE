const asyncHandler = require('express-async-handler');
const Word = require("../models/wordBankSchema");
const Mot = require("../models/motBankSchema");
const Parola = require("../models/parolaBankSchema");
const Wort = require("../models/wortBankSchema");


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

const getMots = asyncHandler(async (req, res) => {
  const mots = await Mot.find();
  res.status(200).json(mots);
  });

const setMots = asyncHandler(async (req, res) => {
  const mot = await Mot.create({
    word: req.body.word,
    sentence: req.body.sentence,
    english: req.body.english,
    englishmeaning: req.body.englishmeaning,
    answers: req.body.answers,
    
  })
  res.status(200).json(mot);
})

const getParole = asyncHandler(async (req, res) => {
  const parole = await Parola.find();
  res.status(200).json(parole);
  });

const setParole = asyncHandler(async (req, res) => {
  const parola = await Parola.create({
    word: req.body.word,
    sentence: req.body.sentence,
    english: req.body.english,
    englishmeaning: req.body.englishmeaning,
    answers: req.body.answers,
    
  })
  res.status(200).json(parola);
})

const getWort = asyncHandler(async (req, res) => {
  const wort = await Wort.find();
  res.status(200).json(wort);
  });

const setWort = asyncHandler(async (req, res) => {
  const wort = await Wort.create({
    word: req.body.word,
    sentence: req.body.sentence,
    english: req.body.english,
    englishmeaning: req.body.englishmeaning,
    answers: req.body.answers,
    
  })
  res.status(200).json(wort);
})

module.exports = { 
  getWords,
  getMots,
  getParole,
  getWort,
  setWords,
  setMots,
  setParole,
  setWort
};