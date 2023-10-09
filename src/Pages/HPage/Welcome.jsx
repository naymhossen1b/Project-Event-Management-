/* eslint-disable react/no-unescaped-entities */
import { MdArrowRightAlt } from "react-icons/md";

const Welcome = () => {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6 mt-20">
            <div className="md:col-span-2 col-span-6">
                <img className="w-full h-[65vh] rounded-md" src="https://i.ibb.co/SxVxVqB/aw-harboureventcentre28391.jpg" alt="" />
            </div>
            <div className="md:col-span-4  col-span-6 space-y-5">
                <h1 className="font-bold text-gray-500 text-xl md:text-5xl">Welcome to <span className="text-red-400 animate-pulse">EventLab</span></h1>
                <p className="font-bold">Making your events smarter & impactful by personalised event management.</p>
                <p>We are thrilled to invite you to explore our dynamic and immersive entertainment event website, your gateway to a world of excitement, culture, and unforgettable moments. Whether you're a die-hard music enthusiast, a dedicated cinephile, a theater aficionado, or simply someone looking for a fantastic night out, our platform is your go-to destination for all things entertainment.</p>

                <p>In conclusion, we invite you to embark on a journey through our website and explore the vast world of entertainment that awaits. Whether you're a seasoned connoisseur or just looking for a fun night out, we're here to make your entertainment dreams a reality. So, what are you waiting for? Dive in, discover, and get ready to be entertained like never before! Thank you for choosing us as your ultimate entertainment destination.</p>

                <button className="btn hover:bg-red-500 p-2">Read More <MdArrowRightAlt /> </button>
            </div>
        </div>
    );
};

export default Welcome;