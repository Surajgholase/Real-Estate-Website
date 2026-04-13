import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';

const UpdatesSection = ({ content }) => {
  if (!content) return null;

  return (
    <section id="updates" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{content.title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {content.items.map((item, index) => (
            <div key={index} className="flex gap-8 group pb-12 last:pb-0 relative">
              {/* Timeline line */}
              {index !== content.items.length - 1 && (
                <div className="absolute left-[27px] top-[56px] bottom-0 w-[2px] bg-slate-100 group-hover:bg-blue-100 transition-colors"></div>
              )}

              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full bg-blue-50 border-4 border-white shadow-md flex items-center justify-center text-blue-600 z-10 relative">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-3 pb-8">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md">
                    {item.phase}
                  </span>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                    <Clock className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900">{item.title}</h4>
                <p className="text-lg text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
