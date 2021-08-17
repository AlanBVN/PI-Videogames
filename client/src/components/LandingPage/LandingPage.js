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
      <img src="https://i.imgur.com/GZgOtZV.jpg" alt="aa" />
      <div className="button-landing">
        <Link to="/home">
          <button>Home!</button>
        </Link>
      </div>
    </div>
  );
}

//onClick={() => dispatch(getAllVideogames())}
