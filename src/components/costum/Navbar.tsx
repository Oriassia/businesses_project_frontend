import { Link } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../store/storeIndex";
import { logout } from "../../../store/actions/user.actions";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import ModeToggle from "./mode-toggle";
import { GrOverview } from "react-icons/gr";

const Navbar = () => {
  const { loggedInUser } = useSelector((state: RootState) => state.userModule);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toggleMobileMenu = () => {
    setDesktopMenuOpen(!desktopMenuOpen);
  };

  return (
    <nav className="dark:bg-gray-800 lg:px-[5em] px-[1em] lg:py-10 dark:text-white text-black bg-pink-300 flex justify-between items-center h-16">
      <div className="flex gap-5 items-center">
        <Link
          className="dark:text-white flex text-gray-800 items-center gap-5 text-[2em] font-bold"
          to="/"
        >
          REview <GrOverview />
        </Link>
        <Link
          to="/businesses"
          className="hidden lg:inline-block lg:text-[1.5em] lg:rounded-lg lg:px-4 lg:py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-pink-500 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
        >
          all businesses
        </Link>
      </div>
      <div className="flex items-center gap-2">
        {loggedInUser ? (
          <div className="flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="h-8 w-8">
                  {/* <AvatarImage src={loggedInUser?.imgURL} /> */}
                  <AvatarFallback>
                    {loggedInUser?.firstName[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/my-profile">My profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/businesses" className="text-white">
                    Businesses
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => dispatch(logout())}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <>
            <button
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    desktopMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
            <div className="hidden md:flex items-center gap-2">
              <div className="flex gap-5 text-[1.5em]">
                <Link
                  to="/login"
                  className="lg:text-[1.3em] lg:rounded-lg lg:px-4 lg:py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-pink-500 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  login
                </Link>
                <Link
                  to="/register"
                  className="lg:text-[1.3em] lg:rounded-lg lg:px-4 lg:py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-pink-500 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  register
                </Link>
              </div>
            </div>
          </>
        )}
        <ModeToggle />
      </div>
      {desktopMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-white/95 dark:bg-gray-800/95 p-4 shadow-md z-10">
          <nav>
            <ul className="flex flex-col gap-4">
              {!loggedInUser && (
                <>
                  <li>
                    <Link to="/businesses" onClick={toggleMobileMenu}>
                      Businesses
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" onClick={toggleMobileMenu}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" onClick={toggleMobileMenu}>
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

{
  /* <div className="flex justify-between lg:px-[4em] items-center">
  <div className="text-white text-lg font-bold">
    <Link to="/">Home</Link>
  </div>
  <div className="space-x-4">
    <Link to="/businesses" className="text-white">
      Businesses
    </Link>
    <Link to="/login" className="text-white">
      Login
    </Link>
    <button className="text-white" onClick={() => dispatch(logout())}>
      Logout
    </button>
  </div>
</div> */
}
