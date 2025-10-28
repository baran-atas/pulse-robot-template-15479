
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative bg-black min-h-screen flex items-center" 
      id="hero" 
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center relative">
          <div className="w-full lg:w-1/2">
            <div 
              className="pulse-chip mb-4 sm:mb-6 opacity-0 animate-fade-in hidden sm:flex" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
              <span>Purpose</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight opacity-0 animate-fade-in font-display font-bold" 
              style={{ animationDelay: "0.3s" }}
            >
              <span className="text-white">Your New</span><br />
              <span className="bg-gradient-to-r from-pulse-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Data Analyst</span>
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="mt-6 sm:mt-8 mb-8 sm:mb-10 leading-relaxed opacity-0 animate-fade-in text-gray-400 font-normal text-lg sm:text-xl text-left max-w-xl"
            >
              Ask anything in plain English. Get instant insights from your data warehouse.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="#request-demo" 
                className="flex items-center justify-center group w-full sm:w-auto text-center"
                style={{
                  backgroundColor: '#3b82f6',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '14px',
                  lineHeight: '20px',
                  padding: '16px 24px', // Slightly reduced padding for mobile
                  border: '1px solid white',
                }}
              >
                Request Access
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
              <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <div className="relative">
                {/* Glowing orb effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pulse-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
                
                {/* Chat conversation card */}
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-pulse-500/30 shadow-2xl">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-pulse-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Poliara AI</div>
                          <div className="text-xs text-green-400 flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Online
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">Just now</div>
                    </div>
                    
                    {/* User message */}
                    <div className="flex justify-end opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
                      <div className="max-w-[80%] bg-pulse-600 rounded-2xl rounded-tr-sm px-4 py-3">
                        <p className="text-white text-sm">Which in-game events had the highest player engagement this month?</p>
                      </div>
                    </div>
                    
                    {/* AI typing indicator */}
                    <div className="flex gap-2 items-start opacity-0 animate-fade-in" style={{ animationDelay: "1.6s" }}>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="max-w-[80%] bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* AI response */}
                    <div className="flex gap-2 items-start opacity-0 animate-fade-in" style={{ animationDelay: "2.2s" }}>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="max-w-[80%] bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3">
                        <p className="text-gray-300 text-sm mb-3">Analyzed player telemetry data. Top performing events:</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between bg-gray-900/50 rounded-lg px-3 py-2">
                            <span className="text-white text-sm">🎮 Battle Royale Tournament</span>
                            <span className="text-green-400 text-sm font-semibold">2.4M players</span>
                          </div>
                          <div className="flex items-center justify-between bg-gray-900/50 rounded-lg px-3 py-2">
                            <span className="text-white text-sm">🎁 Double XP Weekend</span>
                            <span className="text-green-400 text-sm font-semibold">1.8M players</span>
                          </div>
                          <div className="flex items-center justify-between bg-gray-900/50 rounded-lg px-3 py-2">
                            <span className="text-white text-sm">🏆 Season Pass Launch</span>
                            <span className="text-green-400 text-sm font-semibold">1.5M players</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trusted by badge - positioned at very bottom, desktop only */}
          <div className="hidden xl:block fixed bottom-8 left-8 opacity-0 animate-fade-in z-10" style={{ animationDelay: "1.2s" }}>
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl px-4 py-2">
              <span className="text-xs text-gray-400 font-medium">Trusted by top tier gaming companies</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
