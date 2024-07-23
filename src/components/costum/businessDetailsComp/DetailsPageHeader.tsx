import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { renderStars } from "@/utils/renderStars";
import { IBusiness, IReview } from "@/types/business.types";
import { useSelector } from "react-redux";
import { RootState } from "store/storeIndex";

interface DetailsPageHeaderProps {
  business: IBusiness;
}

const DetailsPageHeader: React.FC<DetailsPageHeaderProps> = ({ business }) => {
  const { reviews } = useSelector((state: RootState) => state.reviewsModule);

  //derived
  const avgRating =
    reviews && reviews.length > 0
      ? reviews.reduce((sum: number, review: IReview) => {
          return sum + (review.rating ?? 0);
        }, 0) / reviews.length
      : 0;

  return (
    <>
      <h1 className="text-3xl font-bold py-8">
        {business.name} {`on ${business.contactInfo.address}`}
      </h1>
      <div className="lg:flex lg:gap-10 py-3 items-center">
        <div className="text-[1.1em] flex pb-3 gap-2 items-center">
          <p className="text-black ml-2 font-bold">{avgRating.toFixed(1)}</p>
          <div className="flex items-center">
            {renderStars(reviews && reviews.length > 0 ? avgRating : 0)}
          </div>
          <p className="pl-1 text-gray-500 tracking-wider font-semibold">{`(${reviews?.length} reviews)`}</p>
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
