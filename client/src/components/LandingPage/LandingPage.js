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
    <>
      <div className="landing-container">
        <section className="full-page">
          <div className="full-inner">
            <div className="content">
              <h1 className="landing-title"> theGumers </h1>
              <h1> Welcome to the site </h1>
              <Link to="/home">
                <button className="btn">LET'S PLAY!</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

//onClick={() => dispatch(getAllVideogames())}

<Link to="/home">
  <button>Home!</button>
</Link>;