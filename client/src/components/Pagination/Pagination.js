//import "./Pagination.css";

function Pagination({ postsPerPage, totalPosts, setCurrentPage }) {
  const p = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    p.push(i);
  }
  function paginate(number) {
    setCurrentPage(number);
  }

  return (
    <nav>
      <div>
        {p.map((num) => (
          <button onClick={() => paginate(num)}>{num}</button>
        ))}
      </div>
    </nav>
  );
}

export default Pagination;
