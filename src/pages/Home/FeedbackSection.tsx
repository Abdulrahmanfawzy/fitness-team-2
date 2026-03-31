import Review from "@/components/common/Review";
import useReviews from "@/hooks/useReviews";
import "../../index.css";

function FeedbackSection() {
  const { reviews, loading, error } = useReviews();

  return (
    <div className="bg-dark-gradient py-11">
      <div className="my-5 w-[95%] md:w-[85%] mx-auto flex flex-col items-center gap-2">
        <p className="px-3 py-1 rounded-xl text-orange border-orange border w-fit font-bold bg-orange-800/25 mb-2">
          Testimonials
        </p>

        <h2 className="text-white text-3xl text-center md:text-5xl font-extrabold">
          Proven Results,{" "}
          <span className="text-orange mt-2">Trusted Voices</span>
        </h2>

        {loading && (
          <div className="mt-8 text-white">Loading reviews...</div>
        )}

        {error && !loading && (
          <div className="mt-8 text-red-400">{error}</div>
        )}

        {!loading && !error && <Review reviews={reviews} />}
      </div>
    </div>
  );
}

export default FeedbackSection;
