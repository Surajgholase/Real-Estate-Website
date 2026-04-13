import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = ({ content }) => {
  if (!content) return null;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{content.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {content.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-lg font-bold text-slate-900">{content.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-lg font-bold text-slate-900">{content.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Office Address</p>
                  <p className="text-lg font-bold text-slate-900 leading-snug">{content.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Send className="w-6 h-6 text-blue-600" />
              Send a Message
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Member</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea placeholder="I'm interested in the 3 BHK apartments..." className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all min-h-[120px]"></textarea>
              </div>
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-200">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
