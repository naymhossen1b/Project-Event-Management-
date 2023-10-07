import Eventcard from "../Components/EventCard/Eventcard";
import Banner from "../Components/Header/Banner";
import Header from "../Components/Header/Header";
import Analycis from "./HPage/Analycis";
import Welcome from "./HPage/Welcome";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <Welcome />
       <div className="space-y-2">
       <h1 className="text-4xl font-bold text-center mt-36 ">OUR POPULAR EVENT</h1>
        <div className="border border-black w-5/12 mx-auto"></div>
       </div>
        <p className="text-center font-medium mb-10">We make your events smart & impactful by personalised event management services</p>
        
        <Eventcard />
        <Analycis />
      </div>
    </>
  );
};

export default Home;
