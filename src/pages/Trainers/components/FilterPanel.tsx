import { IoCheckmark } from "react-icons/io5";

const FilterPanel = () => {
  return (
    <div className="w-full max-w-[450px] min-h-[800px] bg-[#111111]">
      {/* header */}
      <div className="flex justify-between items-center px-6 py-5 border-b-[2px] border-[#0099ff]">
        <div className="flex-1"></div>
        <h2 className="text-xl font-bold text-white flex-1 text-center">Filters</h2>
        <div className="flex-1 text-right">
          <button className="text-[#FE4E4E] text-[16px] font-medium hover:text-red-400 transition-colors">Close</button>
        </div>
      </div>

      {/* Duration Field */}
      <div className="border-b-[2px] border-[#0099ff] px-6 py-6">
        <h5 className="text-white text-lg mb-4">Duration</h5>
        <div className="border border-[#3A3A3C] rounded-lg overflow-hidden flex flex-col">
          <div className="flex justify-between items-center bg-[#FE4E4E] text-white px-4 py-3 cursor-pointer">
            <span className="text-[15px]">Any</span>
            <span className="flex items-center gap-1 text-[15px]">Any <IoCheckmark className="text-xl" /></span>
          </div>
          <div className="text-gray-200 px-4 py-3 border-t border-[#3A3A3C] cursor-pointer hover:bg-white/5 transition text-[15px]">10-20 min</div>
          <div className="text-gray-200 px-4 py-3 border-t border-[#3A3A3C] cursor-pointer hover:bg-white/5 transition text-[15px]">20-30 min</div>
          <div className="text-gray-200 px-4 py-3 border-t border-[#3A3A3C] cursor-pointer hover:bg-white/5 transition text-[15px]">30-45 min</div>
          <div className="text-gray-200 px-4 py-3 border-t border-[#3A3A3C] cursor-pointer hover:bg-white/5 transition text-[15px]">45+ min</div>
        </div>
      </div>

      {/* Type Field */}
      <div className="px-6 py-6">
        <h5 className="text-white text-lg mb-4">Type</h5>
        <div className="flex gap-4 mb-10 pb-2 flex-wrap">
          <button className="border border-[#3A3A3C] text-gray-200 px-6 py-2 text-[15px] hover:bg-white/5 transition">HIIT</button>
          <button className="border border-[#3A3A3C] text-gray-200 px-6 py-2 text-[15px] hover:bg-white/5 transition">Strength</button>
          <button className="border border-[#3A3A3C] text-gray-200 px-6 py-2 text-[15px] hover:bg-white/5 transition">Cardio</button>
          <button className="border border-[#3A3A3C] text-gray-200 px-6 py-2 text-[15px] hover:bg-white/5 transition">Nutrition</button>
        </div>
        
        <button className="w-full bg-[#FE4E4E] hover:bg-[#e04a4a] transition-colors text-white font-medium py-3.5 rounded-lg text-lg">
          Show Results
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
