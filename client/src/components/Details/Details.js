import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGamesById } from "../../actions";
import CardDetails from "../CardDetails/CardDetails";

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
        <CardDetails
          name={videogame.name}
          image={videogame.image}
          genres={videogame.genres}
          description={videogame.description}
          released={videogame.released}
          rating={videogame.rating}
          platforms={videogame.platforms}
        />
      </>
    );
  }
}
