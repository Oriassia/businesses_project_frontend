import { IBusiness } from "@/types/business.types";

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
    <div>
      <h1>Info</h1>
      <p className="font-medium my-2">Description:</p>
      <div className="flex">
        <p className="text-gray-700 mb-4 lg:w-[50em]">
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
  );
}

export default DetailsPageInfo;
