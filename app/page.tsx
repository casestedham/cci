import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTABanner from "@/components/sections/CTABanner";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Why Choose Creedence Clearwater Industrial?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring expertise, reliability, and commitment to every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-secondary mb-2">Fast Response</h3>
              <p className="text-muted-foreground">
                24/7 emergency services with rapid deployment to minimize your downtime
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-secondary mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Highly trained professionals with years of experience in industrial services
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-secondary mb-2">Safety First</h3>
              <p className="text-muted-foreground">
                Fully insured with strict safety protocols and compliance standards
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
