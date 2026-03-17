import { trainers } from "@/components/lib/constants/Trainer/TrainerData";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const otherTrainers = trainers.slice(1, 4);
const trainer = trainers[0];

const Others = () => {
  return (
    <div className="max-w-7xl p-5 mx-auto ">
      <h3 className="text-2xl font-bold text-center mb-2">
        Explore other trainers
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-8">
        Discover more professional coaches who can help you reach your goals
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherTrainers.map((t) => (
          <div key={t.id} className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all group">
            <div className="relative  overflow-hidden">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-fit object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm">{t.name}</h3>
                <span className="text-primary text-sm font-bold">
                  EGP {t.price}
                  <span className="text-muted-foreground text-xs font-normal">
                    /session
                  </span>
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {t.specialties.slice(0, 3).map((s, index) => (
                  <span
                    key={index}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground ">
                <MapPin size={16} className="text-primary" />
                {t.location}
              </div>
              <Link
                to={`/trainers/${t.id}`}
                className="block text-center bg-primary text-accent-foreground mt-4 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                View Profile →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;
