import { useState, useEffect } from "react";
import { getGamesGenre } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    genres: [],
  });

  const dispatch = useDispatch();
  const genresState = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getGamesGenre());
  }, []);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={input.name}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={input.description}
          />
        </div>
        <div>
          <label>Released</label>
          <input
            type="text"
            name="released"
            onChange={handleChange}
            value={input.released}
          />
        </div>
        <div>
          <label>Rating (0 - 5)</label>
          <input
            type="text"
            name="rating"
            onChange={handleChange}
            value={input.rating}
          />
        </div>
        <div>
          <label> Genres </label>
          <select name="genres">
            {genresState.map((m) => {
              return <option value={m.id}> {m.name} </option>;
            })}
          </select>
        </div>
        <div>
          <label>Platforms</label>
          <input
            type="text"
            name="platforms"
            onChange={handleChange}
            value={input.platforms}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
