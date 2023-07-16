const express = require("express");
const router = express.Router();

const {
  getWords,
  getMots,
  setWords,
  setMots,
} = require("../controllers/controller");

router.route("/palabras").get(getWords).post(setWords);
router.route("/mots").get(getMots).post(setMots);

module.exports = router;
