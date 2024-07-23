import { useEffect, useState } from "react";
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

  function applySocketListeners() {
    socket.on("reviewCreated", fetchBusinessAndReviews);
    socket.on("reviewDeleted", fetchBusinessAndReviews);
    socket.on("reviewUpdated", fetchBusinessAndReviews);

    socket.on("likedReview", (payload) => {
      if (payload.user === loggedInUser?._id) return;
      const newReviews = reviews!.map((review) => {
        if (review._id === payload.review)
          return { ...review, likes: review.likes + 1 };
        return review;
      });
      dispatch(setReviews(newReviews));
    });
    socket.on("unlikedReview", (payload) => {
      if (payload.user === loggedInUser?._id) return;
      const newReviews = reviews!.map((review) => {
        if (review._id === payload.review)
          return { ...review, likes: review.likes - 1 };
        return review;
      });
      dispatch(setReviews(newReviews));
    });
  }
  function cleanSocketListeners() {
    socket.off("reviewCreated");
    socket.off("reviewDeleted");
    socket.off("reviewUpdated");
    socket.off("likedReview");
    socket.off("unlikedReview");
  }
  const fetchBusinessAndReviews = async () => {
    try {
      const response = await api.get(`/businesses/${id}`);
      setBusiness(response.data);
      dispatch(setReviews(response.data.reviews));
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch business details and reviews");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBusinessAndReviews();
    applySocketListeners();
    return () => cleanSocketListeners();
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
    <div className="lg:px-[5em] px-[1em] ">
      {/* HEADER */}
      <DetailsPageHeader business={business} />

      <div className="flex lg:gap-10 gap-2">
        <Button
          className="mb-4 font-medium bg-pink-700 hover:bg-pink-900"
          onClick={handleOpenModal}
        >
          Show a phone number
        </Button>
      </div>
      {showModal && (
        <Modal isOpen={showModal} onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">
            {business.name} {`on ${business.contactInfo.address}`}
          </h2>
          <p className="p-5 bg-pink-50 rounded-md text-xl">
            {business.contactInfo.phoneNumber}
          </p>
          <div className="mt-4 p-5 bg-pink-50 rounded-md">
            <p className="mb-4">Did you manage to reach them?</p>
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
              Tell them you found a number on Gurmania — companies work better
              if they know you can influence their rating
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
  );
};

export default BusinessDetailsPage;
