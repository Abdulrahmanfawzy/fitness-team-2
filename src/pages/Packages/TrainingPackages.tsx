import PackageCard from "../../components/common/PackageCard";

const packages = [
  {
    title: "Single Pack",
    price: "EGP 150",
    duration: "60 MIN",
    sessions: "1 SESSION",
    features: [
      "Try any Trainer",
      "No Commitment",
      "Full Session Access",
      "Post-Workout Plan"
    ]
  },
  {
    title: "Monthly Pack",
    price: "EGP 1000",
    duration: "60 MIN",
    sessions: "15 SESSIONS",
    features: [
      "Dedicated Trainer",
      "Nutrition Plan Included",
      "Progress Tracking",
      "Priority Scheduling"
    ],
    isRecommended: true
  },
  {
    title: "Premium Pack",
    price: "EGP 3000",
    duration: "60 MIN",
    sessions: "30 SESSIONS",
    features: [
      "Dedicated Trainer",
      "Full Coaching Program",
      "24/7 Trainer Access",
      "Custom Meal Plans"
    ]
  }
];

function TrainingPackages() {
  return (
    <section className="pt-10 pb-8">
      <div className="text-center mb-6 md:mb-10 px-4">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-3 md:mb-4 tracking-widest">Training Packages</h2>
        <p className="text-text-secondary text-[16px] sm:text-[18px] md:text-[22px] max-w-2xl mx-auto">
          Choose a training plan that matches your goals and schedule
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 items-stretch">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
}

export default TrainingPackages;
