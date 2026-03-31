import TrainersHero from "./components/TrainersHero";
import TrainersSearch from "./components/TrainersSearch";
import TopTrainers from "./components/TopTrainers";
import TrainersList from "./components/TrainersList";
import { useState } from "react";

function Trainers() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <div className="bg-[#121212]">
        <TrainersHero />
        <TrainersSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TopTrainers />
      </div>
      <div className="bg-dark-gradient">
        <TrainersList searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default Trainers;
