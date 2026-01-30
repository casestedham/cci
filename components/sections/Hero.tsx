import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-muted to-white py-20 lg:py-32">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Professional Industrial Services for{" "}
            <span className="text-primary">Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From hydro excavation to industrial cleaning, we deliver reliable, 
            expert solutions that keep your operations running smoothly.
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
    </section>
  );
}
