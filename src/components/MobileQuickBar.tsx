import React from 'react';
import { Phone, MessageSquare, CheckCircle, Award } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface MobileQuickBarProps {
  onOpenEnquiry: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenEnquiry }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-2xl px-2 py-1.5 safe-area-pb">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1 items-center text-center">
        {/* Direct Call Commandant */}
        <a
          href={`tel:${ACADEMY_INFO.phonePrimary}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-300 hover:text-amber-400 active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 mb-0.5 shadow-xs">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">Call Academy</span>
        </a>

        {/* Instant WhatsApp */}
        <a
          href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Maharshi Defence Academy, I want to enquire about defence coaching & hostel admissions in Piler.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-300 hover:text-emerald-400 active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-600/40 flex items-center justify-center text-emerald-400 mb-0.5 shadow-xs">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Check Eligibility Tool */}
        <button
          onClick={() => handleScrollTo('eligibility')}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-300 hover:text-sky-400 active:scale-95 transition-transform cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-sky-950/80 border border-sky-600/40 flex items-center justify-center text-sky-400 mb-0.5 shadow-xs">
            <CheckCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">Eligibility</span>
        </button>

        {/* Instant Admission Enquiry */}
        <button
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-amber-300 hover:text-amber-200 active:scale-95 transition-transform cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold mb-0.5 shadow-md shadow-amber-500/20">
            <Award className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold text-amber-400 tracking-tight">Join / Apply</span>
        </button>
      </div>
    </div>
  );
};
