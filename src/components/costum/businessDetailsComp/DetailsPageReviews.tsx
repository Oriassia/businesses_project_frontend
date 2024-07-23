import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store/storeIndex";
import {
  createReview,
  deleteReview,
  removeLike,
  updateLike,
} from "../../../../store/actions/review.actions";
import { Button } from "@/components/ui/button";
import { IBusiness, IReview } from "@/types/business.types";
import AddReviewModal from "./AddReviewModal";
import { renderStars } from "@/utils/renderStars";
import api from "@/services/api.service";
import {
  removeUserLike,
  updateUserLike,
} from "../../../../store/actions/user.actions";

interface ReviewPropsType {
  business: IBusiness;
}

const DetailsPageReviews: React.FC<ReviewPropsType> = ({ business }) => {
  const { loggedInUser } = useSelector((state: RootState) => state.userModule);
  const { reviews } = useSelector((state: RootState) => state.reviewsModule);
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const dispatch = useAppDispatch();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const reviewData: Partial<IReview> = {
      user: {
        _id: loggedInUser?.userId || "",
        username: loggedInUser?.username || "",
      },
      content: formData.get("reviewContent") as string,
      business: business._id,
      likes: 0,
      rating: ratingValue,
    };

    dispatch(createReview(reviewData));
    setShowAddReviewModal(false);
  }

  async function handleLike(reviewId: string, action: string) {
    if (!loggedInUser) return;
    switch (action) {
      case "add":
        try {
          await api.post(`/reviews/${reviewId}/likes`);
          dispatch(updateLike(reviewId));
          dispatch(updateUserLike(reviewId));
        } catch (error) {
          console.log(error);
        }
        break;

      case "remove":
        try {
          await api.delete(`/reviews/${reviewId}/likes`);
          dispatch(removeLike(reviewId));
          dispatch(removeUserLike(reviewId));
        } catch (error) {
          console.log(error);
        }
        break;

      default:
        break;
    }
  }

  return (
    <div className="lg:py-10 bg-white p-6 my-8 rounded-lg shadow-xl lg:w-[50em]">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>

      {/* Triggers create modal */}
      <Button
        onClick={() => setShowAddReviewModal(true)}
        className="bg-slate-600 hover:bg-slate-700"
      >
        Write a review
      </Button>

      {/* reviews print */}
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
              {loggedInUser?.likes.includes(review._id) ? (
                <FaThumbsUp
                  className="cursor-pointer text-blue-700"
                  onClick={() => handleLike(review._id, "remove")}
                />
              ) : (
                <FaThumbsUp
                  className="cursor-pointer text-grey-700"
                  onClick={() => handleLike(review._id, "add")}
                />
              )}

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
      {showAddReviewModal && (
        <AddReviewModal
          business={business}
          loggedInUser={loggedInUser}
          handleSubmit={handleSubmit}
          setRatingValue={setRatingValue}
          showAddReviewModal={showAddReviewModal}
          setShowAddReviewModal={setShowAddReviewModal}
        />
      )}
    </div>
  );
};

export default DetailsPageReviews;
