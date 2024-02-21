const express = require("express");

const router = express.Router();

/* GET users listing. */
// eslint-disable-next-line
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// eslint-disable-next-line
router.get("/cool", function (req, res, next) {
  res.send("You're so cool");
});

module.exports = router;
