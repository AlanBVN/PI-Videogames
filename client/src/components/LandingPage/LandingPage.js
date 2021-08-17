import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllVideogames } from "../../actions";
import "./LandingPage.css";
export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideogames());
  }, []);

  return (
    <div className="container-landing">
      <Link to="/home">
        <button>Home!</button>
      </Link>
    </div>
  );
}

//onClick={() => dispatch(getAllVideogames())}
