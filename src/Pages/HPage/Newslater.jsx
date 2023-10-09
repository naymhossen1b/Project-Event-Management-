const Newslater = () => {
  return (
    <div>
      <div className="bg-orange-50 mt-44 p-20 rounded-t-2xl"
       data-aos="flip-up"
       data-aos-offset="200"
       data-aos-delay="50"
       data-aos-duration="1000"
       data-aos-mirror="true"
       data-aos-once="false"
       data-aos-anchor-placement="top-center"
      >
      <h2 className=" font-bold text-5xl text-center">Studio</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 ">

        <div
          className="hero h-64 rounded-xl"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/Mg1YScb/1v1b15n576vb.jpg)",
          }}
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className="hero-overlay  bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="animate-pulse text-3xl font-bold">The Runner</h1>
            </div>
          </div>
        </div>
        <div
          className="hero h-64"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/S5QQbBt/slide-2-1160x695.jpg)",
          }}
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className="hero-overlay  bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="animate-pulse text-3xl font-bold">Labour of Love</h1>
            </div>
          </div>
        </div>
        <div
          className="hero h-64"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/m9jPc23/23v42546.jpg)",
          }}
          data-aos="zoom-out"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className="hero-overlaybg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="animate-pulse text-3xl font-bold">Mary Stuart</h1>
            </div>
          </div>
        </div>
        <div
          className="hero h-64"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/LZmw1rY/67s868737sdf-t.jpg)",
          }}
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className="hero-overlay rounded-xl bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="animate-pulse text-3xl font-bold">Lonely Planet</h1>
            </div>
          </div>
        </div>
      </div>
      {/* subcription card */}
      <div className="bg-black grid grid-cols-1 md:grid-cols-2 py-12"
       data-aos="flip-down"
       data-aos-offset="200"
       data-aos-delay="50"
       data-aos-duration="1000"
       data-aos-mirror="true"
       data-aos-once="false"
       data-aos-anchor-placement="top-center"
      >
        <div className="text-center font-medium  text-white"
        >
            <h1 className="text-center text-white font-bold text-2xl">Subscribe to our newsletter to stay informed</h1>
            <p className="text-gray-300">Perspiciatis unde omnis iste natus error sit voluptatem</p>
        </div>
        <div className="flex items-center justify-center mt-5 md:mt-0">
            <input className="md:px-8 py-3 border-none" type="email" name="" id="" placeholder="Enter your mail@com" />
            <button className="btn bg-orange-300 border-none rounded-none px-5">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newslater;
