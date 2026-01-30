import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-truck.png"
          alt="Industrial truck"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Professional Industrial Services for{" "}
            <span className="text-primary">Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            From hydro excavation to industrial cleaning, we deliver reliable, 
            expert solutions that keep your operations running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Request a Quote
            </Button>
            <Button href="/services" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              View Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
