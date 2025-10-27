import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.company) {
      toast.error("All fields are required");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Demo request submitted successfully!");
    setFormData({ fullName: "", email: "", company: "" });
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-background to-muted/20" id="request-demo">
      <div className="container px-6 lg:px-8 mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Request <span className="text-[#3b82f6]">Access</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how Poliara can transform your data analytics workflow
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-elegant space-y-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium">
              Full Name *
            </label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Company *
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              required
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Request Demo
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RequestDemo;
