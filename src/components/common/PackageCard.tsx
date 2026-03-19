<<<<<<< HEAD
import { CheckCircle2, Zap } from "lucide-react";
=======
import { CheckCircle2, Star } from "lucide-react";
>>>>>>> d43500bad6a011a54aff060ce1eeab19dac451d7

interface PackageCardProps {
  title: string;
  price: string;
  duration: string;
  sessions: string;
  features: string[];
  isRecommended: boolean;
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
    <div className={`relative flex flex-col h-full p-8 rounded-2xl border transition-all duration-300 ${
      isRecommended 
        ? "bg-card-recommended border-orange z-10" 
        : "bg-card-standard border-card-border hover:border-orange"
    }`}>
      {isRecommended && (
<<<<<<< HEAD
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange text-white text-[11px] font-black py-1.5 px-3 rounded-b-xl uppercase tracking-[0.15em] z-20 shadow-lg shadow-orange/40 whitespace-nowrap flex items-center gap-1.5">
          <Zap size={10} className="fill-white text-white" /> Recommended
=======
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-black py-1.5 px-6 rounded-b-sm uppercase tracking-[0.15em] z-20 shadow-lg shadow-orange/20 whitespace-nowrap flex  gap-2">
          <Star size={15} className="fill-accent-foreground"/> Recommended
>>>>>>> d43500bad6a011a54aff060ce1eeab19dac451d7
        </div>
      )}

      <div className="flex flex-col grow py-10">

        <div className="mb-8">
        <h3 className="text-2xl font-bold mb-5">{title}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-orange text-4xl font-extrabold">{price}</span>
          <span className="text-text-secondary text-lg ml-2">/ package</span>
        </div>
        <div className="flex justify-start space-x-20 text-xs font-bold text-text-secondary uppercase tracking-widest">
          <span>{duration}</span>
          <span>{sessions}</span>
        </div>
        </div>

        <ul className="space-y-5 mb-12 grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3 text-sm">
              <CheckCircle2 size={18} className="text-orange shrink-0" />
              <span className="text-gray-200">{feature}</span>
            </li>
          ))}
        </ul>

        <button className={`w-full py-4 rounded-sm font-bold text-sm transition-all duration-300 transform ${
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