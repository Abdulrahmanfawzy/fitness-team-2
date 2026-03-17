import imageTrainer from "../../../public/c4925f322ee533b6cd71573448267f2829ac0fda (4).png";
import { FaStar, FaArrowRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

function TrainerCard() {
  return (
    <div className="w-[398px] h-[580px] rounded-2xl overflow-hidden bg-[#2C2C2E] text-white shadow-lg mx-auto font-sans">
      {/* image */}
      <div className="relative">
        <div className="absolute top-4 right-4 bg-red-900/40 backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-red-500/20">
          <FaStar className="text-[#FF4D4F] text-[13px]" />
          <span className="text-white font-medium text-sm">4.9</span>
        </div>
        <img
          src={imageTrainer}
          alt="Ahmed Hassan"
          className="h-[250px] w-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-[#2D2D2D">
        {/* name , cost */}
        <div className="flex justify-between items-center mb-5">
          <h4 className="font-bold text-xl text-white tracking-wide">
            Ahmed Hassan
          </h4>
          <p className="font-medium">
            <span className="text-orange font-bold">EGP 300</span>
            <span className="text-gray-400 text-sm"> /session</span>
          </p>
        </div>

        {/* التخصص */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          <span className="bg-[#3A3A3C] text-gray-300 text-[13px] px-4 py-1.5 rounded-full font-medium">
            Weight Loss
          </span>
          <span className="bg-[#3A3A3C] text-gray-300 text-[13px] px-4 py-1.5 rounded-full font-medium">
            Muscle Gain
          </span>
          <span className="bg-[#3A3A3C] text-gray-300 text-[13px] px-4 py-1.5 rounded-full font-medium">
            General Fitness
          </span>
        </div>

        {/* العنوان */}
        <div className="flex items-center gap-2 mb-4 text-gray-300">
          <IoLocationOutline className="text-orange text-xl text-[24px]" />
          <p className="text-[15px]">Nasr City, Cairo</p>
        </div>

        {/* Button */}
        <button className="w-full bg-orange hover:bg-[#e04345] transition-colors text-white font-bold py-3.5 rounded-xl flex justify-center items-center gap-2 text-[15px]">
          View Profile <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default TrainerCard;
