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
        <div className="animate-pulse-slow mb-6">
          <img 
            src="/poliara-logo.png" 
            alt="Poliara Logo" 
            className="w-24 h-24 mx-auto object-contain"
          />
        </div>
        
        {/* Loading Bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-pulse-400 to-purple-600 animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

