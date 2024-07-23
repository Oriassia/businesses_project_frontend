import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
import { IGetBusinessesOptions } from "@/types/business.types";
import api from "@/services/api.service";
import { Button } from "@/components/ui/button";
import RatingInput from "@/components/costum/businessDetailsComp/RatingInput";

const BusinessesPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState<string[] | null>(null);
  const [maxPages, setMaxPages] = useState<number | null>(null);
  const [ratingValue, setRatingValue] = useState(0);
  const dispatch = useAppDispatch();

  const { businesses, businessesCount } = useSelector(
    (state: RootState) => state.businessModule
  );

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

  const handleSearchChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = ev.target.name;
    searchParams.set(inputName, ev.target.value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  // URL Category query Trimmer
  const removeCategory = (
    categories: string,
    categoryToRemove: string
  ): string => {
    const regex = new RegExp(`(^|,)${categoryToRemove}(,|$)`, "g");
    const newCategories = categories
      .replace(regex, (match, p1, p2) => (p1 === "," && p2 === "," ? "," : ""))
      .replace(/^,|,$/g, "") // Remove any leading or trailing commas
      .trim();
    return newCategories;
  };

  const handleCategoryChange = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = ev.target as HTMLElement;
    const targetValue = target.innerText;
    const currentStr = searchParams.get("category");
    //no previous query, return value as it is
    if (!currentStr) {
      searchParams.set("category", targetValue);
    } else {
      //already has query, need to check if is already included handle value accordingly
      const isIncluded = currentStr.includes(targetValue);
      if (isIncluded) {
        //Already included, remove the value
        const newStr = removeCategory(currentStr, targetValue);
        if (newStr) searchParams.set("category", newStr);
        // removed category, still has query
        else searchParams.delete("category"); // removed category, no remaining query
      } else {
        //not included, add to value to string
        searchParams.set("category", `${currentStr},${targetValue}`);
      }
    }
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const handlePagination = (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const btnTarget = ev.target as HTMLElement;
    const btnStr = btnTarget.innerText;
    const page = searchParams.get("page");
    let tempVal: number;
    if (btnStr === "Next") {
      tempVal = +page! + 1;
      if (maxPages && tempVal > maxPages) return;
    } else {
      tempVal = +page! - 1;
      if (tempVal < 1) return;
    }
    searchParams.set("page", `${tempVal}`);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    try {
      const page = searchParams.get("page");

      if (!page || +page < 1) {
        searchParams.set("page", "1");
        setSearchParams(searchParams);
      }
      const limit = searchParams.get("limit");
      if (!limit) {
        searchParams.set("limit", "8");
        setSearchParams(searchParams);
      }
      const options: IGetBusinessesOptions = {
        params: {
          name: searchParams.get("name"),
          category: searchParams.get("category"),
          rating: searchParams.get("rating"),
          limit,
          page: page,
        },
      };
      dispatch(getBusinesses(options));
      setTimeout(() => {
        setLoading(false);
        // console.log({ businesses }, { businessesCount }, maxPages);
      }, 500);
    } catch (err) {
      setError("Failed to fetch businesses");
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await api.get("/businesses/category");
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);

  useEffect(() => {
    const limit = searchParams.get("limit");
    if (businessesCount)
      setMaxPages(Math.ceil(businessesCount / (limit !== null ? +limit : 8)));
  }, [businessesCount]);

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
        <div className="flex flex-wrap items-center mb-8 gap-10">
          <input
            name="name"
            type="text"
            placeholder="Search By Name"
            value={searchParams.get("name") || ""}
            onChange={handleSearchChange}
            className="px-2 w-[20em] h-[3.5em] rounded-md shadow-pink placeholder:text-[1.1em] placeholder:text-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300"
          />
          <div className="flex flex-row gap-8 items-center">
            <div className=" w-full bg-white items-center rounded-lg shadow-lg">
              <DropdownMenu>
                <DropdownMenuTrigger className="relative text-[1.3em] flex items-center px-4 py-3 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300">
                  <span className="pr-1">Filter </span> <IoMdColorFilter />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories &&
                    categories.map((category) => {
                      const activeCategories = searchParams.get("category");
                      return (
                        <DropdownMenuItem
                          key={category}
                          className={
                            activeCategories?.includes(category)
                              ? "flex items-center gap-2 py-2 px-4 hover:bg-pink-100 bg-pink-600"
                              : "flex items-center gap-2 py-2 px-4 hover:bg-pink-100"
                          }
                          onClick={handleCategoryChange}
                        >
                          {category}
                        </DropdownMenuItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <RatingInput
              onChange={(value: number) => {
                searchParams.set("rating", `${value}`);
                setSearchParams(searchParams);
                setRatingValue(value);
              }}
            />
          </div>
        </div>
        <p className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
          Page {searchParams.get("page")}/{maxPages}
        </p>
        <div>
          <Button onClick={handlePagination}>Prev</Button>
          <Button onClick={handlePagination}>Next</Button>
        </div>
        {loading ? (
          <SkeletonCards />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {businesses?.map((business, index) => (
              <div
                key={business._id}
                className=" bg-white rounded-lg shadow-pink dark:shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
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
