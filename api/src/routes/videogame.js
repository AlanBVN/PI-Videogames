const { Router } = require("express");
const axios = require("axios").default;

const router = Router();

router.post("/", (req, res) => {
  ////videogame
  res.json("videogame");
});

router.get("/:{idVideogame}", (req, res) => {
  ///videogame/{idVideogame}
  const { idVideogame } = req.params;
  res.json("get videogame por id");
});

module.exports = router;
