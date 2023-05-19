const asyncHandler = require('express-async-handler');
const Word = require("../models/wordBankSchema");

const getWords = asyncHandler(async (req, res) => {
  const events = await Word.find({});
  res.status(200).json(events);
  });


module.exports = { 
  getWords,
};