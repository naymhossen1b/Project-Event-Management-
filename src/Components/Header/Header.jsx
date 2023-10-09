import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  const { logout, user } = useContext(AuthContext);

  const handleSignOut = () => {
    logout()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navlinks = (
    <>
      <div className="flex justify-end">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </div>
    </>
  );

  return (
    <>
      <div className="navbar mx-auto bg-gray-800 text-white rounded-md ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu w-72 bg-gray-500 menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box"
            >
              {navlinks}
            </ul>
          </div>
          <div className="flex items-center  gap-3">
            <a className="btn btn-ghost  normal-case text-red-300 text-2xl">EventLab</a>
            <div className="lg:flex hidden">
              <input
                className="rounded-md absolute p-1  lg:px-3 border bg-black text-white"
                type="search"
                name="search"
                id=""
                placeholder="Search hear"
              />
              <BiSearch className="relative mt-2 ml-44" />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div>
              <img className="w-14 mr-3 rounded-full" src={user.photoURL} alt="" />
            </div>
          ) : (
            <div></div>
          )}
          <div>
            {user ? (
              <>
                <button onClick={handleSignOut} className="btn bg-red-500 border-none text-white">
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login">
                <a className="btn bg-red-500 border-none text-white">Login</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
