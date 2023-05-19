const express = require("express");
const router = express.Router();

const {
    getWords,
    setWords,
  } = require("../controllers/controller");


router.route("/").get(getWords).post(setWords);

module.exports = router;