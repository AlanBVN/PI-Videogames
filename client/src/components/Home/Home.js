import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GameCard from "../GameCard/GameCard";
import { Link } from "react-router-dom";
import "./Home.css";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filters/Filters";
import { getAllVideogames } from "../../actions";
import Footer from "../Footer/Footer";

export default function Home() {
  const videogames = useSelector((store) => store.videogames);
  const filteredGames = useSelector((store) => store.filteredGames);
  const [posts, setPosts] = useState(videogames);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const orderBy = useSelector((state) => state.orderedBy);
  const filteredBy = useSelector((state) => state.filteredBy);
  const dispatch = useDispatch();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (!videogames.length) {
      dispatch(getAllVideogames());
    }
  }, []);

  useEffect(() => {
    if (filteredBy === "ALL" && orderBy === "ALL") {
      setPosts(videogames);
    } else {
      setPosts(filteredGames);
    }
    setCurrentPage(1);
  }, [videogames, filteredGames, filteredBy, orderBy]);

  return (
    <div>
      <div>
        <Filters />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          setCurrentPage={setCurrentPage}
        />
        <div className="container">
          {currentPosts.map((game) => (
            <div key={game.id}>
              <Link to={`/videogame/${game.id}`} className="link-card">
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
      <Footer />
    </div>
  );
}
