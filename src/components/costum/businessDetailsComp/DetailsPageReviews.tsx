import { FaThumbsUp } from "react-icons/fa";
import { renderStars } from "@/utils/renderStars";
import { RootState, useAppDispatch } from "../../../../store/storeIndex";
import { useSelector } from "react-redux";
import { deleteReview } from "../../../../store/actions/review.actions";

function DetailsPageReviews() {
  const { reviews } = useSelector((state: RootState) => state.reviewsModule);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {reviews && reviews.length > 0 ? (
        reviews?.map((review) => (
          <div
            key={review._id}
            className="mb-4 p-4 bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-500">
                {renderStars(review.rating)}
              </div>{" "}
              <p className="text-gray-700 ml-2 font-bold">{review.rating}</p>
            </div>
            <p className="text-gray-600 mb-2">{review.user.username}</p>
            <p className="text-gray-600 mb-2">{review.content}</p>
            <div className="flex items-center">
              <FaThumbsUp className="text-gray-500" />
              <p className="text-gray-600 ml-2">{review.likes} likes</p>
            </div>
            <button
              onClick={() => dispatch(deleteReview(review._id))}
              className="text-black"
            >
              delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No reviews yet.</p>
      )}
    </div>
  );
}

export default DetailsPageReviews;
