const Cards = ({ card }) => {
  const { image, category, relevant_name, price, short_description } = card || {};

  return (
    <div>
        <div className=" bg-gray-400 rounded-xl">
        <img className="w-full h-52 rounded-t-xl" src={image} alt="" />

        <div className="p-5 space-y-3 h-52">
        <h1 className="text-xl font-bold">{relevant_name}</h1>
        <p>{short_description}</p>
        <div className="flex items-center gap-8">
            <h1>{category}</h1>
            <p>{price}</p>
        </div>
      <button className="btn btn-primary w-full flex-grow">Details</button>
        </div>
        </div>
    </div>
  );
};

export default Cards;
