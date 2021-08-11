import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../actions";
import GameCard from "../GameCard/GameCard";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const games = useSelector((store) => store.videogames);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    dispatch(getAllVideogames);
    setPosts(games);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <div>
        <span>Lista de juegos </span>
        <div className="container">
          {currentPosts.map((game) => (
            <div key={game.id}>
              <Link to={`/videogame/${game.id}`}>
                <GameCard
                  name={game.name}
                  image={game.image}
                  genres={game.genres}
                  rating={game.rating}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
