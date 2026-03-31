import TrainerCard from "../../../components/common/TrainerCard";
import useTrainers from "@/hooks/useTrainers";

function TrainersList() {
  const { trainers, loading, error } = useTrainers();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white py-6 text-center md:text-left">
        Meet Our <span className="text-orange">Trainers</span>
      </h2>

      {/* Loading State */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-[#2C2C2E] shadow-lg mx-auto w-full animate-pulse"
            >
              <div className="h-[250px] bg-[#3A3A3C]" />
              <div className="p-6 space-y-4">
                <div className="h-5 bg-[#3A3A3C] rounded w-2/3" />
                <div className="h-4 bg-[#3A3A3C] rounded w-full" />
                <div className="h-4 bg-[#3A3A3C] rounded w-3/4" />
                <div className="h-10 bg-[#3A3A3C] rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <p className="text-red-400 text-center py-8">{error}</p>
      )}

      {/* Trainers Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.length > 0 ? (
            trainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))
          ) : (
            /* Fallback to static cards if API returns empty */
            <>
              <TrainerCard />
              <TrainerCard />
              <TrainerCard />
              <TrainerCard />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default TrainersList;
