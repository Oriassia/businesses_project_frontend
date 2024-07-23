import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/services/api.service";
import { IBusiness, IReview } from "@/types/business.types";
import DetailsPageHeader from "@/components/costum/businessDetailsComp/DetailsPageHeader";
import Modal from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import DetailsPageInfo from "@/components/costum/businessDetailsComp/DetailsPageInfo";
import DetailsPageReviews from "@/components/costum/businessDetailsComp/DetailsPageReviews";
import { RootState, useAppDispatch } from "../../store/storeIndex";
import { setReviews } from "../../store/actions/review.actions";
import { socket } from "@/App";
import { useSelector } from "react-redux";
import OtherBusinesses from "@/components/costum/businessDetailsComp/OtherBusinesses";
import { MdPhoneForwarded } from "react-icons/md";

const BusinessDetailsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [business, setBusiness] = useState<IBusiness | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { reviews } = useSelector((state: RootState) => state.reviewsModule);
  const { loggedInUser } = useSelector((state: RootState) => state.userModule);
  const dispatch = useAppDispatch();
  const fetchBusinessAndReviews = useCallback(async () => {
    try {
      const response = await api.get(`/businesses/${id}`);
      setBusiness(response.data);
      dispatch(setReviews(response.data.reviews));
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch business details and reviews");
      setLoading(false);
    }
  }, [id, dispatch]);

  useEffect(() => {
    const handleLikedReview = (payload: any) => {
      if (payload.user === loggedInUser?._id) return;
      const newReviews = reviews!.map((review) => {
        if (review._id === payload.review)
          return { ...review, likes: review.likes + 1 };
        return review;
      });

      dispatch(setReviews(newReviews));
    };

    const handleUnlikedReview = (payload: any) => {
      if (payload.user === loggedInUser?._id) return;
      const newReviews = reviews!.map((review) => {
        if (review._id === payload.review)
          return { ...review, likes: review.likes - 1 };
        return review;
      });

      dispatch(setReviews(newReviews));
    };

    const applySocketListeners = () => {
      socket.on("reviewCreated", fetchBusinessAndReviews);
      socket.on("reviewDeleted", fetchBusinessAndReviews);
      socket.on("reviewUpdated", fetchBusinessAndReviews);
      socket.on("likedReview", handleLikedReview);
      socket.on("unlikedReview", handleUnlikedReview);
    };

    const cleanSocketListeners = () => {
      socket.off("reviewCreated", fetchBusinessAndReviews);
      socket.off("reviewDeleted", fetchBusinessAndReviews);
      socket.off("reviewUpdated", fetchBusinessAndReviews);
      socket.off("likedReview", handleLikedReview);
      socket.off("unlikedReview", handleUnlikedReview);
    };
    applySocketListeners();

    return () => cleanSocketListeners();
  }, [reviews, fetchBusinessAndReviews, loggedInUser, socket, dispatch]);
  useEffect(() => {
    fetchBusinessAndReviews();
  }, [id]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div className="lg:px-[5em] px-[1em] lg:flex lg:justify-between">
      <div>
        {/* HEADER */}
        <DetailsPageHeader business={business} />

        <div>
          <Button
            className="mb-4 font-medium bg-pink-700 text-[1.01em] text-white flex items-center  text-center justify-center gap-2 hover:bg-pink-900"
            onClick={handleOpenModal}
          >
            <span>Show a phone number</span>
            <span className="flex text-center items-center">
              <MdPhoneForwarded className=" text-center" />
            </span>
          </Button>
        </div>
        {showModal && (
          <Modal isOpen={showModal} onClose={handleCloseModal}>
            <h2 className="text-xl dark:text-gray-800 font-bold mb-4">
              {business.name} {`on ${business.contactInfo.address}`}
            </h2>
            <p className="p-5 bg-pink-50 dark:text-gray-700 rounded-md text-xl">
              {business.contactInfo.phoneNumber}
            </p>
            <div className="mt-4 p-5 bg-pink-50 rounded-md">
              <p className="mb-4 dark:text-gray-700">
                Did you manage to reach them?
              </p>
              <div className="flex space-x-4">
                <Button
                  className="bg-green-500 hover:bg-green-600"
                  onClick={handleCloseModal}
                >
                  Yes, they answered
                </Button>
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={handleCloseModal}
                >
                  Wrong number
                </Button>
                <Button
                  className="bg-red-500 hover:bg-red-600"
                  onClick={handleCloseModal}
                >
                  No answer
                </Button>
              </div>
              <p className="text-sm text-zinc-500 pt-4 max-w-sm">
                Tell them you found a number on{" "}
                <span className="text-pink-800 font-medium">REview</span> —
                companies work better if they know you can influence their
                rating
              </p>
            </div>
          </Modal>
        )}
        {/* IMG */}
        <img
          src={business.image}
          alt={business.name}
          className="w-[50em] h-64 object-cover rounded-lg mb-4"
        />
        {/* INFO */}
        <DetailsPageInfo
          business={business}
          isExpanded={isExpanded}
          toggleDescription={toggleDescription}
        />
        {/* REVIEWS */}
        <DetailsPageReviews business={business} />
      </div>
      <OtherBusinesses currentBusinessId={business._id} />
    </div>
  );
};

export default BusinessDetailsPage;
