import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaIdBadge } from "react-icons/fa";
import api from "../services/api.service";
import rimonim from "../imgs/rimons.mp4";
import { useSelector } from "react-redux";
import { RootState } from "../../store/storeIndex";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [customError, setCustomError] = useState<string | null>(null);
  const { loggedInUser } = useSelector((state: RootState) => state.userModule);

  useEffect(() => {
    if (loggedInUser !== null) {
      navigate("/");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      setCustomError(
        "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."
      );
      return;
    }
    setCustomError(null);
    try {
      const response = await api.post("/register", formData);
      if (response.status === 201) {
        setSuccess("Registration successful! Please log in.");
        setError(null);
        // Optionally, redirect to login page or clear the form
      } else {
        setError("Registration failed. Please try again.");
        setSuccess(null);
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
      setSuccess(null);
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
        <source src={rimonim} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm relative z-10 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">
          Register
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        {customError && <p className="text-red-500 mb-4">{customError}</p>}
        <form onSubmit={handleRegister} className="space-y-6" noValidate>
          <div className="flex items-center border-b border-gray-300 py-2 relative">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="w-full p-2 text-gray-700 dark:bg-gray-800 focus:outline-none"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2 relative">
            <div className="group relative flex items-center">
              <FaLock className="text-gray-400 mr-3 animate-bounce" />
              <div className="absolute -top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded py-1 px-2 z-20 w-[15em] whitespace-normal">
                Password must contain at least 8 characters, including
                uppercase, lowercase, number, and special character.
              </div>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 text-gray-700 dark:bg-gray-800 focus:outline-none"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2 relative">
            <FaIdBadge className="text-gray-400 mr-3" />
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="w-full p-2 text-gray-700 dark:bg-gray-800 focus:outline-none"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2 relative">
            <FaIdBadge className="text-gray-400 mr-3" />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-2 text-gray-700 dark:bg-gray-800 focus:outline-none"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2 relative">
            <FaEnvelope className="text-gray-400 mr-3" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 text-gray-700 dark:bg-gray-800 focus:outline-none"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-2 rounded-full hover:from-pink-600 hover:to-pink-800 transition duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-gray-600 dark:text-gray-200">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
