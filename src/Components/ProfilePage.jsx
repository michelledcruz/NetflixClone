import { Link } from "react-router-dom"; // Import Link component
import ProfilePicture1 from "../assets/ProfilePicture1.svg";
import ProfilePicture2 from "../assets/ProfilePicture2.svg";
import ProfilePicture3 from "../assets/ProfilePicture3.svg";
import AddProfile from "../assets/Add.svg";

const ProfilePage = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-80">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl">
          Who's Watching ?
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12 mt-16">
        <Link to="/profile/browse" className="text-center">
          <img src={ProfilePicture1} alt="Michelle's Profile" />
          <p className="text-gray-500 text-4xl mt-8">Michelle</p>
        </Link>
        <Link to="/profile/browse" className="text-center">
          <img src={ProfilePicture2} alt="Rohit's Profile" />
          <p className="text-gray-500 text-4xl mt-8">Rohit</p>
        </Link>
        <Link to="/profile/browse" className="text-center">
          <img src={ProfilePicture3} alt="Lance's Profile" />
          <p className="text-gray-500 text-4xl mt-8">Lance</p>
        </Link>
        <Link to="/profile/browse" className="text-center">
          <img src={ProfilePicture3} alt="Smith's Profile" />
          <p className="text-gray-500 text-4xl mt-8">Smith</p>
        </Link>
        <Link to="/profile/browse" className="text-center">
          <img
            className="w-32 h-48 rounded-full"
            src={AddProfile}
            alt="Add Profile"
          />
          <p className="text-gray-500 text-4xl mt-8">Lira</p>
        </Link>
      </div>
    </>
  );
};

export default ProfilePage;
