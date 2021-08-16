import React from "react";
import "./GameCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function GameCard(props) {
  return (
    <>
      <div className="card-container">
        <img className="img-card" src={props.image} alt={props.name} />
        <div className="card-info">
          <h3 className="name-txt">{props.name}</h3>
          <div className="card-rating">
            <FontAwesomeIcon icon={faStar} />
            {props.rating}
          </div>
          <div className="card-info-text">
            <span className="genres-txt">{props.genres?.join(" - ")}</span>
          </div>
        </div>
      </div>
    </>
  );
}
