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
    <section className="w-full py-20 sm:py-24 lg:py-28 bg-black" id="request-demo">
      <div className="container px-6 lg:px-8 mx-auto max-w-2xl">
        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Get Started</span>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6">
            <span className="text-white">Request </span>
            <span className="bg-gradient-to-r from-pulse-400 to-purple-500 bg-clip-text text-transparent">Access</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
            See how Poliara can transform your data analytics workflow
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-elegant space-y-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium text-gray-300">
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
              className="w-full bg-black border-gray-700 text-white placeholder-gray-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">
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
              className="w-full bg-black border-gray-700 text-white placeholder-gray-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-gray-300">
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
              className="w-full bg-black border-gray-700 text-white placeholder-gray-500"
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
