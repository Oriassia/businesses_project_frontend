import { IBusiness } from "@/types/business.types";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaGlobe } from "react-icons/fa";

interface BusinessInfoProps {
  business: IBusiness;
  isExpanded: boolean;
  toggleDescription: () => void;
}

function DetailsPageInfo({
  business,
  isExpanded,
  toggleDescription,
}: BusinessInfoProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl lg:w-[50em]">
      <h1 className="relative text-[2em] font-semibold pb-2 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-pink-500">
        Info
      </h1>
      <p className="font-medium my-4 text-lg">Description:</p>
      <div className="flex flex-col lg:flex-row">
        <p className="text-gray-700 mb-4 lg:w-[50em]">
          {isExpanded
            ? business.description
            : `${business.description.substring(0, 300)}...  `}
          <button
            onClick={toggleDescription}
            className="text-cyan-800 font-semibold underline lg:pl-3 hover:text-cyan-600"
          >
            {isExpanded ? "Close description" : "Show More"}
          </button>
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        <span className="font-medium text-black">Category:</span>{" "}
        {business.category}
      </p>
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-3">Contact Info</h3>
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
            Open: {business.contactInfo.openAt} - {business.contactInfo.closeAt}
          </p>
        </div>
        <div className="flex items-center mb-2">
          <FaGlobe className="text-pink-500 mr-2" />
          <p className="text-gray-600">
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
}

export default DetailsPageInfo;
