import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGenres, getGamesGenre, orderFilter } from "../../actions";

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
    <div>
      <label>Order by: </label>
      <select name="orders" onChange={handleChange}>
        <option value="ALL">DEFAULT</option>
        <optgroup label="Alphabetic">
          <option value="A-Z">A - Z</option>
          <option value="Z-A">Z - A</option>
        </optgroup>

        <optgroup label="Rating">
          <option value="ASC">Higher to lower</option>
          <option value="DESC">Lower to higher</option>
        </optgroup>
      </select>

      <label>Order by genres: </label>
      <select name="filters" onChange={handleGenres}>
        <option value="ALL">DEFAULT</option>
        <optgroup label="Genres">
          {genres?.map((g) => (
            <option value={g.name}>{g.name}</option>
          ))}
        </optgroup>
      </select>
    </div>
  );
}
