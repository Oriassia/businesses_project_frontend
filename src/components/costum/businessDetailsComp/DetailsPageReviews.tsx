import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store/storeIndex";
import { createReview } from "../../../../store/actions/review.actions";
import { Button } from "@/components/ui/button";
import { IBusiness, IReview } from "@/types/business.types";
import AddReviewModal from "./AddReviewModal";
import { useToast } from "@/components/ui/use-toast";
import ReviewCard from "../ReviewCard";

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
        _id: loggedInUser?._id || "",
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

      {/* reviews print */}
      {reviews && reviews.length > 0 ? (
        reviews?.map((review) => (
          <ReviewCard key={review._id} review={review} business={business} />
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
