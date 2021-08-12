import React from "react";
import "./CardDetails.css";

export default function CardDetails(props) {
  return (
    <>
      <div>
        <div className="container-detail">
          <span>
            <strong>NAME</strong>
          </span>
          <div>{props.name}</div>
          <img className="img-details " src={props.image} alt={props.name} />
          <div>
            <span>
              <strong>GENRES</strong>
            </span>
            <div>{props.genres?.join(", ")}</div>
          </div>
          <div>
            <div>
              <span>
                <strong>DESCRIPTION: </strong>
              </span>
              <i>{props.description}</i>
            </div>
          </div>
          <div>
            <span>
              <strong>PLATFORMS</strong>
            </span>
            <div>{props.platforms}</div>
          </div>
          <div>
            <span>
              <strong>RELEASED</strong>
            </span>
            <div>{props.released}</div>
          </div>
          <div>
            <span>
              <strong>RATING</strong>
            </span>
            <div>{props.rating}</div>
          </div>
        </div>
      </div>
    </>
  );
}
