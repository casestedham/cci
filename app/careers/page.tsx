import Container from "@/components/ui/Container";
import CareerForm from "@/components/forms/CareerForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Creedence Clearwater Industrial",
  description: "Join our team at Creedence Clearwater Industrial. We're looking for skilled professionals to grow with us.",
};

export default function CareersPage() {
  const benefits = [
    {
      icon: "💰",
      title: "Competitive Pay",
      description: "Industry-leading compensation packages",
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive medical, dental, and vision coverage",
    },
    {
      icon: "📚",
      title: "Training",
      description: "Ongoing professional development and certifications",
    },
    {
      icon: "⏰",
      title: "Work-Life Balance",
      description: "Flexible scheduling and paid time off",
    },
    {
      icon: "🚀",
      title: "Growth Opportunities",
      description: "Clear career advancement paths",
    },
    {
      icon: "🛡️",
      title: "Safety Focus",
      description: "Industry-leading safety programs and equipment",
    },
  ];

  const openPositions = [
    {
      title: "Equipment Operator",
      type: "Full-Time",
      location: "Multiple Locations",
      description: "Experienced operators needed for hydro excavation and vacuum truck operations. CDL preferred.",
    },
    {
      title: "Service Technician",
      type: "Full-Time",
      location: "Multiple Locations",
      description: "Skilled technicians for line jetting, sewer jetting, and pipe repair services.",
    },
    {
      title: "CDL Driver",
      type: "Full-Time",
      location: "Multiple Locations",
      description: "Class A or B CDL required. Experience with industrial equipment preferred.",
    },
  ];

  return (
    <div className="py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build your career with a company that values safety, quality, and its people
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
            Why Work at CCI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
            Current Openings
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-block bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                      <span className="inline-block bg-muted text-muted-foreground text-sm font-semibold px-3 py-1 rounded-full">
                        📍 {position.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{position.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-xl p-6 text-center max-w-4xl mx-auto">
            <p className="text-muted-foreground">
              Don't see a position that fits? We're always looking for talented individuals. 
              Submit your application below and we'll keep it on file for future opportunities.
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary text-center mb-8">
            Apply Now
          </h2>
          <CareerForm />
        </div>
      </Container>
    </div>
  );
}
