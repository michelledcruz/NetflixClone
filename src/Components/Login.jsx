import React from "react";
import "./Login.css"; // Import the CSS file
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="login-container flex items-center justify-center">
      <form className="bg-black pt-10 py-24 px-16  z-10 w-2/6">
        <h1 className="text-white text-3xl text-center pb-10">Sign In</h1>
        <div className="mb-8 text-2xl">
          <input
            type="email"
            id="email"
            className="w-full p-2 text-black rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-8 text-2xl">
          <input
            type="password"
            id="password"
            className="w-full p-2 text-black rounded"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full mb-8 bg-red-600 text-white p-2 text-3xl rounded hover:bg-red-500 transition duration-200"
        >
          Login
        </button>
        <button
          type="submit"
          className="w-full mb-8 bg-red-700 text-white p-2 text-3xl  rounded hover:bg-red-500 transition duration-200"
          onClick={() => loginWithRedirect()}
        >
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
