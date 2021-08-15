import "./SearchBar.css";
import { React, useState } from "react";
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchInput"
            onChange={handleChange}
            value={search}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    </>
  );
}
