import "./Nav.css";
import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className="Navbar">
        <div className="leftSide">
          <div className="nav-links" id={showLinks ? "hidden" : ""}>
            <a href="/home">Home</a>
            <a href="/addgame">Add game</a>
          </div>
          <button onClick={() => setShowLinks(!showLinks)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="rightSide"></div>
        <SearchBar />
      </div>
    </>
  );
}
