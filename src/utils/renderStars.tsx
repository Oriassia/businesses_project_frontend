import { IoStar, IoStarOutline } from "react-icons/io5";

export const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<IoStar key={i} className="text-yellow-500" />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <div key={i} className="relative">
          <IoStarOutline className="text-yellow-500" />
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${(rating % 1) * 100}%` }}
          >
            <IoStar className="text-yellow-500" />
          </div>
        </div>
      );
    } else {
      stars.push(<IoStarOutline key={i} className="text-gray-300" />);
    }
  }
  return stars;
};
