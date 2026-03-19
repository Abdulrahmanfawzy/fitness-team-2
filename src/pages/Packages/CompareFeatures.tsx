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
    <section className="pt-8 pb-20">
      <div className="max-w-6xl mx-auto px-8">
        <div
          className="w-full border border-white rounded-sm px-12 py-9"
          style={{ background: "linear-gradient(180deg, #2a0d0d 0%, #1a0808 40%, #111111 100%)" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 tracking-tight">Compare Features</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-xl font-black text-text-secondary capitalize tracking-widest">
                  <th className="pb-10 text-white text-3xl">Feature</th>
                  <th className="pb-10 text-center text-2xl text-white">SINGLE</th>
                  <th className="pb-10 text-center text-2xl text-white">MONTHLY</th>
                  <th className="pb-10 text-center text-2xl text-white">Premium</th>
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

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full">
          <div className="bg-card-bg border border-card-border p-8 rounded-sm flex items-center space-x-6">
            <div className="relative flex items-center justify-center shrink-0">
              <ShieldCheck size={48} className="text-[#22c55e]" fill="#22c55e" />
              <Check size={28} className="absolute text-black stroke-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-xl tracking-tight mb-4">30-Day Money-Back Guarantee</h4>
              <p className="text-text-secondary text-base mt-1 leading-tight">
                Not satisfied with your first month? Get a full refund, no questions asked.
              </p>
            </div>
          </div>
          <div className="bg-card-bg border border-card-border p-8 rounded-sm flex items-center space-x-6">
            <div className="relative flex items-center justify-center shrink-0">
              <BadgeCheck size={48} className="text-[#22c55e]" fill="#22c55e" />
              <Check size={28} className="absolute text-black stroke-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-xl tracking-tight mb-4">All Trainers Certified</h4>
              <p className="text-text-secondary text-base mt-1 leading-tight">
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
