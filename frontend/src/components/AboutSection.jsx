import React from 'react';

const AboutSection = ({ content }) => {
  if (!content) return null;

  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-6">
              {content.stats.map((stat, index) => (
                <div key={index} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                  <div className="text-4xl font-extrabold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl font-bold leading-tight">{content.title}</h2>
            <p className="text-xl text-slate-400 leading-relaxed italic">
              "We don't just build homes; we build legacies. Our mission is to create spaces that define the future of urban living."
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              {content.description}
            </p>
            <div className="pt-4">
               <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all">
                  Our Portfolio
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
