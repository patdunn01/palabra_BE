const Word = require("../models/wordBankSchema");

const getWords = async (req, res) => {
    const events = await Word.find({});
    res.status(200).json(events);
  };


module.exports = getWords;