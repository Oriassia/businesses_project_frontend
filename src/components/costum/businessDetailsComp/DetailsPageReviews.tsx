import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { MdDelete } from "react-icons/md";
import { useToast } from "@/components/ui/use-toast";
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
  const { toast } = useToast();
  const navigate = useNavigate();

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
  const handleAddReviewClick = () => {
    if (!loggedInUser) {
      toast({
        title: "Authentication Required",
        description: "You need to be logged in to write a review",
        variant: "destructive",
      });
      navigate("/login");
    } else {
      setShowAddReviewModal(true);
    }
  };

  async function handleLike(reviewId: string, action: string) {
    if (!loggedInUser) {
      toast({
        title: "Authentication Required",
        description: "You need to be logged in to like a review",
        variant: "destructive",
      });
    }
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
      <h2 className="text-[2em]  flex flex-row justify-between items-center font-bold mb-4 dark:text-gray-800 relative pb-2 after:absolute after:left-0 after:bottom-0  after:w-full after:h-1 after:bg-pink-500">
        Reviews{" "}
        <Button
          onClick={handleAddReviewClick}
          className="bg-gradient-to-r text-black from-pink-400 via-red-400 to-orange-400 hover:from-pink-600 hover:via-red-600 hover:to-orange-600"
        >
          Write a review
        </Button>
      </h2>

      {/* Triggers create modal */}

      {/* reviews print */}
      {reviews && reviews.length > 0 ? (
        reviews?.map((review) => (
          <div
            key={review._id}
            className="mb-4 p-4 bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex text-yellow-500">
                {renderStars(review.rating)}
              </div>{" "}
              <button
                onClick={() => dispatch(deleteReview(review._id))}
                className="text-black"
              >
                <MdDelete className="text-red-700 text-[1.5em]" />
              </button>
              {/* <p className="text-gray-700 ml-2 font-bold">{review.rating}</p> */}
            </div>
            <p className="text-gray-700 mb-2 font-bold">
              {review.user.username}
            </p>
            <p className="text-gray-700 mb-2">{review.content}</p>
            <div className="flex items-center">
              {loggedInUser?.likes.includes(review._id) ? (
                <FaThumbsUp
                  className="cursor-pointer text-blue-700"
                  onClick={() => handleLike(review._id, "remove")}
                />
              ) : (
                <FaThumbsUp
                  className="cursor-pointer dark:text-gray-700 text-grey-700"
                  onClick={() => handleLike(review._id, "add")}
                />
              )}

              <p className="text-gray-600 ml-2">{review.likes} likes</p>
            </div>
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
