import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-6">
      <div className="relative">
        <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
        <div className="absolute inset-0 w-16 h-16 bg-blue-600/5 rounded-full blur-xl"></div>
      </div>
      <div className="text-center animate-pulse">
        <p className="text-xl font-bold text-slate-900 mb-2">LuxeVilla Heights</p>
        <p className="text-sm text-slate-500 font-medium">Loading your luxury experience...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
