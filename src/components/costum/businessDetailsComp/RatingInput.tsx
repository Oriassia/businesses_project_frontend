import { useState } from "react";

interface RatingProps {
  onChange: (value: number) => void;
  value: number;
}

const RatingInput = ({ onChange, value }: RatingProps) => {
  const [rating, setRating] = useState<number>(Number(value));
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <label key={star} className="relative items-center cursor-pointer">
          <input
            type="radio"
            name="stars"
            value={star}
            className="absolute opacity-0"
            onClick={() => {
              setRating(star);
              onChange(star);
            }}
          />
          <span
            className={`text-5xl ${
              (hover || rating!) >= star ? "text-yellow-400" : "text-gray-300"
            }`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
          >
            ★
          </span>
        </label>
      ))}
    </div>
  );
};

export default RatingInput;
