import PackageCard from "@/components/common/PackageCard";
import { Link } from "react-router-dom";

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
      "Post-Workout Plan",
    ],
    description: "Ideal for beginners or those wanting to try our elite coaching for a single session.",
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
      "Priority Scheduling",
    ],
    description: "Our most popular plan for consistent progress and dedicated nutritional guidance.",
    isRecommended: true,
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
      "Custom Meal Plans",
    ],
    description: "The ultimate transformation experience with full-time access and custom meal plans.",
  },
];

function PackagesSection() {
  return (
    <div className=" bg-dark-gradient ">
      <section className="pt-10 pb-8   w-[95%] md:w-[85%] mx-auto px-5 ">
        <div className="text-center mb-6 md:mb-10 px-4">
          <p className=" px-3 py-1 mb-3 mx-auto rounded-xl text-orange border-orange border w-fit font-bold bg-orange-800/25">
            Packages
          </p>
          <h2 className=" text-white  text-3xl md:text-5xl font-extrabold ">
            Simple,{" "}
            <span className=" text-orange mt-2">Transparent Pricing</span>
          </h2>
          <p className=" mt-2 text-text-secondary text-[16px] sm:text-[18px] md:text-[22px] max-w-2xl mx-auto">
            Choose the plan that fits your goals. No hidden fees, no contracts.
            Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8  mx-auto  items-stretch">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
        <div className=" text-center mt-5">
          <Link className=" text-orange font-medium  " to={"/packages"}>
            Compare all package features{" "}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default PackagesSection;
