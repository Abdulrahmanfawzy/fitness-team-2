import { IoSearchOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { LuArrowUpDown } from "react-icons/lu";

function TrainersSearch() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* search & filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 w-full">
        {/* Search Input */}
        <div className="flex-1 flex items-center bg-[#1A1A1C] border border-[#3A3A3C] rounded-xl px-4 h-[54px] w-full">
          <IoSearchOutline className="text-gray-400 text-xl mr-3 min-w-[20px]" />
          <input
            type="text"
            placeholder="Search by name or specialty"
            className="bg-transparent border-none outline-none text-white w-full placeholder-gray-400 text-[16px]"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex justify-center items-center gap-2 bg-[#2C2C2E] hover:bg-[#3A3A3C] transition-all duration-200 border border-[#444] rounded-xl px-7 h-[54px] text-white text-[16px] font-medium">
            <CiFilter className="text-xl" />
            Filter
          </button>
          <button className="flex-1 md:flex-none flex justify-center items-center gap-2 bg-[#2C2C2E] hover:bg-[#3A3A3C] transition-all duration-200 border border-[#444] rounded-xl px-7 h-[54px] text-white text-[16px] font-medium">
            Sort
            <LuArrowUpDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainersSearch;
