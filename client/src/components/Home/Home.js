import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GameCard from "../GameCard/GameCard";
import { Link } from "react-router-dom";
import "./Home.css";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filters/Filters";

export default function Home() {
  const games = useSelector((store) => store.videogames);
  const [posts, setPosts] = useState(games);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setPosts([...games]);
  }, [games]);

  return (
    <div>
      <div>
        <Filters />
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
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
