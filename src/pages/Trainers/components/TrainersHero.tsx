import trainerBackground from "../../../../public/TrainersBackground.gif";

function TrainersHero() {
  return (
    <>
      {/* bg trainers  */}
      <div>
        <img 
          src={trainerBackground} 
          alt="Trainers Background" 
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[589px] object-cover" 
        />
      </div>
      {/* Browse Trainers and search */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-8 md:my-[66px] text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Browse Trainers
          </h2>
          <p className="text-white text-sm md:text-[15px]">
            Find the perfect trainer by browsing through our list of experts.
          </p>
        </div>
      </div>
    </>
  );
}

export default TrainersHero;
