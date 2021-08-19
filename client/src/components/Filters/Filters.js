import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGenres, getGamesGenre, orderFilter } from "../../actions";
import "./Filters.css";

export default function Filters() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGamesGenre());
  }, []);

  function handleChange(e) {
    e.preventDefault();
    dispatch(orderFilter(e.target.value));
  }

  function handleGenres(e) {
    e.preventDefault();
    dispatch(filterGenres(e.target.value));
  }

  return (
    <div className="select-container">
      <div className="select">
        <select name="orders" onChange={handleChange}>
          <option selected disabled>
            Order by...
          </option>
          <option value="ALL">All</option>
          <option value="A-Z">A - Z</option>
          <option value="Z-A">Z - A</option>
          <option value="ASC"> Higher rating</option>
          <option value="DESC"> Lower rating</option>
          <option value="API"> Games by API</option>
          <option value="DB"> Games by DB</option>
        </select>
      </div>
      <div className="select2">
        <select classname="order-genres" name="filters" onChange={handleGenres}>
          <option selected disabled>
            Filter by...
          </option>
          <option value="ALL">All</option>
          {genres?.map((g) => (
            <option value={g.name}>{g.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
