import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { renderStars } from "@/utils/renderStars";
import { IBusiness } from "@/types/business.types";

interface DetailsPageHeaderProps {
  business: IBusiness;
}

const DetailsPageHeader: React.FC<DetailsPageHeaderProps> = ({ business }) => {
  return (
    <>
      <h1 className="text-3xl font-bold py-8">
        {business.name} {`on ${business.contactInfo.address}`}
      </h1>
      <div className="lg:flex lg:gap-10 pb-3 items-center">
        <div className="text-[1.1em] flex pb-3 items-center">
          <div className="flex items-center">
            {renderStars(business.rating)}
          </div>
          <p className="text-black ml-2 font-bold">{business.rating}</p>
          <p className="pl-1 text-gray-500 tracking-wider font-semibold">{`/ ${business.reviews.length} reviews`}</p>
        </div>
        <div className="flex items-center gap-9 lg:flex-none">
          <p className="text-[1.1em] flex flex-row items-center pb-3 gap-1 text-gray-500 font-normal">
            <IoTimeOutline className="text-gray-500 font-semibold" />
            Closes at {business.contactInfo.closeAt}
          </p>
          <div className="flex items-center pb-3">
            <FaShareAlt />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPageHeader;
