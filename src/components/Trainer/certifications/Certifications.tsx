import { Check } from 'lucide-react'

const Certifications = () => {
  return (
    <div className="mb-12 max-w-5xl mx-auto p-5">
        <h3 className="text-2xl font-bold text-center mb-2">Certifications</h3>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Verified qualifications that demonstrate professional coaching
          expertise
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "NASM Certified Personal Trainer",
            "ACSM Certified Personal Trainer",
            "NSCA Certified Personal Trainer",
            "ISSA Certified Personal Trainer",
          ].map((cert) => (
            <div
              key={cert}
              className="bg-card border border-border rounded-lg p-4 text-center"
            >
              <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Check size={24} className="text-success" />
              </div>
              <p className="text-xs text-muted-foreground">{cert}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Certifications