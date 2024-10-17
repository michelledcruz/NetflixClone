// MovieList.jsx
import { useEffect, useState } from "react";
import Slider from "react-slick";

const MovieList = ({ genreId, genreName }) => {
  // Accept genreId and genreName as props
  const [movies, setMovies] = useState([]);
  const API_KEY = "fcf01e67d23581f0c9d8d299581687d9";

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}` // Correct API endpoint
    );
    const data = await response.json();
    setMovies(data.results.slice(0, 15));
  };

  useEffect(() => {
    fetchMovies();
  }, [genreId]);

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="movie-list w-full overflow-hidden mb-6">
      <h1 className="text-white mt-10 text-2xl mb-6">{genreName}</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {movies.length > 0 ? ( // Check if movies exist
            movies.map((movie) => (
              <div className="movie-card px-2" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <h2 className="text-white mt-2">{movie.title}</h2>
              </div>
            ))
          ) : (
            <div className="text-white">No movies found.</div> // Display message if no movies
          )}
        </Slider>
      </div>
    </div>
  );
};

export default MovieList;
