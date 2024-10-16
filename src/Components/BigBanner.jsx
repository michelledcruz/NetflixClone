import { useState, useEffect } from "react";

const BigBanner = () => {
  const [banner, setBanner] = useState([]);

  const API_KEY = "fcf01e67d23581f0c9d8d299581687d9";

  const fetchMovieBanner = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    setBanner(data.results[0]);
    console.log(data.results[0]);
  };

  useEffect(() => {
    fetchMovieBanner();
  }, []);

  return (
    <div className="movie-list w-full relative">
      <div className="w-full ">
        <div className="movie-card ">
          <img
            src={`https://image.tmdb.org/t/p/w780${banner.backdrop_path}`}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
