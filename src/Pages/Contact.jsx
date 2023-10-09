import { Link } from "react-router-dom";
import { GrMapLocation } from "react-icons/gr";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import Healmet from "../Components/Healmet/Healmet";

const Contact = () => {
    return (
        <>
        <Healmet title="Contact us" />
            <div className="text-center relative text-white mt-8 rounded-md h-[35vh] bg-[url('https://i.ibb.co/8mqYFFk/details.jpg')]">
               <div className="absolute mt-20 md:ml-44">
               <h1 className="text-6xl font-bold ">Contact Us</h1>
                <div className="flex items-center mt-5 gap-2 font-bold justify-center">
                    <Link to="/"><button className="text-red-500">Home</button></Link> / 
                    <h1>Get in Touch</h1>
                </div>
               </div>
            </div>

            <h1 className="font-bold mt-32 text-center text-2xl">Contact us if you need our services. We will be happy to make your events memorable!</h1>
            {/* <div className="border w-9/12 mx-auto mt-1"></div> */}

            <div>
                {/* Address */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-white">
                    <div className="bg-green-500 rounded-tl-xl p-10 rounded-br-xl">
                        <div className="text-5xl flex justify-end">
                        <GrMapLocation />
                        </div>
                        <p className="font-bold mt-5">Address</p>
                        <p className="text-xl font-bold">38-2 Hilton Street, California</p>
                    </div>
               
                {/* Phone */}
                <div className="bg-blue-500 rounded-tl-xl p-10 rounded-br-xl">
                <div className="text-5xl flex justify-end">
                        <BsTelephoneInbound />
                        </div>
                        <p className="font-bold mt-5">Phone</p>
                        <p className="text-xl font-bold">(+01) 123 456 7890</p>
                    </div>
                {/* Email */}
                <div className="bg-gray-700 rounded-tl-xl p-10 rounded-br-xl">
                <div className="text-5xl flex justify-end">
                        <HiOutlineMailOpen />
                        </div>
                        <p className="font-bold mt-5">Email</p>
                        <p className="text-xl font-bold">inform@dvents.com</p>
                    </div>
                    </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/*  MESSAGE FORM */}
                <div className="mt-20">
                    <div className="flex items-center gap-5">
                        <AiOutlineMinus className="text-red-500 font-bold text-7xl " />
                    <h2 className="font-bold text-4xl text-gray-500"> MESSAGE FORM</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="space-y-8">
                            <input className="border p-2 rounded-md w-full"  type="text" placeholder="Your Name" />
                            <input  className="border p-2 rounded-md w-full" type="tel" name="" id="" placeholder="Your Tel" />
                        </div>
                        <div className="space-y-8">
                            <input  className="border p-2 rounded-md w-full" type="email" name="" placeholder="Your Email" id="" />
                            <input  className="border p-2 rounded-md w-full" type="tel" name="" id="" placeholder="Where do you heardus?" />
                        </div>
                    </div>
                    <textarea  className="border mt-8 mb-8 p-2 rounded-md w-full" name="" placeholder="Your message..." id="" cols="30" rows="5"></textarea>
                    <label>10+10-20+20=</label>
                    <input  className="border p-2 mt-2 rounded-md w-full" type="number" name="" id="" placeholder="?" />
                    <button className="btn font-bold w-full bg-red-500 mt-20 text-white hover:animate-bounce">send comment</button>
                </div>
                {/* map */}
                <div className="bg-[url('https://i.ibb.co/pL4J94F/maps.png')] mt-20 rounded-xl">

                </div>
            </div>
        </>
    );
};

export default Contact;