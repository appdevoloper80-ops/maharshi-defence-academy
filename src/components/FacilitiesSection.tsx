import React from 'react';
import { Building2, Utensils, IndianRupee, Award, CheckCircle2, ShieldAlert, Sparkles, Check } from 'lucide-react';
import { FACILITIES } from '../data/academyData';

interface FacilitiesSectionProps {
  onOpenEnquiry: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenEnquiry }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-blue-600" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-emerald-600" />;
      case 'BadgePercent': return <IndianRupee className="w-6 h-6 text-amber-600" />;
      case 'Award': return <Award className="w-6 h-6 text-indigo-600" />;
      default: return <Award className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="facilities" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Campus Amenities & Life in Piler</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-military">
            Facilities & Student Life
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Praised by hundreds of students across Rayalaseema for disciplined accommodation, nutritious mess food, and an unbeatable economical fee model.
          </p>
        </div>

        {/* 4 Core Facilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                    {getIcon(facility.icon)}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${facility.badgeColor}`}>
                    {facility.stat}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {facility.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-military">
                    {facility.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {facility.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  {facility.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {facility.statLabel}
                </span>
                <button
                  onClick={onOpenEnquiry}
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 cursor-pointer"
                >
                  <span>Enquire Details</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Value Comparison Box: Why Middle-Class Families Trust Maharshi */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase px-3 py-1 rounded-full">
                <IndianRupee className="w-3.5 h-3.5" />
                <span>The Middle-Class Advantage</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold font-military">
                Why Pay ₹40,000–₹60,000 in Metros When Piler Offers Better Rally Results?
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Many families in Chittoor, Tirupati, and Kadapa fall into debt paying massive advance fees at corporate academies in big cities where individual care is missing. At <strong>Maharshi Defence Academy, Piler</strong>, every single rupee counts toward direct student training:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent fee packages from ~₹10,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clean hostel & home-cooked healthy food</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Close to home for easy parent visits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Daily personal attention on weak running cadets</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 text-center space-y-4 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Admission Packages
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 font-military">
                Starting ₹10,000
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                Includes study material, daily ground drills, weekly mock tests, and physical kit access.
              </p>
              <button
                onClick={onOpenEnquiry}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-lg text-sm transition-all shadow-md cursor-pointer"
              >
                Apply for New Batch Admission
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
