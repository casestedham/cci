import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Creedence Clearwater Industrial`,
    description: service.fullDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {service.shortDescription}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <div className="bg-white rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">About This Service</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {service.fullDescription}
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-muted rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-muted-foreground text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 opacity-90">
              Contact us today for a free consultation and quote for {service.title.toLowerCase()} services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Request a Quote
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Call Us Now
              </Button>
            </div>
          </div>

          {/* Back to Services */}
          <div className="mt-8 text-center">
            <Button href="/services" variant="outline">
              ← Back to All Services
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
