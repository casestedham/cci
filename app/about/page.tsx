import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Creedence Clearwater Industrial",
  description: "Learn about Creedence Clearwater Industrial - your trusted partner for industrial cleaning, hydro excavation, and specialized industrial services.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            About Creedence Clearwater Industrial
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for professional industrial services
          </p>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl border border-border p-8 mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Creedence Clearwater Industrial was founded with a simple mission: to provide 
                reliable, high-quality industrial services that businesses can count on. What 
                started as a small operation has grown into a full-service industrial solutions 
                provider, serving clients across multiple industries.
              </p>
              <p>
                Over the years, we've built our reputation on delivering exceptional service, 
                maintaining the highest safety standards, and investing in the latest equipment 
                and training for our team. Our commitment to excellence has made us a trusted 
                partner for industrial facilities, municipalities, and commercial operations.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver superior industrial services that exceed expectations while 
                prioritizing safety, reliability, and environmental responsibility.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We conduct business with honesty, transparency, and respect for our 
                clients, employees, and the environment.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We continuously invest in training, equipment, and processes to provide 
                the highest quality service possible.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-primary rounded-xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Experienced Team</h3>
                <p className="opacity-90">
                  Highly trained professionals with years of industry experience
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Modern Equipment</h3>
                <p className="opacity-90">
                  State-of-the-art tools and technology for efficient service
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold text-lg mb-2">24/7 Availability</h3>
                <p className="opacity-90">
                  Emergency response when you need it most
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Fully Insured</h3>
                <p className="opacity-90">
                  Comprehensive insurance coverage for your peace of mind
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Safety First</h3>
                <p className="opacity-90">
                  Strict safety protocols and compliance with all regulations
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Competitive Pricing</h3>
                <p className="opacity-90">
                  Fair, transparent pricing with no hidden fees
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area */}
        <div className="bg-muted rounded-xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-4">Service Area</h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            We proudly serve industrial facilities, municipalities, and commercial operations 
            throughout the region. Contact us to confirm service availability in your area.
          </p>
          <Button href="/contact" size="lg">
            Contact Us Today
          </Button>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Let's discuss how we can help with your industrial service needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Request a Quote
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Our Services
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
