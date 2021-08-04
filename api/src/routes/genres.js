const { Router } = require("express");
const axios = require("axios").default;
const { Genre } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const genresAll = await Genre.findAll().then((genres) => {
      res.json(genresAll);
    });
  } catch (error) {
    res.json(error);
  }
});


module.exports = router;
