import { IoCheckmark } from "react-icons/io5";
import { useState } from "react";

interface SortPanelProps {
  onClose: () => void;
}

const SortPanel = ({ onClose }: SortPanelProps) => {
  const [activeSort, setActiveSort] = useState("Most Popular");
  const sortOptions = ["Most Popular", "Newest", "Difficulty", "Duration"];

  return (
    <div className="w-full max-w-[450px] min-h-[500px] bg-[#111111] absolute top-full mt-4 right-0 z-50 rounded-xl border border-[#3A3A3C] shadow-2xl flex flex-col">
      {/* header */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-[#3A3A3C]">
        <div className="flex-1"></div>
        <h2 className="text-xl font-medium text-white flex-1 text-center">
          Sort
        </h2>
        <div className="flex-1 text-right">
          <button
            onClick={onClose}
            className="text-[#FE4E4E] text-[15px] font-medium hover:text-red-400 transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      {/* Options */}
      <div className="px-6 py-4 flex-1">
        <div className="flex flex-col">
          {sortOptions.map((option) => (
            <div
              key={option}
              onClick={() => setActiveSort(option)}
              className={`flex justify-between items-center py-4 border-b border-[#3A3A3C] cursor-pointer transition-colors ${
                activeSort === option
                  ? "text-[#FE4E4E]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="text-[16px]">{option}</span>
              {activeSort === option && <IoCheckmark className="text-xl" />}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-6">
        <button className="w-full bg-[#FE4E4E] hover:bg-[#e04a4a] transition-colors text-white font-medium py-3.5 rounded-lg text-lg">
          Show Results
        </button>
      </div>
    </div>
  );
};

export default SortPanel;
