import React from 'react';
import { 
  Waves, Dumbbell, Trees, Shield, 
  Coffee, Car, Wifi, Gamepad2 
} from 'lucide-react';

const icons = {
  waves: Waves,
  dumbbell: Dumbbell,
  trees: Trees,
  shield: Shield,
  coffee: Coffee,
  car: Car,
  wifi: Wifi,
  'gamepad-2': Gamepad2
};

const AmenitiesSection = ({ content }) => {
  if (!content) return null;

  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{content.title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {content.items.map((item, index) => {
            const Icon = icons[item.icon] || Shield;
            return (
              <div key={index} className="group flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                  <Icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h4>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
