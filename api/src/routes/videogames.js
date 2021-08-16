const { Router } = require("express");
const axios = require("axios");
const { Videogame, Genre } = require("../db.js");
const router = Router();
const { Op } = require("sequelize");

router.get("/", async (req, res, next) => {
  const { name } = req.query;

  try {
    if (!name) {
      // const apiVideogamesPromise = await axios.get(
      //   "https://api.rawg.io/api/games?key=7cd9a2674c864e9e827d633e3bd06620&page_size=40"
      // );
      // const apiVideogamesPromise2 = await axios.get(
      //   "https://api.rawg.io/api/games?key=7cd9a2674c864e9e827d633e3bd06620&page=2&page_size=40"
      // );
      // const apiVideogamesPromise3 = await axios.get(
      //   "https://api.rawg.io/api/games?key=7cd9a2674c864e9e827d633e3bd06620&page=3&page_size=40"
      // );

      const dbVideogamesPromise = await Videogame.findAll({
        include: Genre,
      });

      // let apiVideogames = apiVideogamesPromise.data.results;
      // let apiVideogames2 = apiVideogamesPromise2.data.results;
      // let apiVideogames3 = apiVideogamesPromise3.data.results;

      // let allVideogames = apiVideogames.concat(
      //   apiVideogames2,
      //   apiVideogames3,
      //   dbVideogamesPromise
      // );

      let finalData = dbVideogamesPromise.map((r) => {
        return {
          id: r.id,
          name: r.name,
          image: r.background_image ? r.background_image : r.image,
          rating: Math.round(r.rating),
          genres: r.genres.map((r) => r.name),
        };
      });

      //sliceData = finalData.slice(0, 9);

      res.json(finalData);
    } else {
      const allVideogames = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=7cd9a2674c864e9e827d633e3bd06620&page_size=40`
      );

      const allVideogamesData = allVideogames.data.results;

      const searchAllNames = allVideogamesData.map((r) => {
        return {
          id: r.id,
          name: r.name,
          image: r.background_image,
          rating: Math.round(r.rating),
          genres: r.genres.map((r) => r.name),
        };
      });

      const searchDbNames = await Videogame.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        include: Genre,
      });

      // const filterDbNames = searchDbNames.filter((r) => r.name.includes(name));
      const onlyNameDb = searchDbNames.map((r) => {
        return {
          id: r.id,
          name: r.name,
          image: r.image,
          rating: Math.round(r.rating),
          genres: r.genres.map((r) => r.name),
        };
      });

      const allNames = onlyNameDb.concat(searchAllNames);

      //sliceRender = allNames.slice(0,9)

      if (allNames.length > 0) {
        res.send(allNames);
      } else {
        res.send("No existe ningun videojuego con ese nombre");
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;

/* 

Genre: 
- Traer todos los tipos de generos de la api. 
- Guardarlos en la BD.
- Utilizarlos desde ahi.

Videogame: [POST]
- Recibe datos por body. X
- Crea un videojuego en la base de datos. X
--- [GET]
- Recibir el id por params. X 
- Traer a partir de esto el detalle de el juego de ese id. X
- incluir los generos asociados. X

Videogames:
- Obtener el listado de videogames X 
- Devolve los datos para la ruta principal X

-- ?name=...
- recibir el name por query. X
- obtener listado de los 15 primeros juegos que contengan ese query. X
- si no existe ningun videojuego mostrar un mensaje adecuado. X

*/