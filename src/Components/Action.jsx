import { useEffect, useState } from "react";
import Slider from "react-slick";

const Action = () => {
  const [actions, setAction] = useState([]);
  //   const [searchTerm, setSearchTerm] = useState("");

  const API_KEY = "fcf01e67d23581f0c9d8d299581687d9";

  const fetchAction = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    const data = await response.json();
    setAction(data.results.slice(0, 15));
  };

  useEffect(() => {
    fetchAction();
  }, []);

  //slick settings
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
      <h1 className="text-white mt-10 text-2xl mb-6">Action/Drama</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {actions.map((action) => (
            <div className="movie-card px-2" key={action.id}>
              <img
                src={`https://image.tmdb.org/t/p/w780${action.backdrop_path}`}
              />
              <h2 className="text-white mt-2">{action.title}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Action;
