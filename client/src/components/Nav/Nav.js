import "./Nav.css";
import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className="body">
        <nav>
          <div className="logo-nav">
            <h3>theGumers</h3>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/addgame">
                <span>Add game</span>
              </Link>
            </li>
            <li>
              <Link to="/home">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/home">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <span>SearchBar</span>
            </li>
          </ul>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    </>
  );
}
