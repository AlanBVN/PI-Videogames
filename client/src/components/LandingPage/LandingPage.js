import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../actions";

export default function LandingPage() {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/home">
        <button>Home!</button>
      </Link>
    </div>
  );
}

//onClick={() => dispatch(getAllVideogames())}