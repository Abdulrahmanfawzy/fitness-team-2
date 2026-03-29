import Error from "@/components/common/ErrorPage";
import Loading from "@/components/common/LoadingPage";
import PackageCard from "@/components/common/PackageCard";
import Review from "@/components/common/Review";
import { trainers } from "@/components/lib/constants/Trainer/TrainerData";
import Certifications from "@/components/Trainer/certifications/Certifications";
import Others from "@/components/Trainer/others/Others";
import Schedule from "@/components/Trainer/schedule/Schedule";
import TrainerInfo from "@/components/Trainer/trainerInfo/TrainerInfo";
import { useGetTrainer } from "@/lib/api/TrainerProfile/profile/get-trainerProfile";
import type {
  Availability,
  AvailabilityException,
  Package,
  Trainer,
} from "@/lib/types/Trainer/TrainerTypes";
import { useParams } from "react-router-dom";

const trainer = trainers[0];
function TrainerProfile() {
  const { id } = useParams();
  const trainerId = Number(id);
  const { data, isError, isLoading } = useGetTrainer(trainerId);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  const trainerData: Trainer = data.data;
  const packages: Package[] = trainerData.packages;
  const availability: Availability[] = trainerData.availability;
  const availabilityException: AvailabilityException[] =
    trainerData.availability_exceptions;
  return (
    <section className="py-10 w-full text-accent-foreground bg-gray-gradient">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Meet your trainer
      </h2>

      {/* Trainer info card */}
      <TrainerInfo trainer={trainerData}/>

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
      <Certifications trainer={trainerData}/>

      <div className="bg-dark-gradient p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {/* {packages.map((pack, index) => (
            <PackageCard
              key={index}
              id={pack.package_id}
              description=""
              duration_days={pack.duration_days}
              sessions={pack.sessions}
              title={pack.title}
            />
          ))} */}
        </div>

        {/* Schedule */}
        <Schedule
          trainerData={trainerData}
        />
      </div>

      <div className="bg-dark-gradient p-5">
        {/* Reviews  */}
        <Review />

        {/* Other trainers */}
        <Others />
      </div>
    </section>
  );
}

export default TrainerProfile;
