const express = require("express");
const router = express.Router();

const {
    getWords
  } = require("../controllers/controller");


router.route("/").get(getWords)

module.exports = router;