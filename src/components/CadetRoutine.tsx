import React, { useState } from 'react';
import { Clock, Sun, Moon, Utensils, BookOpen, Footprints, Shield } from 'lucide-react';
import { CADET_ROUTINE } from '../data/academyData';

export const CadetRoutine: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'PT' | 'Diet' | 'Study' | 'Rest'>('All');

  const filteredRoutine = filter === 'All'
    ? CADET_ROUTINE
    : CADET_ROUTINE.filter(item => item.category === filter);

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'PT':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">🏃 Physical Ground</span>;
      case 'Diet':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">🍲 Nutrition & Mess</span>;
      case 'Study':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">📚 Academic Class</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">🌙 Roll Call & Rest</span>;
    }
  };

  const getCategoryBorder = (cat: string) => {
    switch (cat) {
      case 'PT': return 'border-l-4 border-l-emerald-500';
      case 'Diet': return 'border-l-4 border-l-amber-500';
      case 'Study': return 'border-l-4 border-l-blue-500';
      default: return 'border-l-4 border-l-slate-400';
    }
  };

  return (
    <section id="routine" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900 text-amber-400">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Strict Military Timetable</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-military">
            A Day in the Life of a Maharshi Cadet
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Discipline is the foundation of selection. Every hour is designed to build mental sharpness, stamina, and camaraderie.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 overflow-x-auto pb-2 w-full max-w-full no-scrollbar px-1">
          {(['All', 'PT', 'Diet', 'Study', 'Rest'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'All' && 'Full 24-Hour Routine'}
              {cat === 'PT' && '🏃 Ground Drills'}
              {cat === 'Diet' && '🍲 Mess & Diet'}
              {cat === 'Study' && '📚 Written Classes'}
              {cat === 'Rest' && '🌙 Rest & Lights Out'}
            </button>
          ))}
        </div>

        {/* Routine Timeline */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredRoutine.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-amber-400 hover:shadow-sm transition-all shadow-xs ${getCategoryBorder(item.category)}`}
            >
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-28 sm:w-36 text-xs sm:text-sm font-bold text-slate-900 shrink-0 font-military bg-slate-100 px-2.5 py-1 rounded text-center">
                  {item.time}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {item.activity}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>

              <div className="shrink-0 self-start sm:self-center">
                {getCategoryBadge(item.category)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
