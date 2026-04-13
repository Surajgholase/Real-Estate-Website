import React from 'react';
import { Train, Plane, GraduationCap, Hospital, ShoppingBag, Briefcase } from 'lucide-react';

const icons = {
  train: Train,
  plane: Plane,
  'graduation-cap': GraduationCap,
  hospital: Hospital,
  'shopping-bag': ShoppingBag,
  briefcase: Briefcase
};

const ConnectivitySection = ({ content }) => {
  if (!content) return null;

  return (
    <section id="connectivity" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">{content.title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {content.description}
            </p>
          </div>
          <div className="hidden md:block">
             <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-semibold text-slate-600 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Strategic Location
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item, index) => {
            const Icon = icons[item.icon] || MapPin;
            return (
              <div key={index} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{item.label}</h4>
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    {item.distance} away
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConnectivitySection;
