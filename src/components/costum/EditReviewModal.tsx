import { useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Label } from "../ui/label";
import Modal from "../ui/modal";
import { Textarea } from "../ui/textarea";
import RatingInput from "./businessDetailsComp/RatingInput";
import { RootState, useAppDispatch } from "../../../store/storeIndex";
import { IBusiness, IReview } from "@/types/business.types";
import { updateReview } from "../../../store/actions/review.actions";
import { useState } from "react";

interface EditReviewModalProps {
  business: IBusiness;
  isOpen: boolean;
  setShowEditReviewModal: (value: boolean) => void;
  review: IReview;
}

function EditReviewModal({
  review,
  isOpen,
  setShowEditReviewModal,
  business,
}: EditReviewModalProps) {
  const { loggedInUser } = useSelector((state: RootState) => state.userModule);
  const [ratingValue, setRatingValue] = useState(review.rating);
  const [contentValue, setContentValue] = useState(review.content);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  async function handleEditSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);

    const reviewData: Partial<IReview> = {
      content: contentValue,
      business: business._id,
      likes: review.likes,
      rating: ratingValue,
    };

    try {
      await dispatch(updateReview(review._id, reviewData));
      setShowEditReviewModal(false);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {review.user._id === loggedInUser?._id ? (
        <Modal isOpen={isOpen} onClose={() => setShowEditReviewModal(false)}>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{business.name}</h2>
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarFallback>
                  {loggedInUser?.firstName[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>{`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}</div>
            </div>

            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                  name="reviewContent"
                  placeholder="Type your message here."
                  id="message"
                  value={contentValue}
                  onChange={(ev) => setContentValue(ev.currentTarget.value)}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="rating">Rating</Label>
                <RatingInput
                  value={ratingValue}
                  onChange={(value: number) => setRatingValue(value)}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </Modal>
      ) : null}
    </>
  );
}

export default EditReviewModal;
