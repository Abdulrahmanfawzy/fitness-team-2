import { CheckCircle2, Zap } from "lucide-react";

interface PackageCardProps {
  title: string;
  price: string;
  duration: string;
  sessions: string;
  features: string[];
  isRecommended?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ 
  title, 
  price, 
  duration, 
  sessions, 
  features, 
  isRecommended 
}) => {
  return (
    <div className={`relative flex flex-col h-full p-4 sm:p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
      isRecommended 
        ? "bg-card-recommended border-orange z-10" 
        : "bg-card-standard border-card-border hover:border-orange"
    }`}>
      {isRecommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange text-white text-[10px] sm:text-[11px] font-black py-1 px-2 sm:py-1.5 sm:px-3 rounded-b-xl uppercase tracking-[0.15em] z-20 whitespace-nowrap flex items-center gap-1 sm:gap-1.5">
          <Zap size={11} className="fill-white text-white" /> Recommended
        </div>
      )}

      <div className="flex flex-col grow py-6 sm:py-8 md:py-10">

        <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">{title}</h3>
        <div className="flex items-baseline mb-4 sm:mb-6">
          <span className="text-orange text-3xl sm:text-4xl font-extrabold">{price}</span>
          <span className="text-text-secondary text-sm sm:text-lg ml-2">/ package</span>
        </div>
        <div className="flex justify-start space-x-12 sm:space-x-16 md:space-x-20 text-[10px] sm:text-xs font-bold text-text-secondary uppercase tracking-widest">
          <span>{duration}</span>
          <span>{sessions}</span>
        </div>
        </div>

        <ul className="space-y-3 sm:space-y-4 md:space-y-5 mb-8 sm:mb-10 md:mb-12 grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
              <CheckCircle2 size={18} className="text-orange shrink-0" />
              <span className="text-gray-200">{feature}</span>
            </li>
          ))}
        </ul>

        <button className={`w-full py-3 sm:py-4 rounded-sm font-bold text-xs sm:text-sm transition-all duration-300 transform ${
          isRecommended 
            ? "bg-orange text-white hover:brightness-125 hover:scale-105 shadow-xl shadow-orange/30" 
            : "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:scale-105 cursor-pointer"
        }`}>
          Book
        </button>
      </div>
    </div>
  );
};

export default PackageCard;