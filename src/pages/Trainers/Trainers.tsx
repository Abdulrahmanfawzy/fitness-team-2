import TrainersHero from "./components/TrainersHero";
import TrainersSearch from "./components/TrainersSearch";
import TopTrainers from "./components/TopTrainers";
import TrainersList from "./components/TrainersList";
import FilterPanel from "./components/FilterPanel";

function Trainers() {
  return (
    <div className="mt-[88px] ">
      <div className="bg-[#121212]">
        <TrainersHero />
        <TrainersSearch />
        <TopTrainers />
      </div>
      <div className="bg-dark-gradient">
        <TrainersList />
        <FilterPanel />
      </div>
    </div>
  );
}

export default Trainers;
