import "./App.css";
import Header from "./Components/Header";
import ProfilePage from "./Components/ProfilePage";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./Components/MovieList";
import BigBanner from "./Components/BigBanner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Action from "./Components/Action";
import Horror from "./Components/Horror";

const Home = () => {
  return (
    <>
      <Login />
    </>
  );
};

const Browse = () => {
  return (
    <>
      <BigBanner />
      <MovieList />
      <Action />
      <Horror />
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/browse" element={<Browse />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
