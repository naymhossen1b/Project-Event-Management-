import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Cards = ({ card }) => {
  const { image, category, relevant_name, price, short_description, id } = card || {};

  return (
    <div>
      <div className=" bg-gray-100 rounded-xl shadow-md hover:cursor-pointer hover:animate-pulse">
        <img className="w-full h-52 rounded-t-xl" src={image} alt="" />
        <div className="p-5 space-y-2">
          <h1 className="text-xl font-bold">{relevant_name}</h1>
          <h1 className="font-bold text-gray-600">{category}</h1>
          <p className="text-red-500 font-bold">Tickets from {price}</p>
          <p>{short_description}</p>
          <Link to={`/card/${id}`}><button className="btn bg-slate-300 text-white hover:bg-red-600">Tickets & Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
