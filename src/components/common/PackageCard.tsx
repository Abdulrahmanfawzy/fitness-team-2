import { CheckCircle2, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PackageCardProps {
  id?: number | string;
  title: string;
  price: string;
  duration: string;
  sessions: string;
  features: string[];
  isRecommended?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ 
  id,
  title, 
  price, 
  duration, 
  sessions, 
  features, 
  isRecommended 
}) => {
  const navigate = useNavigate();
  return (
    <div className={`relative flex flex-col h-full p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
      isRecommended 
        ? "bg-[#1A1A1A] border-orange z-10 scale-102 pt-10" 
        : "bg-[#1A1A1A] border-white/10 hover:border-white/20"
    }`}>
      {isRecommended && (
        <div className="absolute top-0 left-0 right-0 bg-orange text-white text-[10px] sm:text-[11px] font-black py-1.5 rounded-t-2xl uppercase tracking-widest z-20 flex items-center justify-center gap-1.5">
          <Zap size={10} className="fill-white text-white" /> Recommended Plan
        </div>
      )}

      <div className="flex flex-col grow pt-4 pb-2">
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h3>
          <div className="flex items-baseline mb-6">
            <span className="text-orange text-3xl sm:text-4xl font-extrabold">{price}</span>
            <span className="text-text-secondary text-sm sm:text-base ml-2">/ package</span>
          </div>
          <div className="flex justify-between w-full text-[10px] sm:text-xs font-bold text-text-secondary uppercase tracking-widest">
            <span>{duration}</span>
            <span>{sessions}</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8 grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3 text-sm">
              <CheckCircle2 size={18} className="text-orange shrink-0" />
              <span className="text-gray-300 font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate("/booking", { state: { packageId: id, packageTitle: title } })}
          className={`w-full py-2.5 rounded-md font-bold text-sm transition-all duration-300 transform cursor-pointer border ${
            isRecommended 
              ? "bg-[#FF4D4D] text-white border-transparent hover:bg-[#ff3333] shadow-[0_0_20px_rgba(255,77,77,0.3)]" 
              : "bg-transparent border-white/20 text-white hover:bg-white/5"
          }`}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default PackageCard;