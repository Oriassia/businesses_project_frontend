import { IBusiness, IReview } from "@/types/business.types";
import EditReviewModal from "./EditReviewModal";
import { useState } from "react";
import { Pen } from "lucide-react";
import { MdDelete } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { removeLike, updateLike } from "../../../store/actions/review.actions";
import { RootState, useAppDispatch } from "../../../store/storeIndex";
import { renderStars } from "@/utils/renderStars";
import { useSelector } from "react-redux";
import api from "@/services/api.service";
import {
  removeUserLike,
  updateUserLike,
} from "../../../store/actions/user.actions";
import { AlertDialogComp } from "./businessDetailsComp/AlertDialogComp";

interface ReviewCardProps {
  review: IReview;
  business: IBusiness;
}

function ReviewCard({ review, business }: ReviewCardProps) {
  const [showEditReviewModal, setShowEditReviewModal] =
    useState<boolean>(false);
  const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);

  const { loggedInUser } = useSelector((state: RootState) => state.userModule);

  const dispatch = useAppDispatch();

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
    <>
      <EditReviewModal
        isOpen={showEditReviewModal}
        setShowEditReviewModal={setShowEditReviewModal}
        business={business}
        review={review}
      />

      <AlertDialogComp
        showAlertDialog={showAlertDialog}
        reviewId={review._id}
        setShowAlertDialog={setShowAlertDialog}
      />
      <div
        key={review._id}
        className="mb-4 p-4 bg-white border border-gray-200 rounded-lg shadow-lg"
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex text-yellow-500">
            {renderStars(review.rating)}
          </div>

          {/* editing box : delete & update */}
          {review?.user._id === loggedInUser?._id ? (
            <div className="flex gap-3">
              <button
                onClick={() => setShowEditReviewModal(true)}
                className="text-black"
              >
                <Pen className="text-gray-800 text-[1.5em]" />
              </button>
              <button
                className="text-black"
                onClick={() => setShowAlertDialog(true)}
              >
                <MdDelete className="text-red-700 text-[1.5em]" />
              </button>
            </div>
          ) : null}
        </div>
        <p className="text-gray-700 mb-2 font-bold">{review.user.username}</p>
        <p className="text-gray-700 mb-2">{review.content}</p>
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
      </div>
    </>
  );
}

export default ReviewCard;
