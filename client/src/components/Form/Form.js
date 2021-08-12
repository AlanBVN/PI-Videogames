import { useState, useEffect } from "react";
import { getGamesGenre, postVideogame } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Form() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    image: "",
    genres: [],
  });

  console.log(input);
  const history = useHistory();
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

  const handleGenres = (e) => {
    setInput({
      ...input,
      [e.target.name]: Array.from(e.target.selectedOptions).map((p) => p.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postVideogame(input));
    alert("Game submitted");
    history.push("/home");
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
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={input.description}
            required
          />
        </div>
        <div>
          <label>Released</label>
          <input
            type="date"
            name="released"
            onChange={handleChange}
            value={input.released}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={input.image}
            required
          />
        </div>
        <div>
          <label>Rating (0 - 5)</label>
          <input
            type="number"
            min="0"
            max="5"
            name="rating"
            onChange={handleChange}
            value={input.rating}
          />
        </div>
        <div>
          <label> Genres </label>
          <select
            name="genres"
            multiple="multiple"
            onChange={handleGenres}
            required
          >
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
            required
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
