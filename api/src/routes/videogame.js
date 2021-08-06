const { Router } = require("express");
const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
const { Videogame, Genre } = require("../db.js");
var validate = require("uuid-validate");

const router = Router();

router.post("/", async (req, res, next) => {
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
    next(error);
  }
});

//________________________________________________________________//

router.get("/:idVideogame", async (req, res, next) => {
  try {
    const { idVideogame } = req.params;

    if (validate(idVideogame)) {
      let findByDb = await Videogame.findByPk(idVideogame, {
        include: Genre,
      });

      if (findByDb) {
        res.json(findByDb);
      } else {
        res.send("No videogames found");
      }
    } else if (!validate(idVideogame)) {
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
      if (obj) {
        res.json(obj);
      } else {
        res.send("No videogames found");
      }
    } else {
      res.json("No videogames found");
    }
  } catch (error) {
    next(error);
  }
});


module.exports = router;
