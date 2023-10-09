import Eventcard from "../Components/EventCard/Eventcard";
import Banner from "../Components/Header/Banner";
import Healmet from "../Components/Healmet/Healmet";
import Analycis from "./HPage/Analycis";
import Newslater from "./HPage/Newslater";
import Welcome from "./HPage/Welcome";

const Home = () => {
  return (
    <>
      <div>
        <Healmet title="Home" ></Healmet>
        <Banner />
        <Welcome />
        <div
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-center mt-36 ">OUR POPULAR EVENT</h1>
          <div className="border border-black w-5/12 mx-auto"></div>
        </div>
        <p className="text-center font-medium mb-10">
          We make your events smart & impactful by personalised event management services
        </p>
        </div>

        <Eventcard />
        <Analycis />
        <Newslater />
      </div>
    </>
  );
};

export default Home;
