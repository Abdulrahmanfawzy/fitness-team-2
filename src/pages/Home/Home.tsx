import gymbackground from "../../../public/gymbackground.png";
import { Link } from "react-router-dom";
import StarIcone from "./aseta/starIcone.png";
import "../../index.css";
import { SearchIcon } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { CalendarIcon } from "lucide-react";
import TrainerCard from "@/components/common/TrainerCard";

function Home() {
  
  
  
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${gymbackground})` }}
        className="relative overflow-hidden h-[90vh] flex items-center justify-center bg-center bg-cover before:absolute before:inset-0 before:bg-black/70"
      >
        <div className=" z-50 flex flex-col gap-3 w-[95%] md:w-[60%] lg:w-[45%] ">
          <p className=" p-1 rounded-xl text-orange border-orange border w-fit font-bold bg-orange-800/25  mb-2">
            +50 Certified Elite Trainers
          </p>
          <p className=" text-5xl font-extrabold">Train Smarter, </p>
          <p className=" text-orange text-5xl font-extrabold">
            Perform Better.
          </p>
          <p className=" text-gray-400 text-sm font-medium">
            Book elite personal training sessions with certified professionals.
            Science-backed programs tailored to your goals — starting in
            minutes.
          </p>
          <div className=" flex gap-10 mt-3">
            <Link
              className=" w-44 flex items-center justify-center rounded-md bg-orange h-10 "
              to={"/packages"}
            >
              Book Now
            </Link>
            <Link
              className=" w-44 flex items-center justify-center rounded-md border-[1px] border-gray-200 h-10 "
              to={"/trainers"}
            >
              Meet Our Trainers
            </Link>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-4 mt-4 ">
            <div>
              <p className=" text-xl font-bold">+50</p>
              <p className=" text-gray-400 text-sm font-medium">
                Active Trainers
              </p>
            </div>

            <div>
              <p className=" text-xl font-bold">+2400</p>
              <p className=" text-gray-400 text-sm font-medium">
                Happy Clients
              </p>
            </div>
            <div>
              <p className=" text-xl font-bold">+18,000</p>
              <p className=" text-gray-400 text-sm font-medium">
                Sessions Completed
              </p>
            </div>
            <div>
              <p className=" text-xl font-bold flex items-center gap-1">
                <img src={StarIcone} alt="" /> 4.9
              </p>
              <p className=" text-gray-400 text-sm font-medium">Avg. Rating</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" shadow h-[0.5px]"></div>
      <div className="container mx-auto px-5 flex flex-col gap-3 items-center my-9 pt-5">
        <p className=" p-1 rounded-xl text-orange border-orange border w-fit font-bold bg-orange-800/25  mb-2">
          How It works
        </p>
        <p className=" text-4xl font-bold">hree Steps to Your Best Self</p>
        <p className=" text-gray-400 text-sm font-medium max-w-lg text-center">
          We've made the booking process frictionless so you can focus on what
          matters — your training.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-7 my-3 ">
          <div className="w-full  bg-input flex flex-col items-center align-middle p-4 gap-2 rounded-md">
            <SearchIcon
              size={50}
              className=" p-2 rounded-md text-orange border-orange border w-fit font-bold bg-orange-800/25 "
            />
            <p className=" text-xl font-bold ">Discover </p>
            <p className=" text-gray-400 text-sm font-medium max-w-lg text-center">
              Browse our curated roster of certified trainers. Filter by
              specialty, availability, and price to find your perfect match.
            </p>
          </div>
          <div className="w-full  bg-input flex flex-col items-center align-middle p-4 gap-2 rounded-md">
            <MapPinIcon
              size={50}
              className=" p-2 rounded-md text-orange border-orange border w-fit font-bold bg-orange-800/25 "
            />
            <p className=" text-xl font-bold ">Choose Mode </p>
            <p className=" text-gray-400 text-sm font-medium max-w-lg text-center">
              Select from in-person, virtual, or hybrid training sessions. Pick
              the package that fits your goals and budget.
            </p>
          </div>
          <div className="w-full  bg-input flex flex-col items-center align-middle p-4 gap-2 rounded-md">
            <CalendarIcon
              size={50}
              className=" p-2 rounded-md text-orange border-orange border w-fit font-bold bg-orange-800/25 "
            />
            <p className=" text-xl font-bold ">Book & Train </p>
            <p className=" text-gray-400 text-sm font-medium max-w-lg text-center">
              Lock in your preferred time slot instantly. Receive confirmation
              and start your transformation journey.
            </p>
          </div>
        </div>
      </div>
      <div className=" my-24 container mx-auto px-5 ">
        <p className=" p-1 rounded-xl text-orange border-orange border w-fit font-bold bg-orange-800/25  mb-2">
          Our Trainers
        </p>
        <div className=" flex items-center justify-between">
          <h2 className=" text-white text-5xl font-extrabold ">
            Meet the <span className=" text-orange mt-2"> Experts</span>
          </h2>
          <div className=" flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" flex items-center w-7 h-7 cursor-pointer border border-white rounded-sm"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" flex items-center w-7 h-7 cursor-pointer border border-white rounded-sm"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>

            <Link
              className=" w-32 flex items-center justify-center rounded-md border-orange border text-orange text-sm h-9 "
              to={"/trainers"}
            >
              View All
            </Link>
          </div>
        </div>
        <div className=" mt-9 grid grid-cols-1 md:grid-cols-3 gap-1 ">
          <TrainerCard />
          <TrainerCard />
          <TrainerCard />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
