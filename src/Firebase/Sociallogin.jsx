import { useContext } from "react";
import { AuthContext } from "../Components/Authprovider/Authprovider";
import { GrGithub, GrGoogle } from "react-icons/gr";

const Sociallogin = () => {

    const {googleLogin} = useContext(AuthContext);

    const handleSocialLogin = (media) => {
        media()
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className="flex gap-3 justify-center items-center mt-5">
            <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline">
            <GrGoogle /> Login With Google
          </button>
            <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline">
            <GrGithub /> Login With Github
          </button>
        </div>
        </div>
    );
};

export default Sociallogin;