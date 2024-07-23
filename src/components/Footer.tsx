import grapefruit from "../imgs/grapefruit.jpg";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <section
        className="py-16 bg-cover bg-center  relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 0.1) 80%, rgba(255, 255, 255, 0) 100%), url(${grapefruit})`,
        }}
      >
        <div className="lg:w-[40em] mx-auto text-center">
          <h2 className="text-3xl font-bold dark:text-pink-700 text-pink-600 mb-8 drop-shadow-xl">
            Stay Updated
          </h2>
          <p className="text-white mb-4  dark:text-pink-950 drop-shadow-xl text-[1.2em] tracking-wider">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 border border-pink-400 rounded-md focus:outline-none focus:border-pink-600 transition duration-300 placeholder-gray-400 bg-rose-100 dark:bg-pink-200 text-gray-800 shadow-md hover:shadow-lg"
            style={{ maxWidth: "600px" }}
          />
          <button className="bg-pink-700 text-white ml-2 px-6 py-3 rounded-md hover:bg-pink-800 transition duration-300">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center py-10 space-x-4">
          <Link
            to="#"
            className="text-white hover:text-pink-300 transition duration-300"
          >
            <FaFacebook className="text-[3em]" />
          </Link>
          <Link
            to="#"
            className="text-white hover:text-pink-300 transition duration-300"
          >
            <FaTwitter className="text-[3em]" />
          </Link>
          <Link
            to="#"
            className="text-white hover:text-pink-300 transition duration-300"
          >
            <FaInstagram className="text-[3em]" />
          </Link>
          <Link
            to="#"
            className="text-white hover:text-pink-300 transition duration-300"
          >
            <FaLinkedin className="text-[3em]" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
