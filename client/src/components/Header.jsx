// import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun, FaAngleDown, FaBars } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";

const Header = () => {
  const path = useLocation().pathname;
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");
  const [sticky, setSticky] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setClick(!click);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  const handleSignout = async () => {
    try {
      const res = await fetch("/server/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <nav
      className={`flex items-center bg-[#E3E4E8] justify-between py-4 px-12 fixed top-0 left-0 right-0 w-full z-50 ${
        sticky ? "shadow-xl" : ""
      } dark:bg-black`}
    >
      <div>
        <Link
          to="/"
          onClick={goTop}
          className="self-center whitespace-nowrap text-lg min620:text-xl font-semibold dark:text-white left-4"
        >
          <span className="px-2 py-2 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 rounded-xl text-white">
            NamasteNest
          </span>
          Blog
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          type="search"
          className="md:block hidden border-[1px] rounded text-[#444] text-[16px] font-medium h-[45px] py-[5px] px-[20px] w-full outline-none focus:outline-none focus:ring-0 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <button
        className="w-20 h-12 flex justify-center md:hidden rounded-2xl items-center bg-slate-300"
        color="red"
      >
        <AiOutlineSearch />
      </button>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link
            onClick={goTop}
            to="/"
            className="text-lg hover:text-red-500 transition-colors"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={goTop}
            to="/about"
            className="text-lg hover:text-red-500 transition-colors"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={goTop}
            to="/projects"
            className="text-lg hover:text-red-500 transition-colors"
          >
            Projects
          </Link>
        </li>
      </ul>
      <div className="flex gap-2 items-center md:order-1">
        <button
          className="w-20 h-12 md:flex bg-slate-800 hidden items-center justify-center rounded-full dark:bg-white"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? (
            <FaMoon className="text-white" />
          ) : (
            <FaSun className="text-black" />
          )}
        </button>
        <div
          className="md:hidden flex items-center justify-center text-slate-500 w-16 h-12"
          onClick={goTop}
        >
          {click ? (
            <span className="icon">
              <FaBars />{" "}
            </span>
          ) : (
            <span className="icon">
              <FaBars />
            </span>
          )}
        </div>
        {currentUser ? (
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                onClick={toggleDropdown}
                className="flex items-center"
              >
                <img
                  src={currentUser.profilePicture}
                  alt="User Profile"
                  className="w-11 h-11 rounded-full"
                />
              </button>
            </div>
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="px-4 py-2">
                    <span className="block text-sm text-black">
                      @{currentUser.username}
                    </span>
                    {/* Display other user details as needed */}
                  </div>
                  <Link
                    onClick={() => {
                      setDropdownOpen(false);
                      goTop();
                    }}
                    to="/dashboard?tab=profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleSignout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    // role="menuitem"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/sign-in">
            <button className="rounded-md outline p-2 bg-neutral-300 text-black hover:bg-emerald-700 hover:text-white hover:shadow-lg transition duration-300 ease-in-out">
              Sign In
            </button>
          </Link>
        )}
        <button
          className="hidden md1000:inline"
          onClick={() => dispatch(toggleTheme())}
        >
          <FaSun />
        </button>
      </div>
    </nav>
  );
};

export default Header;
