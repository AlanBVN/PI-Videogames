const { Router } = require("express");
const axios = require("axios").default;
const router = Router();

router.get("/", (req, res) => {
  //videogames.

  res.json("videogameSS");
});

router.get("/", (req, res) => {
  //"/videogames?name="
  const { name } = req.query;
  res.json("videogame?name");
});

module.exports = router;
