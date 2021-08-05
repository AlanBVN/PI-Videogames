const { Router } = require("express");
const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
const { Videogame, Genre } = require("../db.js");
var validate = require("uuid-validate");

const router = Router();

router.post("/", async (req, res) => {
  ////videogame
  const { name, description, released, rating, platforms, genres } = req.body;

  try {
    const newGame = await Videogame.create({
      id: uuidv4(),
      name,
      description,
      released,
      rating,
      platforms,
    });

    await newGame.addGenres(genres);
    res.json(newGame);
  } catch (error) {
    res.json(error);
  }
});

//________________________________________________________________//

router.get("/:idVideogame", async (req, res) => {
  const { idVideogame } = req.params;

  if (validate(idVideogame)) {
    try {
      let findByDb = await Videogame.findByPk(idVideogame, {
        include: Genre,
      });

      return findByDb ? res.json(findByDb) : res.send("No videogames found");
    } catch (error) {
      res.send(error);
    }
  } else if (!validate(idVideogame)) {
    try {
      let apiGames = await axios.get(
        `https://api.rawg.io/api/games/${idVideogame}?key=7cd9a2674c864e9e827d633e3bd06620`
      );

      let apiGamesData = apiGames.data;

      const {
        background_image,
        name,
        genres,
        description,
        released,
        rating,
        platforms,
      } = apiGamesData;

      const obj = {
        name: name,
        background_image: background_image,
        genres: genres,
        description: description,
        released: released,
        rating: rating,
        platforms: platforms,
      };
      return obj ? res.json(obj) : res.send("No videogames found");
    } catch (error) {
      res.send(error);
    }
  } else {
    res.json("No videogames found");
  }
});


module.exports = router;
