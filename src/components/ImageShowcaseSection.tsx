
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-28 bg-black" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
            <span>Platform</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-white">How </span>
            <span className="bg-gradient-to-r from-pulse-400 to-pulse-600 bg-clip-text text-transparent">It Works</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
            Your data pipeline simplified
          </p>
        </div>
        
        {/* Animated Data Pipeline Flow */}
        <div className="max-w-7xl mx-auto animate-on-scroll">
          <div className="hidden lg:flex items-center justify-between gap-12 xl:gap-20 relative py-8">
            
            {/* Left: Data Sources with inline arrows */}
            <div className="flex-shrink-0">
              <h3 className="text-white font-semibold text-lg mb-8">Data Sources</h3>
              <div className="space-y-6">
                {['BigQuery', 'Snowflake', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redshift'].map((source, idx) => (
                  <div key={source} className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: `${0.1 * idx}s` }}>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl px-6 py-3 flex items-center gap-3 min-w-[220px]">
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{source}</span>
                    </div>
                    {/* Arrow */}
                    <div className="flex items-center gap-1">
                      <div className="w-20 xl:w-32 h-0.5 bg-gradient-to-r from-gray-700 via-pulse-500 to-purple-600 animate-pulse" style={{ animationDelay: `${idx * 0.2}s` }}></div>
                      <svg className="w-5 h-5 text-pulse-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: `${idx * 0.2}s` }}>
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle: Poliara Hub */}
            <div className="flex-shrink-0 z-10">
              <div className="bg-gradient-to-br from-pulse-600/20 to-purple-600/20 border-2 border-pulse-400/50 rounded-3xl p-10 text-center ring-4 ring-pulse-500/20 shadow-2xl shadow-pulse-500/30">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-pulse-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pulse-500/50 animate-pulse-slow">
                  <svg className="w-14 h-14" viewBox="0 0 32 32" fill="none">
                    <path d="M8 12L16 8L24 12L16 16L8 12Z" fill="white" />
                    <path d="M8 12V20L16 24V16L8 12Z" fill="white" opacity="0.7" />
                    <path d="M24 12V20L16 24V16L24 12Z" fill="white" opacity="0.5" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl mb-2">Poliara</h3>
                <p className="text-gray-300 text-sm">Your AI Data Analyst</p>
              </div>
            </div>

            {/* Arrow from Poliara to Dashboard - simple inline arrow */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-24 xl:w-40 h-0.5 bg-gradient-to-r from-purple-600 via-green-500 to-emerald-600 animate-pulse"></div>
              <svg className="w-6 h-6 text-green-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Right: Company Dashboard with Looping Chat */}
            <div className="flex-shrink-0 z-10">
              <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-green-500/30 rounded-3xl p-6 min-w-[320px] shadow-2xl shadow-green-500/10">
                {/* Dashboard Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-green-500/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Your Dashboard</h3>
                    <p className="text-green-400 text-xs flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Live Analytics
                    </p>
                  </div>
                </div>
                
                {/* Looping Chat Conversations */}
                <div className="relative min-h-[300px]">
                  {/* Conversation 1: Revenue - Question appears first */}
                  <div className="absolute inset-0 space-y-3">
                    <div className="flex justify-end animate-question-1">
                      <div className="max-w-[85%] bg-green-600 rounded-xl rounded-tr-sm px-3 py-2">
                        <p className="text-white text-xs">Show me monthly revenue breakdown</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 items-start animate-answer-1">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="max-w-[85%] bg-gray-800 rounded-xl rounded-tl-sm px-3 py-2">
                        <p className="text-gray-300 text-xs mb-2">Here's your revenue analysis:</p>
                        <div className="space-y-1.5">
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/20">
                            <div className="text-xs text-gray-400">January</div>
                            <div className="text-green-400 font-bold text-sm">$142K</div>
                          </div>
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/20">
                            <div className="text-xs text-gray-400">February</div>
                            <div className="text-green-400 font-bold text-sm">$168K</div>
                          </div>
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/20">
                            <div className="text-xs text-gray-400">March</div>
                            <div className="text-green-400 font-bold text-sm">$195K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Conversation 2: User Retention - Question appears first */}
                  <div className="absolute inset-0 space-y-3">
                    <div className="flex justify-end animate-question-2">
                      <div className="max-w-[85%] bg-green-600 rounded-xl rounded-tr-sm px-3 py-2">
                        <p className="text-white text-xs">What's our user retention rate?</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 items-start animate-answer-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="max-w-[85%] bg-gray-800 rounded-xl rounded-tl-sm px-3 py-2">
                        <p className="text-gray-300 text-xs mb-2">User retention data:</p>
                        <div className="space-y-1.5">
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/20">
                            <div className="text-xs text-gray-400">Day 7 Retention</div>
                            <div className="text-green-400 font-bold text-sm">68%</div>
                          </div>
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/20">
                            <div className="text-xs text-gray-400">Day 30 Retention</div>
                            <div className="text-green-400 font-bold text-sm">42%</div>
                          </div>
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/20">
                            <div className="text-xs text-gray-400">Day 90 Retention</div>
                            <div className="text-green-400 font-bold text-sm">28%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile/Tablet View */}
          <div className="lg:hidden flex flex-col items-center gap-12">
            {/* Data Sources */}
            <div className="w-full max-w-md">
              <h3 className="text-white font-semibold text-lg mb-6 text-center">Data Sources</h3>
              <div className="space-y-4">
                {['BigQuery', 'Snowflake', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redshift'].map((source, idx) => (
                  <div key={source} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.1 * idx}s` }}>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl px-6 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Down arrow */}
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-pulse-500 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Poliara */}
            <div className="w-full max-w-md">
              <div className="bg-gradient-to-br from-pulse-600/20 to-purple-600/20 border-2 border-pulse-400/50 rounded-3xl p-8 text-center ring-4 ring-pulse-500/20 shadow-2xl shadow-pulse-500/30">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pulse-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pulse-500/50 animate-pulse-slow">
                  <svg className="w-12 h-12" viewBox="0 0 32 32" fill="none">
                    <path d="M8 12L16 8L24 12L16 16L8 12Z" fill="white" />
                    <path d="M8 12V20L16 24V16L8 12Z" fill="white" opacity="0.7" />
                    <path d="M24 12V20L16 24V16L24 12Z" fill="white" opacity="0.5" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl mb-2">Poliara</h3>
                <p className="text-gray-300 text-sm">Your AI Data Analyst</p>
              </div>
            </div>

            {/* Down arrow */}
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-green-500 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Dashboard */}
            <div className="w-full max-w-md">
              <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-green-500/30 rounded-3xl p-6 shadow-2xl shadow-green-500/10">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-green-500/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Your Dashboard</h3>
                    <p className="text-green-400 text-xs flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Live Analytics
                    </p>
                  </div>
                </div>
                
                <div className="relative min-h-[300px]">
                  {/* Conversation 1 */}
                  <div className="absolute inset-0 space-y-3">
                    <div className="flex justify-end animate-question-1">
                      <div className="max-w-[85%] bg-green-600 rounded-xl rounded-tr-sm px-3 py-2">
                        <p className="text-white text-xs">Show me monthly revenue breakdown</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 items-start animate-answer-1">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="max-w-[85%] bg-gray-800 rounded-xl rounded-tl-sm px-3 py-2">
                        <p className="text-gray-300 text-xs mb-2">Here's your revenue analysis:</p>
                        <div className="space-y-1.5">
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/20">
                            <div className="text-xs text-gray-400">January</div>
                            <div className="text-green-400 font-bold text-sm">$142K</div>
                          </div>
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/20">
                            <div className="text-xs text-gray-400">February</div>
                            <div className="text-green-400 font-bold text-sm">$168K</div>
                          </div>
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/20">
                            <div className="text-xs text-gray-400">March</div>
                            <div className="text-green-400 font-bold text-sm">$195K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Conversation 2 */}
                  <div className="absolute inset-0 space-y-3">
                    <div className="flex justify-end animate-question-2">
                      <div className="max-w-[85%] bg-green-600 rounded-xl rounded-tr-sm px-3 py-2">
                        <p className="text-white text-xs">What's our user retention rate?</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 items-start animate-answer-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="max-w-[85%] bg-gray-800 rounded-xl rounded-tl-sm px-3 py-2">
                        <p className="text-gray-300 text-xs mb-2">User retention data:</p>
                        <div className="space-y-1.5">
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/20">
                            <div className="text-xs text-gray-400">Day 7 Retention</div>
                            <div className="text-green-400 font-bold text-sm">68%</div>
                          </div>
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/20">
                            <div className="text-xs text-gray-400">Day 30 Retention</div>
                            <div className="text-green-400 font-bold text-sm">42%</div>
                          </div>
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/20">
                            <div className="text-xs text-gray-400">Day 90 Retention</div>
                            <div className="text-green-400 font-bold text-sm">28%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
