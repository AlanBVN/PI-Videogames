import React from "react";
import "./CardDetails.css";

export default function CardDetails(props) {
  return (
    <>
      <div>
        <div class="container-detail">
          <div>{props.name}</div>
        </div>
        <img className="img-details " src={props.image} alt={props.name} />
        <div>{props.genres?.join(", ")}</div>
        <div>{props.description}</div>
        <div>{props.platforms}</div>
        <div>{props.released}</div>
        <div>{props.rating}</div>
      </div>
    </>
  );
}
