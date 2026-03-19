import { Check, ShieldCheck, BadgeCheck } from "lucide-react";

interface FeatureRow {
  feature: string;
  single: string | boolean | null;
  monthly: string | boolean | null;
  premium: string | boolean | null;
}

const rows: FeatureRow[] = [
  { feature: "session", single: "1", monthly: "8", premium: "Unlimited" },
  { feature: "TRAINER", single: "Any", monthly: "Dedicated", premium: "Dedicated" },
  { feature: "DURATION", single: "60", monthly: "60", premium: "60" },
  { feature: "NUTRITION PLAN", single: null, monthly: true, premium: true },
  { feature: "PROGRESS TRACKING", single: null, monthly: true, premium: true },
  { feature: "PRIORITY BOOKING", single: null, monthly: null, premium: true },
  { feature: "24/7 ACCESS", single: null, monthly: null, premium: true },
];

function CompareFeatures() {
  return (
    <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div
          className="w-full border border-white rounded-sm px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-9"
          style={{ background: "linear-gradient(180deg, #220707 0%, #110404 40%, #080808 100%)" }}
        >
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center mb-8 sm:mb-12 md:mb-16 tracking-widest">Compare Features</h2>
          
          {/* Mobile View - Separate Cards for Each Package */}
          <div className="block sm:hidden">
            {[
              { name: 'SINGLE', key: 'single' as const },
              { name: 'MONTHLY', key: 'monthly' as const },
              { name: 'Premium', key: 'premium' as const }
            ].map((plan) => (
              <div key={plan.key} className="mb-6 last:mb-0">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">{plan.name}</h3>
                <div className="border border-white/20 rounded-lg p-4">
                  {rows.map((row, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                      <span className="text-gray-300 font-semibold capitalize tracking-wider text-sm">{row.feature}</span>
                      <span className="font-bold text-white text-sm">
                        {row[plan.key] === true ? <Check size={16} className="text-orange" /> : row[plan.key] ?? ""}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Original Table */}
          <div className="hidden sm:block">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 text-sm md:text-lg lg:text-xl font-black text-text-secondary capitalize tracking-widest">
                    <th className="pb-10 text-white text-lg md:text-3xl">Feature</th>
                    <th className="pb-10 text-center text-base md:text-2xl text-white">SINGLE</th>
                    <th className="pb-10 text-center text-base md:text-2xl text-white">MONTHLY</th>
                    <th className="pb-10 text-center text-base md:text-2xl text-white">Premium</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {rows.map((row, index) => (
                    <tr key={index} className="border-b border-white/10 group hover:bg-white/5 transition-colors">
                      <td className="py-6 text-gray-300 font-semibold capitalize tracking-wider text-sm">{row.feature}</td>
                      <td className="py-6 text-center font-bold text-white text-base">
                        {row.single === true ? <Check size={20} className="mx-auto text-orange" /> : row.single ?? ""}
                      </td>
                      <td className="py-6 text-center font-bold text-white text-base">
                        {row.monthly === true ? <Check size={20} className="mx-auto text-orange" /> : row.monthly ?? ""}
                      </td>
                      <td className="py-6 text-center font-bold text-white text-base">
                        {row.premium === true ? <Check size={20} className="mx-auto text-orange" /> : row.premium ?? ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-12 w-full">
          <div className="bg-card-bg border border-card-border p-3 sm:p-4 md:p-6 lg:p-8 rounded-sm flex flex-col items-center space-y-3 sm:space-y-4">
            <div className="relative flex items-center justify-center shrink-0">
              <ShieldCheck size={32} className="text-[#22c55e] w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" fill="#22c55e" />
              <Check size={20} className="absolute text-black stroke-4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </div>
            <div className="text-center">
              <h4 className="font-extrabold text-base sm:text-lg md:text-xl tracking-tight mb-2 sm:mb-4">30-Day Money-Back Guarantee</h4>
              <p className="text-text-secondary text-xs sm:text-sm md:text-base mt-1 leading-tight">
                Not satisfied with your first month? Get a full refund, no questions asked.
              </p>
            </div>
          </div>
          <div className="bg-card-bg border border-card-border p-3 sm:p-4 md:p-6 lg:p-8 rounded-sm flex flex-col items-center space-y-3 sm:space-y-4">
            <div className="relative flex items-center justify-center shrink-0">
              <BadgeCheck size={32} className="text-[#22c55e] w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" fill="#22c55e" />
              <Check size={20} className="absolute text-black stroke-4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </div>
            <div className="text-center">
              <h4 className="font-extrabold text-base sm:text-lg md:text-xl tracking-tight mb-2 sm:mb-4">All Trainers Certified</h4>
              <p className="text-text-secondary text-xs sm:text-sm md:text-base mt-1 leading-tight">
                Every coach holds elite certifications and has proven experience in transforming lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompareFeatures;
