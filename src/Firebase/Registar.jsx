/* eslint-disable react/no-unescaped-entities */

import { Link, useNavigate } from "react-router-dom";
import Sociallogin from "./Sociallogin";
import { useContext, useState } from "react";
import { AuthContext } from "../Components/Authprovider/Authprovider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Healmet from "../Components/Healmet/Healmet";

const Registar = () => {
  const [err, setErr] = useState("");
  const [succes, setSucces] = useState("");
  const [showPass, setShowPass] = useState(false);

  const { createUser, updateOnProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegistar = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
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
        updateOnProfile(name, photo).then(() => {
          toast.success("User created successfully");
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Healmet title="Registration" />
      <div className="mt-8 md:w-6/12 mx-auto rounded-xl p-5 bg-[url('https://i.ibb.co/Zx3hcyF/people-celebrating-new-year-illustration-1284-11628.jpg')]">
        <div className="text-center text-white">
          <h1 className="font-bold text-xl">Tell us about yourself</h1>
          <p>Let's get started. Please provide your information.</p>
        </div>

        <form onSubmit={handleRegistar} className="mt-8 space-y-5">
          <div className="space-y-1 text-sm">
            <label className="block text-white">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              className="w-full px-4 py-3 rounded-md border-2"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-white">Photo Url</label>
            <input
              type="url"
              name="photo"
              id="photo"
              placeholder="www.image.com"
              className="w-full px-4 py-3 rounded-md border-2"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-white">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-md border-2"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block text-white">Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              required
              placeholder="peovied a strong password"
              className="w-full px-4 py-3  rounded-md border-2"
            />
            <span className="flex justify-end" onClick={() => setShowPass(!showPass)}>
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-xl dark:text-gray-900 dark:bg-violet-400"
          >
            Sign in
          </button>
        </form>

        {/* {succes && <p className="font-bold text-green-500">{succes}</p>} */}

        {/* {err && <p className="text-red-700 font-bold">{err}</p>} */}

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm text-white">Join your social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div>
          <Sociallogin />
        </div>
        <div className="mt-5 text-white">
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
