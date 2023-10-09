/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div>
      <div
        className="hero mt-5 lg:h-[70vh] rounded-md"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/yR1Jgkn/beautiful-shot-live-concert-performance-with-yellow-light-show-big-crowd-cheering.jpg)",
        }}
      >
        <div className="hero-overlay rounded-md bg-opacity-60"></div>
        <div className="hero-content  text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"
            >
              "Elevate Your Events - Exclusive Offers Inside!"
            </h1>
            <p className="mb-5">
              "Discover Unforgettable Events! Explore our exclusive event management services for a
              truly special experience. From weddings to corporate gatherings, we create magic. Book
              now for a limited-time offer!"
            </p>
            <button className="btn bg-red-500 border-none text-white">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
