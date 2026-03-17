import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../lib/constants/Trainer/TrainerData";
import { useState } from "react";

function Review() {
  const [current, setCurrent] = useState(0);

  function handlePreviousReviews() {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }

  function handleNextReviews() {
    setCurrent((p) => (p + 1) % testimonials.length);
  }
  return (
    <div className="mb-12 p-5">
      <h3 className="text-2xl font-bold text-center mb-8">What clients say</h3>

      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
        {/* Left Panel */}
        <div className="md:w-52 shrink-0 bg-card border border-border rounded-xl p-6 flex flex-col justify-between min-h-65">
          <div>
            <Quote size={50} className="rotate-180 text-primary mb-7" />
            <p className="text-base font-semibold mt-2 leading-snug">
              What our clients are saying
            </p>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <button
              onClick={handlePreviousReviews}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ChevronLeft size={14} />
            </button>
            <div className="flex gap-1">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNextReviews}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className={
                        j < (t.rating ?? 5)
                          ? "text-primary fill-primary"
                          : "text-accent-foreground fill-accent-foreground"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <div className="w-11 h-11 rounded-full bg-primary/20 text-primary  font-bold flex items-center justify-center shrink-0">
                  <img
                    src="/trainer.png"
                    alt="trainer Photo"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  {t.time && (
                    <p className="text-xs text-muted-foreground">{t.time}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Review;
