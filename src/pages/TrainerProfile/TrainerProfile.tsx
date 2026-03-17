import PackageCard from "@/components/common/PackageCard";
import { trainers } from "@/components/lib/constants/Trainer/TrainerData";
import Certifications from "@/components/Trainer/certifications/Certifications";
import Others from "@/components/Trainer/others/Others";
import Schedule from "@/components/Trainer/schedule/Schedule";
import Testimonials from "@/components/Trainer/testimonials/Testimonials";
import TrainerInfo from "@/components/Trainer/trainerInfo/TrainerInfo";

const trainer = trainers[0];

function TrainerProfile() {
  return (
    <section className=" py-10 bg-trainer-gradient text-accent-foreground">
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

        {/* Training packages */}
        <PackageCard />

        {/* Schedule */}
        <Schedule />
        {/* Testimonials */}
        <Testimonials />

        {/* Other trainers */}
        <Others />
      
    </section>
  );
}

export default TrainerProfile;
