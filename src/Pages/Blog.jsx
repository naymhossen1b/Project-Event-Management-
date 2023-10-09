import { Link } from "react-router-dom";
import { CgMusicSpeaker } from "react-icons/cg";
import { GiTheater } from "react-icons/gi";
import { FcFilmReel } from "react-icons/fc";
import { BiSolidCameraMovie } from "react-icons/bi";
import { MdOutlineTheaterComedy, MdSportsSoccer } from "react-icons/md";
import Healmet from "../Components/Healmet/Healmet";

const Blog = () => {
  return (
    <div>
      <Healmet title="Services" />
      <div className="text-center relative text-white mt-8 rounded-md h-[25vh] md:h-[50vh] lg:h-[35vh] bg-[url('https://i.ibb.co/8mqYFFk/details.jpg')]">
        <div className="absolute md:mt-20 mt-10 ml-8 md:ml-44">
          <h1 className="md:text-6xl text-2xl font-bold ">What We Do</h1>
          <div className="flex items-center md:mt-5 gap-2 font-bold justify-center">
            <Link to="/">
              <button className="text-red-500">Home</button>
            </Link>
            /<h1>Get in Services</h1>
          </div>
        </div>
      </div>
      {/* text */}
      <div className="mt-36 text-center">
        <h1 className="text-5xl font-bold text-gray-400 ">
          The <span className="text-red-500">Event Management</span> Specialists
        </h1>
        <p className="mt-8">
          Event Management Specialists are professionals adept at coordinating and executing
          flawless events. They handle all aspects, from planning and logistics to budgeting and
          vendor management.
        </p>
      </div>
      {/* servises */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-semibold mt-44">
          {/* 1 */}
          <div className=" p-1">
            <div className="flex items-center gap-3 mb-8">
              <CgMusicSpeaker className="text-5xl text-red-500" />
              <h1 className="text-2xl text-gray-500 font-bold">Music Festivals</h1>
            </div>
            <p>
              Music Festival Event Managers oversee the planning, execution, and logistics of music
              festivals. They handle artist bookings, venue arrangements, ticketing, security, and
              production coordination. With a keen eye for detail and a passion for music, they
              ensure unforgettable festival experiences for attendees while managing budgets and
              adhering to timelines.
            </p>
          </div>
          {/* 2 */}
          <div className=" p-1">
            <div className="flex items-center gap-3 mb-8">
              <GiTheater className="text-5xl text-red-500" />
              <h1 className="text-2xl text-gray-500 font-bold">Theater</h1>
            </div>
            <p>
              Theater and Performing Arts Event Managers oversee all aspects of theater productions
              and performing arts events. They coordinate rehearsals, manage technical and
              logistical requirements, and ensure smooth performances. Their expertise in this
              specialized field guarantees successful productions and unforgettable experiences for
              audiences and artists alike.
            </p>
          </div>
          {/* 3 */}
          <div className=" p-1">
            <div className="flex items-center gap-3 mb-8">
              <FcFilmReel className="text-5xl text-red-500" />
              <h1 className="text-2xl text-gray-500 font-bold">Film Screenings</h1>
            </div>
            <p>
              Film Screenings and Premieres Event Managers excel in organizing cinematic events.
              They oversee venue selection, guest lists, and technical aspects to ensure a
              captivating movie experience. Their attention to detail and creative touch guarantees
              successful film premieres and screenings that leave a lasting impact on audiences and
              industry stakeholders.
            </p>
          </div>
          {/* 4 */}
          <div className=" p-1">
            <div className="flex items-center gap-3 mb-8">
              <MdOutlineTheaterComedy className="text-5xl text-red-500" />
              <h1 className="text-2xl  text-gray-500 font-bold">Comedy Shows</h1>
            </div>
            <p>
              Comedy Show Event Management involves planning, organizing, and executing hilarious
              and memorable comedy events. Specialists in this field handle talent booking, venue
              selection, marketing, and logistics to ensure a laughter-filled experience. Their goal
              is to deliver side-splitting entertainment while ensuring a smooth and enjoyable event
              for both comedians and audiences.
            </p>
          </div>
          {/* 5 */}
          <div className=" p-1">
            <div className="flex items-center gap-3 mb-8">
              <MdSportsSoccer className="text-5xl text-red-500" />
              <h1 className="text-2xl text-gray-500 font-bold">Sports Events</h1>
            </div>
            <p>
              Sports Event Managers excel in planning, organizing, and executing sports-related
              events. They oversee logistics, budgeting, scheduling, and ensure a smooth flow during
              games, tournaments, or races. Their passion for sports and adeptness in event
              coordination guarantee successful and engaging sporting experiences for athletes and
              spectators alike.
            </p>
          </div>
          {/* 6 */}
          <div className=" p-1">
            <div className="flex items-center gap-3 mb-8">
              <BiSolidCameraMovie className="text-5xl text-red-500" />
              <h1 className="text-2xl text-gray-500 font-bold">Movie Premiere</h1>
            </div>
            <p>
              Movie Premiere Event Management experts excel in organizing exclusive film debut
              events. They oversee red carpet arrangements, guest list coordination, venue setup,
              and media interactions. Their precision and creativity ensure a glamorous and
              successful movie premiere that captivates the audience and promotes the film
              effectively.
            </p>
          </div>
        </div>
      </div>

      {/* pricing */}

      <div>
        <div className="text-right pt-36 font-medium">
          <h1 className="text-5xl font-bold text-gray-500 mb-3">
            <span className="text-red-500">EventLab</span> Pricing Plans
          </h1>
          <p>We make your events smart & impactful by personalised event management services.</p>
        </div>
        {/* price card */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-24">

            {/* standard */}
            <div className="bg-green-100 mb-20  rounded-tl-xl rounded-br-xl">
              <div className="avatar w-11/12 mx-auto -mt-10">
                <div className="w-24 mx-auto rounded-full text-center font-medium bg-green-300 ring ring-primary ring-offset-base-100 ring-offset-2">
                <div className="mt-7 text-white ">
                <p>Starts from</p>
                <p>$299</p>
                </div>
                </div>
              </div>
              {/* quality */}
              <div className="text-center font-bold space-y-5 mt-10 text-gray-400">
                <h1>STANDARD</h1>
                <p>Ideal for Proposals, Birthdays</p>
              </div>
              <div className="border border-black w-7/12 mx-auto mt-10"></div>
              {/* providing */}
              <div className="text-center mt-10 mb-8 font-medium space-y-5">
              <p>2 Days Event</p>
              <p>Full Services Consultation</p>
              <p>Breakfast & Lunch for Everyone</p>
              <p>FREE Gifts for Kids</p>
              <div className="btn mt-20 animate-pulse hover:text-white hover:bg-red-500">order now</div>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="bg-red-100 mb-20  rounded-tl-xl rounded-br-xl">
              <div className="avatar w-11/12 mx-auto -mt-10">
                <div className="w-24 mx-auto rounded-full text-center font-medium bg-red-400 ring ring-primary ring-offset-base-100 ring-offset-2">
                <div className="mt-7 text-white ">
                <p>Starts from</p>
                <p>$999</p>
                </div>
                </div>
              </div>
              {/* quality */}
              <div className="text-center font-bold space-y-5 mt-10 text-gray-400">
                <h1>PREMIUM</h1>
                <p>Ideal for Proposals, Birthdays</p>
              </div>
              <div className="border border-black w-7/12 mx-auto mt-10"></div>
              {/* providing */}
              <div className="text-center mt-10 mb-8 font-medium space-y-5">
              <p>2 Days Event</p>
              <p>Full Services Consultation</p>
              <p>Breakfast & Lunch for Everyone</p>
              <p>FREE Gifts for Kids</p>
              <div className="btn mt-20 animate-pulse hover:text-white hover:bg-red-500">order now</div>
              </div>
            </div>

            {/* CORPORATE */}
            <div className="bg-violet-100 mb-20  rounded-tl-xl rounded-br-xl">
              <div className="avatar w-11/12 mx-auto -mt-10">
                <div className="w-24 mx-auto rounded-full text-center font-medium bg-violet-400 ring ring-primary ring-offset-base-100 ring-offset-2">
                <div className="mt-7 text-white ">
                <p>Starts from</p>
                <p>$599</p>
                </div>
                </div>
              </div>
              {/* quality */}
              <div className="text-center font-bold space-y-5 mt-10 text-gray-400">
                <h1>CORPORATE</h1>
                <p>Ideal for Proposals, Birthdays</p>
              </div>
              <div className="border border-black w-7/12 mx-auto mt-10"></div>
              {/* providing */}
              <div className="text-center mt-10 mb-8 font-medium space-y-5">
              <p>2 Days Event</p>
              <p>Full Services Consultation</p>
              <p>Breakfast & Lunch for Everyone</p>
              <p>FREE Gifts for Kids</p>
              <div className="btn mt-20 animate-pulse hover:text-white hover:bg-red-500">order now</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
