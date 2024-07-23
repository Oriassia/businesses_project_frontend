import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaSearch,
  FaCoffee,
  FaPizzaSlice,
  FaGlassCheers,
  FaShoppingCart,
  FaUserFriends,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bgBanana from "../imgs/bgBanana.jpg";
import { TbHandClick } from "react-icons/tb";

const HomePage = () => {
  return (
    <div className="lg:min-h-screen bg-gradient-to-r from-purple-50 via-pink-50 to-red-50">
      <div>
        <div
          className="bg-cover bg-center lg:min-h-screen lg:px-[5em] py-[1em] px-[1em]"
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
              Share your experiences and find the best places around
              <span className="text-pink-800 uppercase font-bold"> you</span>.
            </motion.p>
            <div className="marquee bg-pink-200 bg-opacity-50 py-2 mb-8 text-black font-semibold ">
              <div className="marquee-content">
                <span className="mr-10">
                  "Amazing coffee at Joe's Café! Thanks to the review service
                  for the recommendation!" - Sarah K.
                </span>
                <span className="mr-10">
                  "The pizza at Mario's Pizzeria is a must-try! Found it on the
                  review site." - John D.
                </span>
                <span className="mr-10">
                  "Loved the cozy atmosphere at The Reading Room. Great find
                  through the reviews!" - Emma W.
                </span>
                <span className="mr-10">
                  "Had a fantastic brunch at Sunny Side Up. Highly recommended!"
                  - Chris P.
                </span>
                <span className="mr-10">
                  "Found the best cocktails at Mix & Mingle thanks to the
                  community reviews!" - Lisa M.
                </span>
                <span className="mr-10">
                  "The service at Gourmet Grill was top-notch. Thanks for the
                  heads-up!" - Michael T.
                </span>
                <span className="mr-10">
                  "Discovered the hidden gem, Little Bookstore, through the
                  reviews. Loved it!" - Alice B.
                </span>
                <span className="mr-10">
                  "Best sushi experience at Sushi World! Grateful for the
                  recommendation." - Daniel H.
                </span>
                <span className="mr-10">
                  "Great ambiance and food at The Rustic Table. Found it on the
                  review platform." - Rachel G.
                </span>
                <span className="mr-10">
                  "Enjoyed a delightful evening at The Wine Cellar, thanks to
                  the reviews!" - Brian S.
                </span>
              </div>
            </div>
            <motion.button
              className="px-8 py-3 bg-pink-600 text-white rounded-full flex text-[1.3em] mx-auto justify-center gap-3 items-center  shadow-lg hover:bg-pink-700 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to="/businesses"
                className="flex justify-center items-center"
              >
                <p>Explore Now</p>{" "}
                <p>
                  <TbHandClick />
                </p>
              </Link>
            </motion.button>
          </header>

          <section className="lg:py-20 py-10 px-10 rounded-md bg-pink-100 bg-opacity-55">
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

        <section className="py-20 bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-800 dark:to-orange-950 lg:px-[5em] px-[1em]">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold dark:text-pink-200 text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              How It Works
            </motion.h2>
            <motion.p
              className="text-[1.3em] dark:text-rose-200 text-gray-600"
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
                className="bg-white rounded-lg shadow-lg p-8 text-center dark:bg-opacity-50 transition duration-300 hover:scale-105 hover:shadow-2xl"
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
                    <p className="text-gray-600 dark:text-black text-[1.1em]">
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
                    <p className="text-gray-600 dark:text-black text-[1.1em]">
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
                    <p className="text-gray-600 dark:text-black text-[1.1em]">
                      Explore new places based on reviews from others.
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 lg:px-[5em] px-[1em] dark:bg-gradient-to-r  dark:from-pink-800 dark:to-orange-950  bg-gradient-to-t">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold lg:py-2 dark:text-pink-200 text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Top Features
            </motion.h2>
            <motion.p
              className=" text-gray-600 dark:text-rose-200 text-[1.3em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Discover the amazing features of our review application
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="User-friendly Interface"
              description="Easily navigate and find the best places to visit."
              icon={<FaMobileAlt size={48} className="text-pink-600" />}
              image="https://images.pexels.com/photos/4565777/pexels-photo-4565777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <FeatureCard
              title="Comprehensive Reviews"
              description="Read detailed reviews and ratings from our community."
              icon={<FaStar size={48} className="text-pink-600" />}
              image="https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <FeatureCard
              title="Wide Range of Categories"
              description="Explore reviews across various categories and places."
              icon={<AiFillHeart size={48} className="text-pink-600" />}
              image="https://images.pexels.com/photos/163822/color-umbrella-red-yellow-163822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <FeatureCard
              title="Community Driven"
              description="Join a vibrant community of reviewers."
              icon={<FaUserFriends size={48} className="text-pink-600" />}
              image="https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <FeatureCard
              title="Secure and Private"
              description="Your data is safe with our top-notch security."
              icon={<FaShieldAlt size={48} className="text-pink-600" />}
              image="https://images.pexels.com/photos/4291/door-green-closed-lock.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <FeatureCard
              title="Accessible Anywhere"
              description="Use our app on any device, anytime."
              icon={<FaMobileAlt size={48} className="text-pink-600" />}
              image="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg"
            />
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r dark:bg-gradient-to-r  dark:from-pink-800 dark:to-orange-950 px-[1em] from-purple-100 via-pink-100 to-red-100">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold dark:text-pink-200 text-gray-800 lg:py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              What Our Users Say
            </motion.h2>
            <motion.p
              className="text-[1.3em] dark:text-rose-200 text-gray-600"
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
                    Amazing service! Easily navigate and find the best places to
                    visit.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Review 2"
                />
                <div className="legend">
                  <h3 className="text-2xl font-bold">John Smith</h3>
                  <p>Read detailed reviews and ratings from our community.</p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg"
                  alt="Review 3"
                />
                <div className="legend">
                  <h3 className="text-2xl font-bold">Emily Brown</h3>
                  <p>Explore reviews across various categories and places.</p>
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
      className=" relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-xl"
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

interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  image,
}) => {
  return (
    <motion.div
      className="relative  rounded-lg shadow-lg overflow-hidden  transition duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <p>{icon}</p>
          <h3 className="text-white text-2xl font-bold mt-2">{title}</h3>
          <p className="text-white mt-2 px-4">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
