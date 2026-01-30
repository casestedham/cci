import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { services } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive industrial solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </Container>
    </section>
  );
}
