const express = require("express");

const router = express.Router();

/* GET home page. */
// eslint-disable-next-line
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
module.exports = router;
