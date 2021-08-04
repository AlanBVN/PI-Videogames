const { Router } = require("express");
const axios = require("axios");
const { Videogame, Genre } = require("../db.js");
const router = Router();

router.get("/", async (req, res) => {

  const { name } = req.query;

  if (!name) {

      const apiVideogamesPromise = await axios.get(
        "https://api.rawg.io/api/games?key=7cd9a2674c864e9e827d633e3bd06620"
      );

      const dbVideogamesPromise = await Videogame.findAll({
        include: Genre,
      });
      
      let apiVideogames = apiVideogamesPromise.data.results;
          
      let allVideogames = apiVideogames.concat(dbVideogamesPromise);
      res.json(allVideogames)


  } else {
  const allVideogames = await axios.get(
    `https://api.rawg.io/api/games?search=${name}&key=7cd9a2674c864e9e827d633e3bd06620`
  );
  
  const allVideogamesData = allVideogames.data.results
  const searchAllNames = allVideogamesData.map(r => r.name)
  const searchDbNames = await Videogame.findAll({
    include: Genre,
  })

  const filterDbNames = searchDbNames.filter((r) => r.name.includes(name));
  const onlyNameDb = filterDbNames.map(r => r.name)

  const allNames = onlyNameDb.concat(searchAllNames);

  if (allNames.length > 0) {
    res.send(allNames);
  } else {
    res.send("No existe ningun videojuego con ese nombre")
  }}} 
  
  )

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