import "./App.css";
import Header from "./Components/Header";
import ProfilePage from "./Components/ProfilePage";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BigBanner from "./Components/BigBanner";
import MovieList from "./Components/MovieList";
import BigBanner from "./Components/BigBanner";

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
