import React, { useState, useEffect } from "react";
import { Business } from "../types/business.types";
import { useNavigate } from "react-router-dom";
import { renderStars } from "../utils/renderStars";
import {
  FaMapMarkerAlt,
  FaStar,
  FaChild,
  FaHeart,
  FaCoffee,
  FaTree,
  FaPaw,
  FaMusic,
  FaWifi,
} from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdColorFilter } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { FaClock } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const categories = [
  { label: "Nearby", icon: <FaMapMarkerAlt /> },
  { label: "Top Rated", icon: <FaStar /> },
  { label: "Family Friendly", icon: <FaChild /> },
  { label: "Perfect for Dates", icon: <FaHeart /> },
  { label: "Cozy Atmosphere", icon: <FaCoffee /> },
  { label: "Outdoor Seating", icon: <FaTree /> },
  { label: "Pet-Friendly", icon: <FaPaw /> },
  { label: "Live Music", icon: <FaMusic /> },
  { label: "Free WiFi", icon: <FaWifi /> },
];

const shop: Business = {
  _id: "66993caafa57e0d1c3f6c2dc",
  name: "Café Roastery",
  image:
    "https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  description: "A great place to drink coffee",
  category: "Cafe",
  contactInfo: {
    address: "123 Coffee St.",
    openAt: "09:00",
    closeAt: "22:00",
    phoneNumber: "123-456-7890",
    websiteLink: "https://coffeeshop.com",
  },
  rating: 4.5,
  reviews: ["66993caafa57e0d1c3f6c2df"],
  summOfReviews: 30,
};

const bakery: Business = {
  _id: "7709e3cfd3e1b8c4a9f7e3d9",
  name: "Sweet Delights Bakery",
  image:
    "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  description: "Delicious cakes and pastries made fresh daily.",
  category: "Bakery",
  contactInfo: {
    address: "456 Cake Ave.",
    openAt: "08:00",
    closeAt: "18:00",
    phoneNumber: "987-654-3210",
    websiteLink: "https://sweetdelightsbakery.com",
  },
  rating: 4.8,
  reviews: ["7709e3cfd3e1b8c4a9f7e3d9"],
  summOfReviews: 30,
};

const pizzaPlace: Business = {
  _id: "881a1f9e16b2c3d4f0e1b5c6",
  name: "Bella Italia Pizzeria",
  image:
    "https://images.pexels.com/photos/23017572/pexels-photo-23017572/free-photo-of-pizza-with-basil-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "Authentic Italian pizza with a variety of toppings.",
  category: "Restaurant",
  contactInfo: {
    address: "789 Pizza Lane",
    openAt: "11:00",
    closeAt: "23:00",
    phoneNumber: "555-123-4567",
    websiteLink: "https://bellaitaliapizzeria.com",
  },
  rating: 4.7,
  reviews: ["881a1f9e16b2c3d4f0e1b5c6"],
  summOfReviews: 30,
};

const sushiBar: Business = {
  _id: "992b2f8c6e4a1b2d3f5c6e4a",
  name: "Sakura Sushi Bar",
  image:
    "https://images.pexels.com/photos/2323391/pexels-photo-2323391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "Fresh and delicious sushi made with the finest ingredients.",
  category: "Restaurant",
  contactInfo: {
    address: "101 Sushi St.",
    openAt: "10:00",
    closeAt: "22:00",
    phoneNumber: "321-654-9870",
    websiteLink: "https://sakurazushi.com",
  },
  rating: 4.6,
  reviews: ["992b2f8c6e4a1b2d3f5c6e4a"],
  summOfReviews: 30,
};

const BusinessListPage: React.FC = () => {
  const navigate = useNavigate();
  const [businesses, setBusinesses] = useState<Business[]>([
    shop,
    bakery,
    pizzaPlace,
    sushiBar,
  ]);

  const handleCardClick = (id: string) => {
    navigate(`/business/${id}`);
  };

  useEffect(() => {
    setBusinesses(businesses);
  });

  return (
    <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="relative">
          <h1 className="text-4xl font-bold w-fit text-gray-800 mb-4 transition-transform transform hover:scale-105">
            Uncover Remarkable Places
          </h1>
        </div>
        <p className="text-lg text-gray-600 mb-4">
          Dive into a variety of businesses, from innovative newcomers to
          beloved classics. <br />
          Easily find what you need and start exploring now!
        </p>
        <div className="flex lg:justify-center text-[2em] lg:gap-6 mb-6">
          <div className="flex items-center gap-2 text-pink-600">
            <GrUserExpert />
            <span className="text-xl font-semibold">Expertly Chosen</span>
          </div>
          <div className="flex items-center gap-2 text-pink-600">
            <AiOutlineThunderbolt />
            <span className="text-xl font-semibold">Quick Access</span>
          </div>
          <div className="flex items-center gap-2 text-pink-600">
            <MdOutlineCategory />
            <span className="text-xl font-semibold">Diverse Categories</span>
          </div>
        </div>

        <div className="flex flex-wrap mb-8 gap-4">
          {/* Desktop version */}
          <div className="hidden md:flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.label}
                className="flex items-center gap-2 bg-pink-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
          <div className="md:hidden flex flex-col items-center">
            <div className="mt-4 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <DropdownMenu>
                <DropdownMenuTrigger className="relative text-[1.3em] flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300">
                  <span className="pr-1">Filter </span> <IoMdColorFilter />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category.label}
                      className="flex items-center gap-2 py-2 px-4 hover:bg-pink-100"
                    >
                      {category.icon}
                      {category.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {businesses.map((business) => (
            <div
              key={business._id}
              className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              onClick={() => handleCardClick(business._id)}
            >
              <img
                src={business.image}
                alt={business.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-pink-600 transition-colors duration-300">
                  {business.name}
                </h2>
                <p className="text-gray-600 mb-2">{business.description}</p>
                <p className="text-gray-500 mb-2">
                  <span className=" font-semibold text-[1.1em] text-black">
                    Category:{" "}
                  </span>
                  {business.category}
                </p>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-500">
                    {" "}
                    {renderStars(business.rating)}
                  </div>
                  <p className="text-gray-500 ml-2">
                    {business.rating} {`(${business.summOfReviews})`}
                  </p>
                </div>
                <div className="mb-4 text-[1.1em]">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Contact Info
                  </h3>
                  <p className="text-gray-500 flex items-center gap-2 mb-1">
                    <FaLocationArrow /> {business.contactInfo.address}
                  </p>
                  <p className="text-gray-500 flex items-center gap-2 mb-1">
                    <GiRotaryPhone /> {business.contactInfo.phoneNumber}
                  </p>
                  <p className="text-gray-500 flex items-center gap-2 mb-1">
                    <FaClock /> {business.contactInfo.openAt} -{" "}
                    {business.contactInfo.closeAt}
                  </p>
                  <p className="text-gray-500 flex items-center gap-2 mb-2">
                    <TbWorldWww />
                    <a
                      href={business.contactInfo.websiteLink}
                      className="text-pink-500 hover:underline"
                    >
                      {business.contactInfo.websiteLink}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessListPage;
