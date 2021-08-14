const { Router } = require("express");
const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
const { Videogame, Genre } = require("../db.js");
var validate = require("uuid-validate");

const router = Router();

router.post("/", async (req, res, next) => {
  ////videogame
  const { name, description, released, rating, platforms, genres, image } =
    req.body;

  try {
    const newGame = await Videogame.create({
      id: uuidv4(),
      name,
      description,
      released,
      rating,
      platforms,
      image,
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

      const {
        id,
        name,
        image,
        genres,
        description,
        released,
        rating,
        platforms,
      } = findByDb;

      const fixedDate = released.toLocaleDateString();
      const mappedByDb = {
        id,
        name,
        image,
        genres: genres.map((r) => r.name),
        description,
        released: fixedDate,
        rating: Math.round(rating),
        platforms,
      };

      if (findByDb) {
        res.json(mappedByDb);
      } else {
        res.send("No videogames found");
      }
    } else if (!validate(idVideogame)) {
      let apiGames = await axios.get(
        `https://api.rawg.io/api/games/${idVideogame}?key=7cd9a2674c864e9e827d633e3bd06620`
      );

      let apiGamesData = apiGames.data;

      const {
        id,
        background_image,
        name,
        genres,
        description_raw,
        released,
        rating,
        platforms,
      } = apiGamesData;

      const platformNames = platforms.map((r) => r.platform.name); //esto lo hago para poder tener las plataformas en un string separados por coma.
      const platformsFinal = platformNames.join(", ");
      //.toString();

      const obj = {
        id: id,
        name: name,
        image: background_image,
        genres: genres?.map((r) => r.name),
        description: description_raw,
        released: released,
        rating: Math.round(rating),
        platforms: platformsFinal,
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
