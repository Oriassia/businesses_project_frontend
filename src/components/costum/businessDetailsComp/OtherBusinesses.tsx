// import { IGetBusinessesOptions } from "@/types/business.types";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getBusinesses } from "../../../../store/actions/business.actions";
import { RootState, useAppDispatch } from "../../../../store/storeIndex";
import { renderStars } from "@/utils/renderStars";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface OtherBusinessesProps {
  currentBusinessId: string;
}

const OtherBusinesses: React.FC<OtherBusinessesProps> = ({
  currentBusinessId,
}) => {
  const dispatch = useAppDispatch();
  const { businesses } = useSelector(
    (state: RootState) => state.businessModule
  );
  const navigate = useNavigate();

  const handleCardClick = (id: string) => () => {
    navigate(`/business/${id}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  const filteredBusinesses = businesses?.filter(
    (business) => business._id !== currentBusinessId
  );

  return (
    <div className="lg:py-10 bg-white p-6 my-8 rounded-lg shadow-pink lg:w-fit">
      <h1 className="text-[2em] items-center font-bold mb-4 dark:text-gray-800 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-pink-500">
        You may also like:
      </h1>
      <div>
        {filteredBusinesses?.map((business) => (
          <div
            key={business._id}
            className="mb-8 p-6 bg-white cursor-pointer rounded-lg shadow-lg flex flex-col hover:shadow-pink transform hover:scale-105 transition-transform duration-300 lg:flex-row"
            onClick={handleCardClick(business._id)}
          >
            <img
              src={business.image}
              alt={business.name}
              className="w-full lg:w-1/3 lg:h-[10em] object-cover rounded-lg mb-4 lg:mb-0 lg:mr-4"
            />
            <div className="flex-1">
              <h2 className="text-gray-700 mb-2 text-[1.5em] font-bold">
                {business.name}
              </h2>
              <div className="flex items-center mb-2 gap-2 text-black">
                <div className="flex text-yellow-500">
                  {renderStars(business.rating)}
                </div>
                {`(${business.rating.toFixed(1)})`}
              </div>
              <p className="text-gray-800 mb-4 text-[1.1em]">
                <span className="font-medium  text-lg text-black ">
                  Category:{" "}
                </span>{" "}
                {business.category}
              </p>{" "}
              <h3 className="font-semibold text-lg dark:text-black mb-3">
                Contact Info:
              </h3>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-pink-500 mr-2" />
                <p className="text-gray-600">
                  Address: {business.contactInfo.address}
                </p>
              </div>
              <div className="flex items-center mb-2">
                <FaPhoneAlt className="text-pink-500 mr-2" />
                <p className="text-gray-600">
                  Phone: {business.contactInfo.phoneNumber}
                </p>
              </div>
              <div className="flex items-center mb-2">
                <FaClock className="text-pink-500 mr-2" />
                <p className="text-gray-600">
                  Open: {business.contactInfo.openAt} -{" "}
                  {business.contactInfo.closeAt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBusinesses;
