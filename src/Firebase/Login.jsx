/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sociallogin from "./Sociallogin";
import { useContext, useState } from "react";
import { AuthContext } from "../Components/Authprovider/Authprovider";
import toast, { Toaster } from "react-hot-toast";

// const notify = () => toast.success('Successfully Login!')

const Login = () => {
  const { userLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [loginErr, setLoginErr] = useState("");
  const [succes, setSucces] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoginErr("");
    setSucces("");
    userLogin(email, password)
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully Login!");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="mx-auto w-full p-5 rounded-tl-3xl rounded-br-3xl text-white mt-10 bg-[url('https://i.ibb.co/8mqYFFk/details.jpg')]">
          <div className="text-center mt-8 ">
            <h1 className="font-bold text-xl">Tell us about yourself</h1>
            <p>Let's get started. Please provide your information.</p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div className="space-y-1 text-sm">
              <label className="block font-bold">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="example@gmail.com"
                className="w-full px-4 py-3 text-black rounded-md border-2"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block font-bold">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="peovied strong password"
                className="w-full px-4 py-3 text-black rounded-md border-2"
              />
            </div>

            <button
              // onClick={notify}
              type="submit"
              className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
            >
              Login
            </button>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm ">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div>
            <Sociallogin />
          </div>
          <div className="mt-5">
            <p className="text-xs text-center font-bold sm:px-6">
              Don't have an account?
              <Link to="/register">
                <span
                  rel="noopener noreferrer"
                  href="#"
                  className="underlin hover:cursor-pointer text-orange-400 ml-1"
                >
                  Create an Account
                </span>
              </Link>
            </p>
          </div>
        </div>

        {/* right section */}
        <div className="p-8 mt-32">
          <h1 className="font-bold text-3xl text-red-500">W E L C O M E T O E V E T L A B</h1>
          <p className="font-semibold mt-5">
            "Welcome to our premier entertainment event management website! Discover a world of
            excitement, where we curate unforgettable experiences. Whether you're planning a
            concert, festival, or corporate event, we've got you covered. Explore our services,
            connect with top-notch talent, and let's make your event dreams a reality."
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
