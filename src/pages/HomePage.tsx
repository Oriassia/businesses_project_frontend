import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaSearch, FaCoffee, FaPizzaSlice } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 py-8">
      <div className="lg:px-[5em] px-[1em]">
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

        <section className="py-20">
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
              icon={<AiFillHeart size={48} className="text-pink-600" />}
              image="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <CategoryCard
              title="Shops"
              icon={<FaStar size={48} className="text-pink-600" />}
              image="https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
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
            <HowItWorksCard
              step="1"
              title="Search"
              description="Find the best places based on your preferences."
              icon={<FaSearch size={48} className="text-pink-600" />}
            />
            <HowItWorksCard
              step="2"
              title="Review"
              description="Share your experiences with the community."
              icon={<FaStar size={48} className="text-pink-600" />}
            />
            <HowItWorksCard
              step="3"
              title="Discover"
              description="Explore new places based on reviews from others."
              icon={<AiFillHeart size={48} className="text-pink-600" />}
            />
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
      className="bg-white border border-gray-200 rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h4 className="text-2xl font-bold text-gray-800 mb-2">
        Step {step}: {title}
      </h4>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default HomePage;
