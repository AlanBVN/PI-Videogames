import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../actions";
import GameCard from "../GameCard/GameCard";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const games = useSelector((store) => store.videogames);

  return (
    <div>
      <h1>HOME!</h1>
      <div>
        <span>Lista de juegos </span>
        <button onClick={() => dispatch(getAllVideogames())}>GET GAMES!</button>
        <div className="container">
          {games.map((game) => (
            <div key={game.id}>
              <GameCard
                name={game.name}
                imagen={game.imagen}
                genres={game.genres}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
