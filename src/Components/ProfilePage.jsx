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
        <div className="text-center">
          <img src={ProfilePicture1} />
          <p className="text-gray-500 text-4xl mt-8">Michelle</p>
        </div>
        <div className="text-center">
          <img src={ProfilePicture2} />
          <p className="text-gray-500 text-4xl mt-8">Rohit</p>
        </div>
        <div className="text-center">
          <img src={ProfilePicture3} />
          <p className="text-gray-500 text-4xl mt-8">Lance</p>
        </div>
        <div className="text-center">
          <img src={ProfilePicture3} />
          <p className="text-gray-500 text-4xl mt-8">Smith</p>
        </div>
        <div className="text-center">
          <img className="w-32 h-48 rounded-full" src={AddProfile} />
          <p className="text-gray-500 text-4xl mt-8">Lira</p>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
