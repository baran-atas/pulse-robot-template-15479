import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        {/* Animated Poliara Logo */}
        <div className="animate-pulse-slow">
          <svg className="w-20 h-20 mx-auto mb-4" viewBox="0 0 32 32" fill="none">
            <path d="M8 12L16 8L24 12L16 16L8 12Z" fill="url(#grad1)" />
            <path d="M8 12V20L16 24V16L8 12Z" fill="url(#grad2)" opacity="0.8" />
            <path d="M24 12V20L16 24V16L24 12Z" fill="url(#grad3)" opacity="0.6" />
            <defs>
              <linearGradient id="grad1" x1="8" y1="8" x2="24" y2="16">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="grad2" x1="8" y1="12" x2="16" y2="24">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
              <linearGradient id="grad3" x1="24" y1="12" x2="16" y2="24">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Poliara Text */}
        <h1 className="text-3xl font-bold text-white mb-4 animate-fade-in">
          Poliara
        </h1>
        
        {/* Loading Bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-pulse-400 to-purple-600 animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

