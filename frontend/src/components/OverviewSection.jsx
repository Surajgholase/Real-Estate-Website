import React from 'react';
import { Building2, Layers, MapPin, Calendar } from 'lucide-react';

const iconsData = {
  building: Building2,
  layers: Layers,
  'map-pin': MapPin,
  calendar: Calendar
};

const OverviewSection = ({ content }) => {
  if (!content) return null;

  return (
    <section id="overview" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{content.title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.highlights.map((item, index) => {
            const IconComponent = iconsData[item.icon] || Building2;
            return (
              <div 
                key={index} 
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <IconComponent className="w-7 h-7" />
                </div>
                <p className="text-sm font-medium text-slate-500 mb-1">{item.label}</p>
                <p className="text-xl font-bold text-slate-900">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
