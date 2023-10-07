import { GiPublicSpeaker } from "react-icons/gi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";


const Analycis = () => {
    return (
        <div>
            <div className="bg-gray-500 mt-32 text-white grid md:flex p-5 rounded-xl justify-evenly items-center text-center">
                {/* first */}
                <div className="space-y-3">
                    <GiPublicSpeaker className="text-7xl font-bold text-red-400" />
                <div className="stat-value">2K+</div>
                    <p className="font-bold">Best Speaker</p>
                </div>
                {/* second */}
                <div className="space-y-3">
                    <MdOutlineEventAvailable className="text-7xl font-bold text-red-400" />
                <div className="stat-value">20K+</div>
                <p className="font-bold">Ideal Event</p>
                </div>
                {/* 3rd */}
                <div className="space-y-3">
                    <GrSchedule className="text-7xl font-bold text-red-400" />
                <div className="stat-value">1K+</div>
                    <p className="font-bold">New Schedule</p>
                </div>
                {/* 4th */}
                <div className="space-y-3">
                    <IoIosPeople className="text-7xl font-bold text-red-400"></IoIosPeople>
                <div className="stat-value">200K+</div>
                    <p className="font-bold">Participants</p>
                </div>

            </div>
        </div>
    );
};

export default Analycis;