const { Router } = require("express");
const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
const { Videogame, Genre } = require("../db.js");

const router = Router();

router.post("/", (req, res) => {
  ////videogame
  const { name, description, released, rating, platforms } = req.body;

  try {
    Videogame.create({
      id: uuidv4(),
      name,
      description,
      released,
      rating,
      platforms,
    }).then((createdVideogame) => {
      res.json(createdVideogame);
    });
  } catch (error) {
    res.json(error);
  }
});

router.get("/:idVideogame", async (req, res) => {
  ///videogame/{idVideogame}
  const { idVideogame } = req.params;

  const validation = typeof idVideogame === "string";

  console.log(validation);

  let apiGames = await axios.get(
    `https://api.rawg.io/api/games/${idVideogame}?key=7cd9a2674c864e9e827d633e3bd06620`
  );

  let apiGamesData = apiGames.data;

  let findByDb = await Videogame.findByPk(idVideogame, {
    include: Genre,
  });

  // console.log(findByDb);

  try {
    if (validation) {
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
      return res.json(obj);
    } else {
      res.json(findByDb);
    }
  } catch (error) {
    res.json(error);
  }
});


module.exports = router;
