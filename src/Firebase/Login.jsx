/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Sociallogin from "./Sociallogin";
import { useContext } from "react";
import { AuthContext } from "../Components/Authprovider/Authprovider";
import toast, {  } from 'react-hot-toast';


const Login = () => {
    const {userLogin} = useContext(AuthContext);
    // const [loginErr, setLoginErr] = useState("");
    // const [succes, setSucces] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // setLoginErr('');
        // setSucces('');
        userLogin(email, password)
        .then( res => {
            console.log(res);
            toast.success('Registered Successfully');
            // setSucces('Successfully');

            
        })
        .catch(error => {
            console.log(error);
            // setLoginErr();
            toast.error(error.message);
        })


    }

  return (
    <div>
      <div>
        <div className="md:w-6/12 mx-auto p-5 rounded-xl bg-gray-300 pt-20">
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
                className="w-full px-4 py-3 rounded-md border-2"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block font-bold">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="peovied strong password"
                className="w-full px-4 py-3 rounded-md border-2"
              />
            </div>

          <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Login</button>
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
                <span rel="noopener noreferrer" href="#" className="underlin hover:cursor-pointer text-orange-400 ml-1">
                  Create an Account
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;