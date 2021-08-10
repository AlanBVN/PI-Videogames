import React from "react";
import "./GameCard.css";

export default function GameCard(props) {
  return (
    <>
      <div className="Container">
        <div className="gameCard">
          <div className="Name">{props.name}</div>
        </div>
        <img className="img" src={props.imagen} alt={props.name} />
        <div className="Genres">{props.genres?.join(", ")}</div>
      </div>
    </>
  );
}
