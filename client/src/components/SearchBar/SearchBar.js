import "./SearchBar.css";
import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGamesByQuery } from "../../actions";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return alert("insert some videogame name...");
    } else {
      dispatch(getGamesByQuery(search));
      history.push("/home");
    }
  };

  return (
    <>
      <div>
        <form className="search-box" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-txt"
            name="searchInput"
            placeholder="Search some game..."
            onChange={handleChange}
            value={search}
          />

          <button className="search-btn" type="submit" value="Search">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </>
  );
}
