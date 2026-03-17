import TrainerCard from "../../../components/common/TrainerCard";

function TrainersList() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white py-6 text-center md:text-left">
        Meet Our <span className="text-orange">Trainers</span>
      </h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <TrainerCard />
        <TrainerCard />
        <TrainerCard />
        <TrainerCard />
        <TrainerCard />
        <TrainerCard />
      </div>
      <div className="flex justify-center items-center">
        <button className="w-full sm:w-[265px] my-5 bg-orange hover:bg-orange/80 transition-all duration-200 border border-orange rounded-xl px-7 h-[54px] text-white text-[16px] font-medium">
          Load More
        </button>
      </div>
    </div>
  );
}

export default TrainersList;
