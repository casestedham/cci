"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    // In production, this would send to your backend/email service
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1000);
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 mb-4">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-primary hover:underline font-semibold"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label="Full Name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label="Phone"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          label="Service Interested In"
          name="service"
          type="select"
          required
          value={formData.service}
          onChange={handleChange}
          options={[
            { value: "industrial-cleaning", label: "Industrial Cleaning" },
            { value: "hydro-excavation", label: "Hydro Excavation" },
            { value: "vacuum-truck", label: "Vacuum Truck Services" },
            { value: "line-jetting", label: "Line Jetting" },
            { value: "sewer-jetting", label: "Sewer Jetting" },
            { value: "pipe-repair", label: "Pipe Repair" },
            { value: "other", label: "Other / General Inquiry" },
          ]}
        />
      </div>

      <Input
        label="Message"
        name="message"
        type="textarea"
        placeholder="Tell us about your project or inquiry..."
        required
        value={formData.message}
        onChange={handleChange}
        rows={6}
        className="mb-6"
      />

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-sm text-muted-foreground mt-4 text-center">
        For urgent matters, call us at <a href="tel:5551234567" className="text-primary hover:underline">(555) 123-4567</a>
      </p>
    </form>
  );
}
