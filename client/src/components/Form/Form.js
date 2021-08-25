import { useState, useEffect } from "react";
import { getGamesGenre, postVideogame } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Form.css";
import Footer from "../Footer/Footer";

export default function Form() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    image: "",
    genres: [], //tengo q pushear aca
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
    <div className="body-form">
      <div className="form-container">
        <div className="title">
          <h3> Create your game </h3>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Name</label>
            <input
              placeholder="Name of the game..."
              className="input"
              type="text"
              name="name"
              onChange={handleChange}
              value={input.name}
              required
            />
          </div>
          <div className="input-field">
            <label>Description</label>
            <textarea
              className="textarea"
              placeholder="Description of the game..."
              name="description"
              onChange={handleChange}
              value={input.description}
              required
            />
          </div>
          <div className="input-field">
            <label>Released</label>
            <input
              className="input"
              type="date"
              name="released"
              onChange={handleChange}
              value={input.released}
            />
          </div>
          <div className="input-field">
            <label>Image</label>
            <input
              className="input"
              placeholder="Add an image URL for your game..."
              type="text"
              name="image"
              onChange={handleChange}
              value={input.image}
              required
            />
          </div>
          <div className="input-field">
            <label>Rating (0 - 5)</label>
            <input
              placeholder="Rate your game (1 - 5)..."
              className="input"
              type="number"
              min="0"
              max="5"
              name="rating"
              onChange={handleChange}
              value={input.rating}
            />
          </div>
          <div className="input-field">
            <label> Genres </label>
            <div className="custom-select">
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
          </div>
          <div className="extra-text">
            Hold the CTRL key to select multple genres
          </div>
          <div className="input-field">
            <label>Platforms</label>
            <input
              className="input"
              placeholder="Select the platforms of your game..."
              type="text"
              name="platforms"
              onChange={handleChange}
              value={input.platforms}
              required
            />
          </div>
          <div className="input-field">
            <button className="input" type="submit">
              <span>SUBMIT</span>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
