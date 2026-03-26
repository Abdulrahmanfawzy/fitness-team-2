import TrainerCard from "@/components/common/TrainerCard";
import { Link } from "react-router-dom";

function TrainersSection() {
  return (
    <div className=" my-24   w-[95%] md:w-[85%] mx-auto px-5  ">
      <div className=" flex items-end gap-2 justify-between">
        <div>
          <p className=" p-1 rounded-xl text-orange border-orange border w-fit font-bold bg-orange-800/25  mb-2">
            Our Trainers
          </p>

          <h2 className=" text-white text-4xl md:text-5xl font-extrabold ">
            Meet the <span className=" text-orange mt-2"> Experts</span>
          </h2>
        </div>

        <div className=" flex flex-col md:flex-row items-center gap-3">
          <div className="flex  items-center gap-2  ">
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
          </div>

          <Link
            className=" w-32 flex items-center justify-center rounded-md border-orange border text-orange text-sm h-9 "
            to={"/trainers"}
          >
            View All
          </Link>
        </div>
      </div>

      <div className=" mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        <TrainerCard />
        <TrainerCard />
        <TrainerCard />
      </div>
    </div>
  );
}

export default TrainersSection;
