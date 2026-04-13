import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = ({ content }) => {
  if (!content) return null;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{content.title}</h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about LuxeVilla Heights.
          </p>
        </div>

        <div className="space-y-4">
          {content.items.map((item, index) => (
            <div 
              key={index} 
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-white shadow-xl shadow-slate-200/50 scale-[1.02]' : 'bg-white/50 hover:bg-white'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-lg font-bold text-slate-900">{item.question}</span>
                <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-slate-600 leading-relaxed pt-0">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
