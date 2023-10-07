import Eventcard from "../Components/EventCard/Eventcard";
import Banner from "../Components/Header/Banner";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <h1 className="text-4xl font-bold text-center mb-10 mt-8">POPULAR EVENT</h1>
        <Eventcard />
      </div>
    </>
  );
};

export default Home;
