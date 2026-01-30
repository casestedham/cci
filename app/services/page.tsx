import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { services } from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Creedence Clearwater Industrial",
  description: "Professional industrial cleaning, hydro excavation, vacuum truck services, line jetting, sewer jetting, and pipe repair services.",
};

export default function ServicesPage() {
  return (
    <div className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive industrial solutions designed to meet your unique needs. 
            Click on any service to learn more about how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <Card
              key={service.slug}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>

        {/* Additional info section */}
        <div className="bg-muted rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Need Help Choosing a Service?
          </h2>
          <p className="text-muted-foreground mb-6">
            Not sure which service is right for your project? Our team is here to help 
            you find the perfect solution.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </Container>
    </div>
  );
}
