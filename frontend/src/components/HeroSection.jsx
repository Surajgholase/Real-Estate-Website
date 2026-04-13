import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = ({ content }) => {
  if (!content) return null;

  return (
    <div className="relative min-height-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 tracking-wide uppercase">
                {content.badge}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                {content.title}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                {content.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group">
                {content.ctaText}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                Virtual Tour
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500">
                <span className="text-slate-900 font-bold">1.2k+</span> people enquired this month
              </p>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Real Estate" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/70">Starting From</p>
                    <p className="text-2xl font-bold">₹1.25 Cr*</p>
                  </div>
                  <div className="h-10 w-[1px] bg-white/30"></div>
                  <div>
                    <p className="text-sm font-medium text-white/70">Configuration</p>
                    <p className="text-2xl font-bold">2, 3 & 4 BHK</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Float cards */}
            <div className="absolute -top-6 -right-6 p-5 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Property Status</p>
                <p className="text-sm font-bold text-slate-900">RERA Approved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
