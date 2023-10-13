import { useState, useEffect, useContext } from "react";
// import { CartContext } from "../../contexts/cart.jsx";
// import Cart from "../../pages/Cart.jsx";
import { Link } from "react-router-dom";
import { BsCart, BsHeart } from "react-icons/bs";
import data from "../data/highlyTrending.jsx";

const NavBar = function () {
  const [items, setItems] = useState(data);

  return (
    <header className="bg-white border-b-1 h-14 sticky top-0 shadow shadow-gray-500">
      <nav className="flex justify-between items-center w-[92%]  mx-auto ">
        <div className="uppercase text-4xl tracking-wide font-bold pt-2">
          <Link
            to="/"
            className=" w-40 cursor-pointer  transition-colors"
          >
            Blairs
          </Link>
        </div>

        <div className="nav-links duration-500 md:static absolute  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center pt-3 text-xl">
          <ul className="flex md:flex-row md:items-center md:gap-[4vw] gap-8 pr-30 ">
            <li className=" tracking-widest uppercase font-bold">
              <Link
                to="/dresses"
                className=" transition-colors hover:text-gray-500"
              >
                Dresses
              </Link>
            </li>
            <li className=" tracking-widest uppercase font-bold ">
              <Link
                to="/shorts"
                className="transition-colors hover:text-gray-500 "
              >
                Shorts
              </Link>
            </li>
            <li className=" tracking-widest uppercase font-bold">
              <Link
                to="/tshirts"
                className="transition-colors hover:text-gray-500"
              >
                Tshirts
              </Link>
            </li>
            <li className=" tracking-widest uppercase font-bold">
              <Link
                to="/pants"
                className="transition-colors hover:text-gray-500"
              >
                Pants
              </Link>
            </li>
            <li className="tracking-widest uppercase font-bold">
              <Link
                to="/shirts"
                className="transition-colors hover:text-gray-500"
              >
                Shirts
              </Link>
            </li>
            <li> </li>
          </ul>
        </div>

        <button>
          <BsHeart />
        </button>

        <button>
          <BsCart className="text-2xl" />
        </button>

        <div className="flex items-center  gap-2 pt-3 ">
          <Link to="/signup">
            <button className="bg-[#891b91] text-white px-3 py-1 rounded-full hover:bg-[#cc87ec]">
              Sign Up
            </button>
          </Link>

          <Link to="/login">
            <button className="bg-[#891b91] text-white px-3 py-1 rounded-full hover:bg-[#cc87ec]">
              Log In
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
