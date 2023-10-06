import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";

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
      <div className="flex items-center">
        <li>
          {" "}
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/about">About</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/career">Career</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/login">Login</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/register">Registration</NavLink>{" "}
        </li>
      </div>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">EventBox</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <>
                <span>{user.auth.name}</span>
                <button onClick={handleSignOut} className="btn">
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login">
                <a className="btn">Login</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;