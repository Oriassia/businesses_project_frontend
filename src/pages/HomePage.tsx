import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaSearch,
  FaCoffee,
  FaPizzaSlice,
  FaGlassCheers,
  FaShoppingCart,
} from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bgBanana from "../imgs/bgBanana.jpg";

const HomePage: React.FC = () => {
  return (
    <div className="lg:min-h-screen bg-gradient-to-r from-purple-50 via-pink-50 to-red-50">
      <div>
        <div
          className="bg-cover bg-center lg:h-screen lg:px-[5em] px-[1em]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0.7) 40%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0.1) 80%, rgba(255, 255, 255, 0) 100%), url(${bgBanana})`,
          }}
        >
          <header className="text-center py-10">
            <motion.h1
              className="text-6xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Discover & Review
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Share your experiences and find the best places around you.
            </motion.p>
            <Link to="/businesses">
              <motion.button
                className="px-8 py-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Explore Now
              </motion.button>
            </Link>
          </header>

          <section className="lg:py-20 py-10 px-10 rounded-md bg-white">
            <div className="text-center mb-12">
              <motion.h2
                className="text-4xl font-bold text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Popular Categories
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                Find the best places based on your preferences
              </motion.p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8">
              <CategoryCard
                title="Cafes"
                icon={<FaCoffee size={48} className="text-pink-600" />}
                image="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <CategoryCard
                title="Restaurants"
                icon={<FaPizzaSlice size={48} className="text-pink-600" />}
                image="https://images.pexels.com/photos/8176833/pexels-photo-8176833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <CategoryCard
                title="Bars"
                icon={<FaGlassCheers size={48} className="text-pink-600" />}
                image="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <CategoryCard
                title="Shops"
                icon={<FaShoppingCart size={48} className="text-pink-600" />}
                image="https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
          </section>
        </div>

        <section className="py-20 bg-gradient-to-r from-pink-50 to-red-50 lg:px-[5em] px-[1em]">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              How It Works
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Easy steps to discover and share your experiences
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[1, 2, 3].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {step === 1 && (
                  <>
                    <FaSearch
                      size={48}
                      className="text-pink-600 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Search
                    </h3>
                    <p className="text-gray-600">
                      Find the best places based on your preferences.
                    </p>
                  </>
                )}
                {step === 2 && (
                  <>
                    <FaStar size={48} className="text-pink-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Review
                    </h3>
                    <p className="text-gray-600">
                      Share your experiences with the community.
                    </p>
                  </>
                )}
                {step === 3 && (
                  <>
                    <AiFillHeart
                      size={48}
                      className="text-pink-600 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Discover
                    </h3>
                    <p className="text-gray-600">
                      Explore new places based on reviews from others.
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Featured Reviews
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Read reviews from our community
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReviewCard
              username="Jane Doe"
              rating={5}
              review="Amazing place! The atmosphere was fantastic and the food was delicious."
              image="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <ReviewCard
              username="John Smith"
              rating={4}
              review="Great service and cozy environment. Would definitely recommend."
              image="https://images.pexels.com/photos/1231234/pexels-photo-1231234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <ReviewCard
              username="Emily Brown"
              rating={5}
              review="A perfect place for a weekend getaway. Loved every moment here."
              image="https://images.pexels.com/photos/4564564/pexels-photo-4564564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              What Our Users Say
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Hear from our vibrant community of reviewers
            </motion.p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Carousel
              showArrows={true}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
            >
              <div>
                <img
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Review 1"
                />
                <div className="legend">
                  <h3 className="text-2xl font-bold">Jane Doe</h3>
                  <p>
                    Amazing place! The atmosphere was fantastic and the food was
                    delicious.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/1231234/pexels-photo-1231234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Review 2"
                />
                <div className="legend">
                  <h3 className="text-2xl font-bold">John Smith</h3>
                  <p>
                    Great service and cozy environment. Would definitely
                    recommend.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/4564564/pexels-photo-4564564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Review 3"
                />
                <div className="legend">
                  <h3 className="text-2xl font-bold">Emily Brown</h3>
                  <p>
                    A perfect place for a weekend getaway. Loved every moment
                    here.
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </section>
      </div>
    </div>
  );
};

interface CategoryCardProps {
  title: string;
  icon: JSX.Element;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon, image }) => {
  return (
    <motion.div
      className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <p>{icon}</p>
          <h3 className="text-white text-2xl font-bold mt-2">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

interface HowItWorksCardProps {
  step: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  step,
  title,
  description,
  icon,
}) => {
  return (
    <motion.div
      className="relative bg-gradient-to-r from-pink-50 to-red-50 border border-gray-200 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h4 className="text-2xl font-bold text-gray-800 mb-2">
        Step {step}: {title}
      </h4>
      <p className="text-gray-600">{description}</p>
      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center">
        <p className="text-white text-lg font-semibold">Learn More</p>
      </div>
    </motion.div>
  );
};

interface ReviewCardProps {
  username: string;
  rating: number;
  review: string;
  image: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  username,
  rating,
  review,
  image,
}) => {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={username}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-bold text-gray-800">{username}</h4>
          <div className="flex items-center">
            {Array(rating)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{review}</p>
    </motion.div>
  );
};

export default HomePage;
