import "./App.css";
import Header from "./Components/Header";
import ProfilePage from "./Components/ProfilePage";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "./Components/Browse";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <>
      <Login />
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
