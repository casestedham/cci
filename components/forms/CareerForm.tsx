"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
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
      console.log("Career form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
      });
    }, 1000);
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
        <p className="text-green-700 mb-4">
          Thank you for your interest in joining our team. We'll review your application and get back to you soon.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-primary hover:underline font-semibold"
        >
          Submit Another Application
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
          label="Position of Interest"
          name="position"
          type="select"
          required
          value={formData.position}
          onChange={handleChange}
          options={[
            { value: "operator", label: "Equipment Operator" },
            { value: "technician", label: "Service Technician" },
            { value: "driver", label: "CDL Driver" },
            { value: "supervisor", label: "Field Supervisor" },
            { value: "other", label: "Other Position" },
          ]}
        />
      </div>

      <Input
        label="Years of Experience"
        name="experience"
        type="text"
        placeholder="e.g., 5 years"
        required
        value={formData.experience}
        onChange={handleChange}
        className="mb-6"
      />

      <Input
        label="Tell Us About Yourself"
        name="message"
        type="textarea"
        placeholder="Share your relevant experience, skills, and why you'd like to join our team..."
        required
        value={formData.message}
        onChange={handleChange}
        rows={6}
        className="mb-6"
      />

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>

      <p className="text-sm text-muted-foreground mt-4 text-center">
        You can also email your resume to <a href="mailto:careers@ccind.com" className="text-primary hover:underline">careers@ccind.com</a>
      </p>
    </form>
  );
}
