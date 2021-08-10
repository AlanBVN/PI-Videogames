import "./Nav.css";
import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGamesByQuery, getAllVideogames } from "../../actions";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

export default function Nav() {
  const [search, setSearch] = useState("");

  const gamesSearch = useSelector((store) => store.searchresults);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return alert("No estas buscando nada");
    } else {
      dispatch(getGamesByQuery(search));
      history.push("/home");
    }
  };

  return (
    <>
      <div className="NavBar">
        <Link to="/home">
          <span>NAVBAR</span>
        </Link>
        <Link to="/addgame">
          <span>ADD GAME</span>
        </Link>
        <button onClick={() => dispatch(getAllVideogames())}>
          HOME NAVBAR!
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchInput"
            onChange={handleChange}
            value={search}
          />
          <input type="submit" value="Search" />
        </form>
        {/* <div className="container">
        {gamesSearch?.map((search) => (
          <div key={search.id}>
            <GameCard
              name={search.name}
              imagen={search.image}
              genres={search.genres}
            />
          </div>
        ))}
      </div> */}
      </div>
    </>
  );
}

/* tenemos que tener 

- Searchbar
- Logo
- AddVideogame

*/
