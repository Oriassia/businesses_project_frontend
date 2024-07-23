import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { renderStars } from "../utils/renderStars";
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
import SkeletonCards from "@/components/costum/SkeletonCards";

const BusinessesPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const { businesses } = useSelector(
    (state: RootState) => state.businessModule
  );

  const uniqueCategories: string[] | undefined = businesses
    ? Array.from(new Set(businesses.map((business) => business.category)))
    : undefined;

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
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Failed to fetch businesses");
      setLoading(false);
    }
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 dark:from-pink-900 dark:via-orange-900 dark:to-red-900  min-h-screen py-8">
      <div className=" lg:px-[5em] px-[1em]  py-[1em] mb-[2em]">
        <div className="relative py-20 mb-10 rounded-lg bg-gradient-to-r from-orange-300 via-red-300 to-yellow-300">
          <div className="absolute inset-0 rounded-lg bg-opacity-50 bg-black z-0"></div>
          <div className="relative  z-10 text-center ">
            <h1 className="text-5xl font-extrabold text-pink-200 mb-6">
              Discover Your Next Favorite Place
            </h1>
            <p className="text-xl text-pink-100 mb-8">
              Explore an extensive collection of top-rated spots. <br />
              Find new gems and old favorites effortlessly.
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden  z-0 rounded-md">
            <img
              src="https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg"
              alt="Background"
              className="w-full h-full object-cover opacity-40 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-8 gap-4">
          {/* Desktop version */}
          <div className="hidden md:flex flex-wrap gap-4">
            {uniqueCategories?.map((category) => (
              <button
                key={category}
                className="flex items-center gap-2 bg-gradient-to-r dark:from-pink-600 dark:to-red-600 from-pink-300 to-red-300 dark:text-white text-black font-medium py-3 px-8 rounded-lg shadow-md hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {category}
                <span className="ml-2 transition-all duration-300 group-hover:ml-4">
                  &rarr;
                </span>
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
                  {uniqueCategories?.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      className="flex items-center gap-2 py-2 px-4 hover:bg-pink-100"
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        {loading ? (
          <SkeletonCards />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {businesses?.map((business, index) => (
              <div
                key={business._id}
                className=" bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
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
        )}
      </div>
    </div>
  );
};

export default BusinessesPage;
