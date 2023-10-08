import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";

const NavBar = function () {
  // return (
    // <header className="flex items-center justify-center gap-8 h-20">
    //   <div>
    //     <Link className="text-2xl">Blairs</Link>
    //   </div>
    //   <nav className="text-xl flex items-center justify-center gap-8">
    //     <Link to="/jackets">Jackets</Link>
    //     <Link to="pants">Pants</Link>
    //     <Link to="shirts">Shirts</Link>
    //     <Link to="skirts">Skirts</Link>
    //   </nav>
    // </header>)

    return (
      <header>
        <nav className="bg-green-600 py-4 text-white">
          <ul className="flex flex-wrap justify-center">
            <li className="mx-2 tracking-widest uppercase font-bold">
              <div>
                <Link to="/" className="transition-colors hover:text-green-900">
                  Blairs
                </Link>
              </div>
            </li>
            <li className="mx-2 tracking-widest uppercase font-bold">
              <Link
                to="/dresses"
                className="transition-colors hover:text-green-900"
              >
               Dresses
              </Link>
            </li>
            <li className="mx-2 tracking-widest uppercase font-bold">
              <Link
                to="/shorts"
                className="transition-colors hover:text-green-900"
              >
                Shorts
              </Link>
            </li>
            <li className="mx-2 tracking-widest uppercase font-bold">
              <Link
                to="/tshirts"
                className="transition-colors hover:text-green-900"
              >
               Tshirts
              </Link>
            </li>
            <li className="mx-2 tracking-widest uppercase font-bold">
              <Link
                to="/pants"
                className="transition-colors hover:text-green-900"
              >
                Pants
              </Link>
            </li>
            <li className="mx-2 tracking-widest uppercase font-bold">
              <Link
                to="/shirts"
                className="transition-colors hover:text-green-900"
              >
                Shirts
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  
};

export default NavBar;
