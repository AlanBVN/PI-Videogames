import React from "react";
import "./GameCard.css";

export default function GameCard(props) {
  return (
    <>
      <div className="gameCard">
        <h3>{props.name}</h3>
      </div>
      <div>{props.genres.join(", ")}</div>
      <img className="img" src={props.imagen} alt={props.name} />
    </>
  );
}
