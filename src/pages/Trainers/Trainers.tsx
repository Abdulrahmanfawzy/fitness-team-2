import TrainersHero from "./components/TrainersHero";
import TrainersSearch from "./components/TrainersSearch";
import TopTrainers from "./components/TopTrainers";
import TrainersList from "./components/TrainersList";


function Trainers() {
  return (
    <div>
      <div className="bg-[#121212]">
        <TrainersHero />
        <TrainersSearch />
        <TopTrainers />
      </div>
      <div className="bg-dark-gradient">
        <TrainersList />
      </div>
    </div>
  );
}

export default Trainers;
