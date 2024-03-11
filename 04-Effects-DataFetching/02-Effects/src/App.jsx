import { useState, useEffect } from "react";
import PropTypes from "prop-types";



const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const NavBar = ({ movies, setQuery, querry }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search setQuery={setQuery} querry={querry} />
      <SearchResult movies={movies} />
    </nav>
  );
};

const Logo = () => (
  <div className="logo">
    <span role="img">🍿</span>
    <h1>usePopcorn</h1>
  </div>
);

const Search = ({ querry, setQuery }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={querry}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

const SearchResult = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies && movies.length}</strong> results
    </p>
  );
};

const ListBox = ({ setIsOpen1, isOpen1, movies }) => {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
};

const MovieList = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>🗓</span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const WatchedBox = ({
  setIsOpen2,
  watched,
  isOpen2,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
}) => {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummer
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />

          <ul className="list">
            {watched.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const WatchedSummer = ({
  watched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
}) => {
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

const Loading = () => {
  return <p className="loader">Loading..</p>;
};

const Errors = ({ message }) => {
  return (
    <p className="error">
      <span>❌ Error ! 🥲</span> {message}
    </p>
  );
};

const Main = ({
  setIsOpen2,
  movies,
  watched,
  isOpen1,
  isOpen2,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
  isLoading,
  errors,
  setIsOpen1,
}) => {
  return (
    <main className="main">
      {isLoading && <Loading />}
      {!isLoading && errors && <Errors message={errors} />}
      {!isLoading && !errors && (
        <ListBox setIsOpen1={setIsOpen1} isOpen1={isOpen1} movies={movies} />
      )}
      <WatchedBox
        isOpen2={isOpen2}
        movies={movies}
        watched={watched}
        setIsOpen2={setIsOpen2}
        avgImdbRating={avgImdbRating}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
      />
    </main>
  );
};

const Key = "ab3fbaf2";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [errors, setError] = useState("");
  const [querry, setQuery] = useState("");

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  useEffect(() => {
    setLoading(true);
    const fetchMovie = async () => {
      try {
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?i=tt3896198&apikey=${Key}&s=${querry}`
        );
        if (!res.ok) throw new Error("Somthing Went Wrong");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        else {
          setMovies(data.Search);
        }
      } catch (error) {
        console.log(typeof error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [querry]);

  return (
    <>
      <NavBar movies={movies} querry={querry} setQuery={setQuery} />
      <Main
        movies={movies}
        errors={errors}
        setIsOpen1={setIsOpen1}
        setIsOpen2={setIsOpen2}
        watched={watched}
        isOpen1={isOpen1}
        isOpen2={isOpen2}
        avgImdbRating={avgImdbRating}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
        isLoading={isLoading}
      />
    </>
  );
}
