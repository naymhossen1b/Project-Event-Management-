import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Createdata } from "../Layout/Layout";
import { TbArrowBigRightLines } from "react-icons/tb";
import { ImPower } from "react-icons/im";

const Eventdetails = () => {
  const details = useContext(Createdata);

  const { id } = useParams();
  const idInt = parseInt(id);
  const detail = details.find((detail) => detail.id === idInt);
  //   console.log(detail);
  return (
    <div>
      <div className="mt-5 h-[30vh] rounded-md relative bg-[url('https://i.ibb.co/8mqYFFk/details.jpg')]">
        <div className="absolute mt-20 md:ml-44">
          <h1 className="text-6xl font-bold text-white ">Event Details</h1>
          <div className="flex items-center">
            <Link to="/">
              <button className="btn btn-ghost text-white">Home</button>
            </Link>
            <div className="flex items-center gap-3">
              <TbArrowBigRightLines className="text-red-500" />
              <p className="text-red-500 font-semibold">Event Details</p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <>
        <div className="mt-8">
          <img src={detail.image} alt="" />

          <div className="border-2 mt-5"></div>

          <div className="flex justify-start mt-5 gap-8 items-center ">
            <p className="font-bold text-xl">{detail.category}</p>
            <div className="flex items-center gap-3">
              {" "}
              <ImPower className="text-red-500" /> <p className="font-bold"> Elone Musk</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <p>{detail.rating}</p>
            </div>
          </div>
          <div className="border-2 mt-5"></div>

          {/* down section */}
          <div className="mt-20">
            <div className="text-5xl font-bold mt-8 flex items-center">
              <p className="flex items-center gap-2">
                Event <TbArrowBigRightLines className="text-red-500" />
              </p>
              <p>{detail.relevant_name}</p>
            </div>
            <h1 className="text-3xl font-semibold mt-5">Over View</h1>
            <p className="mt-5">{detail.over_view}</p>
            <p className="mt-5">{detail.long_description}</p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Eventdetails;
