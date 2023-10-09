import { BsFillBookmarkCheckFill } from "react-icons/bs";

const DetailsRight = () => {
    return (
        <div>
            <div>
                <div className="flex gap-3 bg-red-500 text-white rounded-md items-center p-3 font-semibold w-8/12  md:text-3xl">
                    <BsFillBookmarkCheckFill />
                    <h1>Book This Event</h1>
                </div>

                <div className="w-11/12 mx-auto mt-10">
                 <div className="space-y-3">
                    <input type="text" placeholder="Your Full Name" className="w-full p-2 border rounded-md" />
                    <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-md" />
                    <input type="number" placeholder="Phone" className="w-full p-2 border rounded-md"  />
                    <input type="date" name="" id="" placeholder="Event Date" className="w-full p-2 border rounded-md" />
                    <input type="text" name="" id="" placeholder="Your Address" className="w-full p-2 border rounded-md"  />
                 </div>
                </div>
                <div className="w-11/12 mx-auto mt-5"><button className="btn bg-red-500 text-white font-bold w-full">Submit Now</button></div>
            </div>
        </div>
    );
};

export default DetailsRight;