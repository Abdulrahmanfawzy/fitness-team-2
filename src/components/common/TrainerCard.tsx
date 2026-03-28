import { FaStar, FaArrowRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import type { Trainer } from "@/types/trainer";
import imageTrainer from "../../../public/c4925f322ee533b6cd71573448267f2829ac0fda (4).png";

type TrainerCardProps = {
  trainer?: Trainer;
};

function TrainerCard({ trainer }: TrainerCardProps) {
  const name = trainer?.user?.name ?? "Ahmed Hassan";
  const imageUrl = trainer?.user?.profile_image ?? imageTrainer;
  const rating = trainer?.rating ?? "4.9";
  const totalReviews = trainer?.total_reviews ?? 0;
  const experienceYears = trainer?.experience_years ?? 0;
  const location = trainer?.location ?? "Nasr City, Cairo";
  const bio = trainer?.bio ?? "";
  const trainerId = trainer?.id;

  return (
    <div className="rounded-2xl overflow-hidden bg-[#2C2C2E] text-white shadow-lg mx-auto font-sans w-full flex flex-col">
      {/* Image */}
      <div className="relative">
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-red-900/40 backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-red-500/20">
          <FaStar className="text-[#FF4D4F] text-[13px]" />
          <span className="text-white font-medium text-sm">{rating}</span>
        </div>

        {/* Experience Badge */}
        {experienceYears > 0 && (
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-white/10">
            <MdOutlineWorkHistory className="text-orange text-[14px]" />
            <span className="text-white font-medium text-sm">{experienceYears} yrs</span>
          </div>
        )}

        <img
          src={imageUrl}
          alt={name}
          className="h-[250px] w-full object-cover object-top"
          onError={(e) => {
            (e.target as HTMLImageElement).src = imageTrainer;
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-[#2D2D2D] flex flex-col flex-1">
        {/* Name & Reviews */}
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-bold text-xl text-white tracking-wide leading-tight">{name}</h4>
          {totalReviews > 0 && (
            <div className="flex items-center gap-1 text-gray-400 text-sm shrink-0 ml-2">
              <BiCommentDetail className="text-orange" />
              <span>{totalReviews} reviews</span>
            </div>
          )}
        </div>

        {/* Bio */}
        {bio && (
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {bio}
          </p>
        )}

        {/* Location */}
        <div className="flex items-center gap-2 mb-4 text-gray-300">
          <IoLocationOutline className="text-orange text-[20px] shrink-0" />
          <p className="text-[15px]">{location}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-4" />

        {/* Stats Row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1.5">
            <FaStar className="text-[#FF4D4F] text-[13px]" />
            <span className="text-white font-semibold text-sm">{rating}</span>
            <span className="text-gray-500 text-xs">/ 5.0</span>
          </div>
          {experienceYears > 0 && (
            <div className="flex items-center gap-1.5">
              <MdOutlineWorkHistory className="text-orange text-[15px]" />
              <span className="text-gray-300 text-sm">{experienceYears} years exp.</span>
            </div>
          )}
          {totalReviews > 0 && (
            <div className="flex items-center gap-1.5">
              <BiCommentDetail className="text-orange text-[14px]" />
              <span className="text-gray-300 text-sm">{totalReviews}</span>
            </div>
          )}
        </div>

        {/* Button */}
        <div className="mt-auto">
          {trainerId ? (
            <Link
              to={`/trainers/${trainerId}`}
              className="w-full bg-orange hover:bg-[#e04345] transition-colors text-white font-bold py-3.5 rounded-xl flex justify-center items-center gap-2 text-[15px]"
            >
              View Profile <FaArrowRight />
            </Link>
          ) : (
            <button className="w-full bg-orange hover:bg-[#e04345] transition-colors text-white font-bold py-3.5 rounded-xl flex justify-center items-center gap-2 text-[15px]">
              View Profile <FaArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrainerCard;
