// Browse.js
import MovieList from "./MovieList";
import BigBanner from "./BigBanner";

const Browse = () => {
  return (
    <>
      <BigBanner />
      <MovieList genreId={28} genreName="Action/Drama" />
      <MovieList genreId={27} genreName="Horror/Drama" />
    </>
  );
};

export default Browse;
