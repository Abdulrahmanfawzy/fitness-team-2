import { packages } from "../lib/constants/Trainer/TrainerData";

function PackageCard() {
  return (
    <div className="mb-12 ">
      <h3 className="text-xl font-bold text-center mb-2">Training packages</h3>
      <p className="text-sm text-muted-foreground text-center mb-8">
        Choose a training plan that matches your goals and schedule
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`relative rounded-lg px-6 py-10 h-110  grow  border transition-colors flex flex-col ${
              pkg.recommended
                ? "border-primary card-glow bg-primary/5"
                : "border-border bg-card"
            }`}
          >
            {pkg.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                ★ Recommended
              </span>
            )}
            <h4 className="text-xl font-semibold mb-3">{pkg.name}</h4>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-primary text-2xl font-bold">
                EGP {pkg.price.toLocaleString()}
              </span>
              <span className="text-muted-foreground text-xs">/package</span>
            </div>
            <p className="text-xs text-muted-foreground my-4">
              60 MIN · {pkg.sessions}
            </p>
            <ul className="space-y-2 mb-6 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-2 ">
                  <span className="text-success">✓</span> {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full cursor-pointer   py-2.5 text-foreground rounded-md text-sm font-semibold transition-colors ${
                pkg.recommended
                  ? "bg-primary  hover:bg-primary/90"
                  : "border border-border  hover:bg-accent"
              }`}
            >
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageCard;
