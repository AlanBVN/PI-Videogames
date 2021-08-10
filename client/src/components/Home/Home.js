import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getAllVideogames } from "../../actions";
import GameCard from "../GameCard/GameCard";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  //const dispatch = useDispatch();
  const games = useSelector((store) => store.videogames);

  return (
    <div>
      {/* <button onClick={() => dispatch(getAllVideogames())}>LOGO NAVBAR!</button> */}
      <div>
        <span>Lista de juegos </span>
        {/* <button onClick={() => dispatch(getAllVideogames())}>GET GAMES!</button> */}
        <div className="container">
          {games.map((game) => (
            <div key={game.id}>
              <Link to={`/videogame/${game.id}`}>
                <GameCard
                  name={game.name}
                  imagen={game.imagen}
                  genres={game.genres}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
