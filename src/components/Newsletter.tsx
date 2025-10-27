import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about Poliara soon."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  return <section id="newsletter" className="bg-black py-20 sm:py-24 lg:py-28">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Newsletter</span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 text-left">
            <span className="text-white">Subscribe to the </span>
            <span className="bg-gradient-to-r from-pulse-400 to-purple-500 bg-clip-text text-transparent">newsletter</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 text-left">
            Be first to hear about breakthroughs, partnerships, and deployment opportunities
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-grow">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" className="w-full px-6 py-4 rounded-full border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-white placeholder-gray-500" required />
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 md:ml-4">
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>;
};
export default Newsletter;