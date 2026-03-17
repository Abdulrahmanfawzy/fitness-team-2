import PackageCard from "@/components/common/PackageCard";
import {
  packages,
  trainers,
} from "@/components/lib/constants/Trainer/TrainerData";
import Certifications from "@/components/Trainer/certifications/Certifications";
import Others from "@/components/Trainer/others/Others";
import Schedule from "@/components/Trainer/schedule/Schedule";
import Testimonials from "@/components/Trainer/testimonials/Testimonials";
import TrainerInfo from "@/components/Trainer/trainerInfo/TrainerInfo";

const trainer = trainers[0];
const trainerPackage = packages[0];

function TrainerProfile() {
  return (
    <section className="py-10 w-full text-accent-foreground bg-gray-gradient">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Meet your trainer
      </h2>

      {/* Trainer info card */}
      <TrainerInfo />

      {/* Bio */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-4">
          Get to know {trainer.name.split(" ")[0]}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
          {trainer.bio}
        </p>
      </div>

      {/* Certifications */}
      <Certifications />

      <div className="bg-dark-gradient p-5">
        {/* Training packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {packages.map((pack, index) => (
            <PackageCard
              key={index}
              duration={pack.duration}
              features={pack.features}
              price={pack.price}
              sessions={pack.sessions}
              title={pack.title}
              isRecommended={pack.isRecommended}
            />
          ))}
        </div>

        {/* Schedule */}
        <Schedule />
      </div>

      <div className="bg-dark-gradient p-5">
        {/* Reviews  */}
        <Testimonials />

        {/* Other trainers */}
        <Others />
      </div>
    </section>
  );
}

export default TrainerProfile;
