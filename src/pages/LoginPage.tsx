import api from "@/services/api.service";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store/storeIndex";
import { fetchLoggedInUser } from "../../store/actions/user.actions";
import { IUserLoginData } from "@/types/user.types";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import bananas from "../imgs/bananas.mp4";

const LoginPage: React.FC = () => {
  const { loggedInUser } = useSelector((state: RootState) => state.userModule);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser !== null) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userLoginData: IUserLoginData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    try {
      const { data } = await api.post("/auth/login", userLoginData);
      localStorage.setItem("token", data.token);
      dispatch(fetchLoggedInUser());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-pink-100 px-[1em]">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0"
      >
        <source src={bananas} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">
          Login
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="w-full p-2 text-gray-700 focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaLock className="text-gray-400 mr-3" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 text-gray-700 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-2 rounded-full hover:from-pink-600 hover:to-pink-800 transition duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-pink-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-0"></div>
    </div>
  );
};

export default LoginPage;
