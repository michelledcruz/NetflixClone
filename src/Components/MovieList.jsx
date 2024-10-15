import { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  //   const [searchTerm, setSearchTerm] = useState("");

  const API_KEY = "fcf01e67d23581f0c9d8d299581687d9";

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      <h1 className="text-white mt-10 text-2xl mb-6">Popular Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} />
            <h2 className="text-white mt-2">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
