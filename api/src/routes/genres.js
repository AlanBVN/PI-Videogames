const { Router } = require("express");
const axios = require("axios").default;
const { Genre } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => {

  try {
    let allGenres = await Genre.findAll();

    if (!allGenres.length) {
      const apiGenres = await axios.get(
        "https://api.rawg.io/api/genres?key=7cd9a2674c864e9e827d633e3bd06620"
      );

      const apiNames = apiGenres.data.results;

      let apiData = [];

      apiNames.map((r) =>
        apiData.push({
          id: r.id,
          name: r.name,
        })
      );

      const allGenres = await Genre.bulkCreate(apiData);
      res.json(allGenres);
    } else {
      let allGenresMap = allGenres.map((r) => {
        return { id: r.id, name: r.name };
      });
      res.json(allGenresMap);
    }
  } catch (error) {
    next(error);
  }

});


module.exports = router;
