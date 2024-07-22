import { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/storeIndex";
import { getBusinesses } from "../../store/actions/business.actions";

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

const BusinessListPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { businesses } = useSelector(
    (state: RootState) => state.businessModule
  );

  const dispatch = useAppDispatch();

  const toggleDescription = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleCardClick = (id: string) => {
    navigate(`/business/${id}`);
  };

  useEffect(() => {
    try {
      dispatch(getBusinesses());
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch businesses");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 min-h-screen py-8">
      <div className=" lg:px-[5em]">
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
          {businesses?.map((business, index) => (
            <div
              key={business._id}
              className=" bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={business.image}
                alt={business.name}
                onClick={() => handleCardClick(business._id)}
                className="w-full h-48 cursor-pointer object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2
                  className="text-xl font-semibold cursor-pointer text-gray-800 mb-2 hover:text-pink-600 transition-colors duration-300"
                  onClick={() => handleCardClick(business._id)}
                >
                  {business.name}
                </h2>
                <p className="text-gray-700 mb-4">
                  {expandedIndex === index
                    ? business.description
                    : `${business.description.substring(0, 100)}...  `}
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-cyan-800 font-semibold underline mb-4 lg:pl-3 hover:underline"
                  >
                    {expandedIndex === index
                      ? "Close description"
                      : "Show More"}
                  </button>
                </p>
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
