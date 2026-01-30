import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Creedence Clearwater Industrial",
  description: "Get in touch with Creedence Clearwater Industrial for a free quote on industrial cleaning, hydro excavation, and other specialized services.",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch for a free consultation and quote. We're here to help with all 
            your industrial service needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Get in Touch</h2>
            
            <div className="space-y-6 mb-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:5551234567" className="hover:text-primary transition-colors">
                      (555) 123-4567
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">24/7 Emergency Service Available</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@ccind.com" className="hover:text-primary transition-colors">
                      info@ccind.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    123 Industrial Way<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 7:00 AM - 6:00 PM<br />
                    Saturday: 8:00 AM - 4:00 PM<br />
                    Sunday: Emergency Service Only
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Banner */}
            <div className="bg-primary text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Emergency Service</h3>
              <p className="mb-4 opacity-90">
                Need immediate assistance? We offer 24/7 emergency response for urgent situations.
              </p>
              <a
                href="tel:5551234567"
                className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Call Now: (555) 123-4567
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 bg-muted rounded-xl overflow-hidden border border-border">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-muted-foreground">Map Placeholder</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Add Google Maps embed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area Notice */}
        <div className="bg-muted rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Service Area</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We proudly serve clients throughout the region. Not sure if we service your area? 
            Contact us to confirm availability. We may be able to accommodate special requests 
            outside our standard service zone.
          </p>
        </div>
      </Container>
    </div>
  );
}
