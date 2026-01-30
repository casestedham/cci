import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTABanner() {
  return (
    <section className="bg-primary py-16">
      <Container>
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and quote. Our team is ready 
            to help with your industrial service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Call Us Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
