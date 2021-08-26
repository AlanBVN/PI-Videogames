import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./CardDetails.css";
import Footer from "../Footer/Footer";

export default function CardDetails(props) {
  return (
    <>
      <div className="body-details">
        <section>
          <div className="container-details">
            <div className="left">
              <img src={props.image} alt="{props.name}" />
            </div>
            <div className="right">
              <div className="content">
                <h1>{props.name}</h1>
                <span>Released on {props.released}</span>
                <p>{props.description}</p>
                <label>Genres</label>
                <p>{props.genres?.join(" - ")}</p>
                <label>Platforms:</label>
                <p>{props.platforms}</p>
                <div>
                  <label>Rating: </label>
                  {props.rating >= "1" && (
                    <FontAwesomeIcon icon={faStar} className="stars-details" />
                  )}
                  {props.rating >= "2" && (
                    <FontAwesomeIcon icon={faStar} className="stars-details" />
                  )}
                  {props.rating >= "3" && (
                    <FontAwesomeIcon icon={faStar} className="stars-details" />
                  )}
                  {props.rating >= "4" && (
                    <FontAwesomeIcon icon={faStar} className="stars-details" />
                  )}
                  {props.rating == "5" && (
                    <FontAwesomeIcon icon={faStar} className="stars-details" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
