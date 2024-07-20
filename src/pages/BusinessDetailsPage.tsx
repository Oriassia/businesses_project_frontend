import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { renderStars } from "../utils/renderStars";
import { Business } from "../types/business.types";
import { IoTimeOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";

const businesses: Business[] = [
  {
    _id: "66993caafa57e0d1c3f6c2dc",
    name: "Café Roastery",
    image:
      "https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "If you're looking to elevate your coffee experience, Café Roastery awaits you! From the moment you step inside, you're greeted by a warm ambiance and an extensive selection of artisanal brews. Our skilled baristas take pride in crafting each cup with care, using only the finest beans sourced from around the world.At Café Roastery, our menu features a delightful array of blends and single-origin coffees, alongside an assortment of delectable pastries and light bites. Whether you're craving a bold espresso or a smooth latte, you'll find something to satisfy your taste. For those who enjoy a touch of sophistication, explore our specialty drinks and seasonal offerings.Parking is a breeze with ample space available, so you can relax and savor your coffee without a second thought. We offer cozy indoor seating and a charming outdoor patio, complete with free Wi-Fi for your convenience. To enhance your visit, enjoy live acoustic performances on select evenings.If you’re tired of the usual coffee routine and crave something exceptional, treat yourself to a visit at Café Roastery. Discover a new level of coffee enjoyment and make every sip an experience to remember.",
    category: "Cafe",
    contactInfo: {
      address: "123 Coffee St.",
      openAt: "09:00",
      closeAt: "22:00",
      phoneNumber: "+5 (123)-456-7890",
      websiteLink: "https://coffeeshop.com",
    },
    rating: 4.5,
    reviews: ["66993caafa57e0d1c3f6c2df"],
    summOfReviews: 30,
  },
  {
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
      phoneNumber: "+5 (123)-456-7890",
      websiteLink: "https://sweetdelightsbakery.com",
    },
    rating: 4.8,
    reviews: ["7709e3cfd3e1b8c4a9f7e3d9"],
    summOfReviews: 30,
  },
  {
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
      phoneNumber: "+5 (123)-456-7890",
      websiteLink: "https://bellaitaliapizzeria.com",
    },
    rating: 4.7,
    reviews: ["881a1f9e16b2c3d4f0e1b5c6"],
    summOfReviews: 30,
  },
  {
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
      phoneNumber: "+5 (123)-456-7890",
      websiteLink: "https://sakurazushi.com",
    },
    rating: 4.6,
    reviews: ["992b2f8c6e4a1b2d3f5c6e4a"],
    summOfReviews: 30,
  },
];

const BusinessDetailsPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [business, setBusiness] = useState<Business | undefined>(undefined);

  useEffect(() => {
    const foundBusiness = businesses.find((b) => b._id === id);
    setBusiness(foundBusiness);
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
        <p className="text-gray-600 mb-2">
          <span className="font-medium text-black">Category:</span>{" "}
          {business.category}
        </p>
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
      </div>
    </div>
  );
};

export default BusinessDetailsPage;
