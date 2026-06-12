'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 py-16 md:py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="animate-float absolute top-[10%] left-[-20%] md:top-[15%] md:left-[10%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-blue-500/15 rounded-full blur-[60px] md:blur-[80px] -z-10" />
        <div className="animate-float absolute bottom-[5%] right-[-20%] md:bottom-[10%] md:right-[10%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-purple-500/15 rounded-full blur-[60px] md:blur-[80px] -z-10 delay-2000" />
        
        <div className="fade-in delay-100 inline-flex px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm mb-8 text-white backdrop-blur-md">
            ✨ Welcome to the future of tech
        </div>
        
        <h1 className="fade-in delay-200 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter mb-6 max-w-5xl px-2">
            Experience <span className="gradient-text">Innovation</span><br className="hidden sm:block" />
            Like Never Before
        </h1>
        
        <p className="fade-in delay-300 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed px-4">
            Tech360 Mini brings you the most premium, cutting-edge technology curated specifically for developers, creators, and visionaries.
        </p>
        
        <div className="fade-in delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0 justify-center">
            <Link href="/products" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 text-base md:text-lg rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] animate-[pulse-glow_3s_infinite]">
                    Shop Collection <span className="text-xl">→</span>
                </button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 text-base md:text-lg rounded-full bg-white/5 border border-white/10 text-white font-semibold transition-all hover:bg-white/10">
                    Discover Our Story
                </button>
            </Link>
        </div>
      </section>
      
      {/* Feature Section */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#121212] border-t border-white/5 relative">
          <div className="max-w-[1400px] mx-auto">
              <div className="text-center mb-16 md:mb-24 px-4">
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Why Choose Tech360?</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-xl leading-relaxed">We don't just sell products; we deliver experiences that empower your digital lifestyle.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {[
                      { icon: '⚡', title: 'Next-Gen Speed', desc: 'Experience unparalleled performance with the latest processors and cutting edge architecture.' },
                      { icon: '💎', title: 'Premium Design', desc: 'Crafted with absolute precision, our curated products offer sleek and modern aesthetics.' },
                      { icon: '🛡️', title: 'Secure & Reliable', desc: 'Built-in security features to protect what matters most to you, giving you peace of mind.' }
                  ].map((feature, i) => (
                      <div key={i} className="glass-panel p-8 md:p-12 text-center transition-transform duration-300 hover:-translate-y-3">
                          <div className="text-5xl md:text-6xl mb-6 inline-block drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">{feature.icon}</div>
                          <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
                          <p className="text-gray-400 leading-relaxed text-sm md:text-base">{feature.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </main>
  );
}