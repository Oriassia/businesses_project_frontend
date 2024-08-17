import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import RatingInput from "./RatingInput";
import Modal from "@/components/ui/modal";
import { IBusiness } from "@/types/business.types";
import { useNavigate } from "react-router-dom";
import { IUser } from "@/types/user.types";

interface AddReviewModalProps {
  business: IBusiness;
  loggedInUser: IUser | null; // Define proper type for user
  showAddReviewModal: boolean;
  setShowAddReviewModal: (value: boolean) => void;
  handleSubmit: (event: React.FormEvent) => void;
  setRatingValue: (value: number) => void;
}

const AddReviewModal = ({
  business,
  loggedInUser,
  showAddReviewModal,
  setShowAddReviewModal,
  handleSubmit,
  setRatingValue,
}: AddReviewModalProps) => {
  const navigate = useNavigate();

  if (!loggedInUser) {
    navigate("/login");
    return null; // Return null to render nothing if not logged in
  }

  return (
    <Modal
      isOpen={showAddReviewModal}
      onClose={() => setShowAddReviewModal(false)}
    >
      <div className="text-[2em] font-bold text-gray-800 pb-4">
        {business.name}
      </div>
      <div className="flex text-sm gap-3 items-center text-gray-600">
        <Avatar className="h-8 w-8">
          {/* <AvatarImage src={loggedInUser?.imgURL} /> */}
          <AvatarFallback className="dark:text-white">
            {loggedInUser?.firstName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="text-[1.1em] font-semibold">{`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message" className="text-gray-700 py-3 font-medium">
            Your message
          </Label>
          <Textarea
            name="reviewContent"
            placeholder="Type your message here."
            id="message"
            className="text-gray-100 placeholder:text-gray-200"
          />
        </div>
        <RatingInput
          value={null}
          onChange={(value: number) => setRatingValue(value)}
        />
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default AddReviewModal;
