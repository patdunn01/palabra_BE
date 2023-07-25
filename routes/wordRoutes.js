const express = require("express");
const router = express.Router();

const {
  getWords,
  getMots,
  setWords,
  setMots,
  getParole,
  setParole
} = require("../controllers/controller");

router.route("/palabras").get(getWords).post(setWords);
router.route("/mots").get(getMots).post(setMots);
router.route("/parole").get(getParole).post(setParole);

module.exports = router;
