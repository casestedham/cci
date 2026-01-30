import Container from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Creedence Clearwater Industrial",
  description: "View our portfolio of industrial cleaning, hydro excavation, and specialized service projects.",
};

export default function GalleryPage() {
  // Placeholder images - these would be replaced with actual project photos
  const galleryItems = [
    { id: 1, category: "Industrial Cleaning", title: "Manufacturing Plant Cleaning" },
    { id: 2, category: "Hydro Excavation", title: "Utility Line Excavation" },
    { id: 3, category: "Vacuum Truck", title: "Industrial Waste Removal" },
    { id: 4, category: "Line Jetting", title: "Pipe Cleaning Project" },
    { id: 5, category: "Sewer Jetting", title: "Municipal Sewer Maintenance" },
    { id: 6, category: "Pipe Repair", title: "Infrastructure Repair" },
    { id: 7, category: "Industrial Cleaning", title: "Facility Deep Clean" },
    { id: 8, category: "Hydro Excavation", title: "Safe Excavation Work" },
    { id: 9, category: "Vacuum Truck", title: "Emergency Response" },
  ];

  return (
    <div className="py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See our professional industrial services in action. From routine maintenance 
            to complex projects, we deliver quality results every time.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-muted rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-200"
            >
              {/* Placeholder for image */}
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-muted-foreground text-sm">Image Placeholder</p>
                </div>
              </div>
              <div className="p-4">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-secondary">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-primary rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Want to See More?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            These images represent just a sample of our work. Contact us to discuss 
            your project and see examples specific to your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Note about adding images */}
        <div className="mt-8 bg-muted border-l-4 border-primary p-6 rounded">
          <p className="text-muted-foreground">
            <strong className="text-secondary">Note:</strong> To add your actual project photos, 
            place images in the <code className="bg-white px-2 py-1 rounded text-sm">/public/images/gallery</code> folder 
            and update this page to display them. You can organize them by service category for easy filtering.
          </p>
        </div>
      </Container>
    </div>
  );
}
