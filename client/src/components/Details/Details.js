import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGamesById } from "../../actions";
import GameCard from "../GameCard/GameCard";

export default function Details(props) {
  const id = props.match.params.id;
  const dispatch = useDispatch();

  const videogame = useSelector((state) => state.videogame);

  useEffect(() => {
    dispatch(getGamesById(id));
  }, [id]);

  if (id != videogame.id) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <GameCard
          name={videogame.name}
          imagen={videogame.background_image}
          genres={videogame.genres}
        />
      </>
    );
  }
}
