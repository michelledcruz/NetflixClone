import logo from "../assets/NetflixLogoSvg.svg";
const Login = () => {
  return (
    <header className="bg-black text-white fixed w-full top-0 z-50">
      <div className="flex justify-between px-6 py-4">
        <div className="flex">
          <img
            className="w-56 sm:w-36 cursor-pointer"
            src={logo}
            alt="Netflix Logo"
          />
        </div>
      </div>
    </header>
  );
};
export default Login;
