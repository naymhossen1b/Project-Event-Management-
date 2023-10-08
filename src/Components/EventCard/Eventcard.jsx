import { useContext } from "react";
import Cards from "./Cards";
import { Createdata } from "../../Components/Layout/Layout";

const Eventcard = () => {
  const data = useContext(Createdata);

  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, 6).map((card) => (
          <Cards key={card.id} card={card}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Eventcard;
