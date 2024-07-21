import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { renderStars } from "../utils/renderStars";
import { IBusiness, IReview } from "../types/business.types";
import { IoTimeOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import api from "@/services/api.service";
import ReviewCard from "@/components/costum/ReviewCard";

const BusinessDetailsPage = () => {
  const [business, setBusiness] = useState<IBusiness | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { id } = useParams();

  async function fetchBusiness() {
    const { data } = await api.get(`/businesses/${id}`);
    setBusiness(data);
  }

  useEffect(() => {
    fetchBusiness();
  }, [id]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  if (!business) {
    return <div>Business not found</div>;
  }
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="lg:px-[5em] px-[1em]">
      <h1 className="text-3xl font-bold py-4">
        {business.name} {`on ${business.contactInfo.address}`}
      </h1>
      <div className="lg:flex lg:gap-10 py-3 items-center">
        <div className=" text-[1.1em] flex pb-3 items-center">
          <div className="flex items-center">
            {renderStars(business.rating)}
          </div>
          <p className="text-black ml-2 font-bold">{business.rating}</p>
          <p className=" pl-1 text-gray-500 tracking-wider font-semibold">{`/ ${business.summOfReviews} reviews`}</p>
        </div>
        <div className="flex items-center gap-9 lg:flex-none">
          <p className=" text-[1.1em] flex flex-row items-center pb-3 gap-1 text-gray-500 font-normal">
            <IoTimeOutline className=" text-gray-500 font-semibold" />
            Closes at {business.contactInfo.closeAt}
          </p>
          <div className="flex items-center pb-3">
            <FaShareAlt />
          </div>
        </div>
        <span className="text-gray-600 mb-2">{business.category}</span>
      </div>
      <div className="flex lg:gap-10 gap-2">
        <Button
          className="mb-4 font-medium bg-cyan-800 hover:bg-cyan-900"
          onClick={handleOpenModal}
        >
          {business.contactInfo.phoneNumber}... — show
        </Button>
        <Button className="bg-slate-600 hover:bg-slate-700">
          Add a review
        </Button>
      </div>
      {showModal && (
        <Modal isOpen={showModal} onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">
            {business.name} {`on ${business.contactInfo.address}`}
          </h2>
          <p className="p-5 bg-cyan-50 rounded-md text-xl">
            {business.contactInfo.phoneNumber}
          </p>
          <div className=" mt-4 p-5 bg-cyan-50 rounded-md">
            <p className="mb-4">Did you manage to reach them?</p>
            <div className="flex space-x-4">
              <Button
                className="bg-green-500 hover:bg-green-600"
                onClick={() => {
                  handleCloseModal();
                }}
              >
                Yes, they answered
              </Button>
              <Button
                className="bg-yellow-500 hover:bg-yellow-600"
                onClick={() => {
                  handleCloseModal();
                }}
              >
                Wrong number
              </Button>
              <Button
                className="bg-red-500 hover:bg-red-600"
                onClick={() => {
                  handleCloseModal();
                }}
              >
                No answer
              </Button>
            </div>
            <p className="text-sm text-zinc-500 pt-4 max-w-sm">
              Tell them you found a number on Gurmania — companies work better
              if they know you can influence their rating
            </p>
          </div>
        </Modal>
      )}
      <img
        src={business.image}
        alt={business.name}
        className="w-[50em] h-64 object-cover rounded-lg mb-4"
      />
      <div>
        <h1>Info</h1>
        <p className="font-medium my-2">Description:</p>
        <div className="flex  ">
          <p className="text-gray-700 mb-4 w-[50em]">
            {isExpanded
              ? business.description
              : `${business.description.substring(0, 300)}...  `}
            <button
              onClick={toggleDescription}
              className="text-cyan-800 font-semibold underline mb-4 lg:pl-3 hover:underline"
            >
              {isExpanded ? "Close description" : "Show More"}
            </button>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-1">Contact Info</h3>
          <p className="text-gray-600 mb-1">
            Address: {business.contactInfo.address}
          </p>
          <p className="text-gray-600 mb-1">
            Phone: {business.contactInfo.phoneNumber}
          </p>
          <p className="text-gray-600 mb-1">
            Open: {business.contactInfo.openAt} - {business.contactInfo.closeAt}
          </p>
          <p className="text-gray-600 mb-2">
            Website:{" "}
            <a
              href={business.contactInfo.websiteLink}
              className="text-blue-500 hover:underline"
            >
              {business.contactInfo.websiteLink}
            </a>
          </p>
        </div>
        <div className="">
          {business?.reviews.map((review: IReview) => (
            <>
              <ReviewCard review={review} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailsPage;
