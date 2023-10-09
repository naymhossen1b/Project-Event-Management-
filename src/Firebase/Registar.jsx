/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import Sociallogin from "./Sociallogin";
import { useContext, useState } from "react";
import { AuthContext } from "../Components/Authprovider/Authprovider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Registar = () => {
  const [err, setErr] = useState("");
  const [succes, setSucces] = useState("");
  const [showPass, setShowPass] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleRegistar = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password < 6) {
      toast.error("Password must be at least 6 characters long.");

      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one capital letter.");

      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      toast.error("Password must contain at least one special character.");
      return;
    }
    setErr("");
    setSucces("");
    createUser(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Successfully Registerd!");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="mt-8 md:w-6/12 mx-auto rounded-xl p-5 bg-gray-300">
        <div className="text-center">
          <h1 className="font-bold text-xl">Tell us about yourself</h1>
          <p>Let's get started. Please provide your information.</p>
        </div>

        <form onSubmit={handleRegistar} className="mt-8 space-y-5">
          <div className="space-y-1 text-sm">
            <label className="block">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              className="w-full px-4 py-3 rounded-md border-2"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-md border-2"
            />
          </div>

          <div className="space-y-1 relative text-sm">
            <label className="block">Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              required
              placeholder="peovied a strong password"
              className="w-full px-4 py-3  rounded-md border-2"
            />
            <span className="flex justify-end absolute" onClick={() => setShowPass(!showPass)}>
              {" "}
              {showPass ? <FaEyeSlash /> : <FaEye />}{" "}
            </span>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
          >
            Sign in
          </button>
        </form>

        {/* {succes && <p className="font-bold text-green-500">{succes}</p>} */}

        {/* {err && <p className="text-red-700 font-bold">{err}</p>} */}

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm ">Join your social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div>
          <Sociallogin />
        </div>
        <div className="mt-5">
          <p className="text-xs text-center font-bold sm:px-6">
            Alrady have an account?
            <Link to="/login">
              <span
                rel="noopener noreferrer"
                href="#"
                className="underlin ml-1 hover:cursor-pointer text-orange-400"
              >
                Login Now
              </span>
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Registar;
