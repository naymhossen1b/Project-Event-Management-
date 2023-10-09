/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div
      data-aos="flip-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <section className="dark:bg-gray-600  grid grid-cols-1 md:grid-cols-2 mt-5 rounded-md dark:text-gray-100">
        <div className="w-11/12 mx-auto mt-10">
          <img className="hover:animate-pulse" src="https://i.ibb.co/b3pWMX5/banner-image-prog-details.png" alt="" />
        </div>
        <div className="md:text-right text-center md:w-11/12 md:mx-auto mt-14">
          <h1 className="mb-5 text-5xl font-bold">
            "Elevate Your <span className="text-red-500">Events</span> - Exclusive <span className="text-red-500">Offers Inside</span>!"
          </h1>
          <p className="mb-5">
            "Discover Unforgettable Events! Explore our exclusive event management services for a
            truly special experience. From weddings to corporate gatherings, we create magic. Book
            now for a limited-time offer!"
          </p>
          <button className="btn mb-8 bg-red-500 border-none text-white">Book Now</button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
