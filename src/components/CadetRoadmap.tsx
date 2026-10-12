import React from 'react';
import { Target, Footprints, BookOpen, Award, CheckCircle2, ChevronRight, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';

interface CadetRoadmapProps {
  onOpenEnquiry: (exam?: string) => void;
  onOpenChecker?: () => void;
}

export const CadetRoadmap: React.FC<CadetRoadmapProps> = ({ onOpenEnquiry, onOpenChecker }) => {
  const steps = [
    {
      step: "01",
      title: "Check Eligibility & Physical Standards",
      tagline: "Free Sunday Assessment at Piler Ground",
      description: "Verify your age (17.5–21 Yrs), minimum height (168cm for Army GD, 157cm for Navy), and 10th/12th marks before enrolling.",
      actionLabel: "Check My Eligibility",
      actionType: "checker",
      highlight: "No Fees For Pre-Check",
    },
    {
      step: "02",
      title: "Choose Your Defence or Police Wing",
      tagline: "Army • Navy • Air Force • SSC GD • Police",
      description: "Select the exam batch tailored to your education and career goal with guidance from ex-servicemen coaches.",
      actionLabel: "View Course Packages",
      actionType: "courses",
      highlight: "Affordable ~₹10,000",
    },
    {
      step: "03",
      title: "Rigorous Dual Training & Hostel Life",
      tagline: "05:30 AM 1600m Drills + Daily Written Labs",
      description: "Live in our disciplined residential campus. Get daily protein-rich diet, 10 pull-up beam practice, and bilingual OMR written classes.",
      actionLabel: "See Daily Routine",
      actionType: "routine",
      highlight: "400m Dedicated Track",
    },
    {
      step: "04",
      title: "Clear Official Rally & Wear The Uniform",
      tagline: "100% Mentorship Till Selection",
      description: "Our instructors accompany cadets to official recruitment rally grounds, assist in document verification, and medical preparation.",
      actionLabel: "Enquire for 2026 Batch",
      actionType: "enquire",
      highlight: "130+ Selections",
    },
  ];

  const standards = [
    {
      wing: "Indian Army (Agniveer GD)",
      height: "168 cm (AP State Standard)",
      chest: "77 cm (+5 cm expansion)",
      run: "1600m in < 5m 30s (Group 1 - 60 Marks)",
      pullups: "10 Pull-Ups (40 Marks)",
    },
    {
      wing: "Indian Navy (Agniveer SSR/MR)",
      height: "157 cm Minimum",
      chest: "Proportionate (+5 cm expansion)",
      run: "1600m in 6m 30s",
      pullups: "20 Squats + 12 Push-ups",
    },
    {
      wing: "AP Police Constable (Civil/AR)",
      height: "167.6 cm (General/OBC)",
      chest: "86.3 cm (+5 cm expansion)",
      run: "1600m in 8 mins (Men) / 100m sprint",
      pullups: "Long Jump 3.80m",
    },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-t border-b border-slate-800">
      {/* Background Military Grid Accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Easy-to-understand roadmap */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <Footprints className="w-3.5 h-3.5 text-amber-400" />
            <span>Clear Roadmap For Aspirants & Parents</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-military">
            4 Simple Steps to Don the Uniform
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We break down the entire recruitment journey into transparent, disciplined steps so every cadet from a village or town knows exactly what to do.
          </p>
        </div>

        {/* 4 Interactive Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/60 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between group relative"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold text-amber-400/90 font-military">
                  {s.step}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {s.highlight}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {s.title}
                </h3>
                <div className="text-xs font-semibold text-amber-400">
                  {s.tagline}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Action Button */}
              <div>
                {s.actionType === 'checker' ? (
                  <button
                    onClick={() => {
                      if (onOpenChecker) onOpenChecker();
                      else scrollTo('eligibility');
                    }}
                    className="w-full py-2.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow"
                  >
                    <span>{s.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : s.actionType === 'courses' ? (
                  <button
                    onClick={() => scrollTo('courses')}
                    className="w-full py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 hover:border-amber-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>{s.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : s.actionType === 'routine' ? (
                  <button
                    onClick={() => scrollTo('routine')}
                    className="w-full py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>{s.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => onOpenEnquiry('2026 Defence Intake Batch')}
                    className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-lg"
                  >
                    <span>{s.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Physical Standards Cheat-Sheet (High-Value Clarity for Aspirants) */}
        <div className="bg-slate-950/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <HeartPulse className="w-4 h-4 text-emerald-400" />
                <span>Essential Physical Standards At A Glance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-military">
                Official Physical Efficiency Test (PET / PMT) Criteria
              </h3>
            </div>
            <div className="text-xs text-slate-300 bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl">
              📍 <strong>Daily 400m Track Drills</strong> at Piler Campus prepare cadets to clear these easily!
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            {standards.map((std) => (
              <div
                key={std.wing}
                className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-2.5 text-xs"
              >
                <div className="font-bold text-sm text-amber-300 border-b border-slate-800 pb-2">
                  {std.wing}
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Min. Height:</span>
                  <span className="font-semibold text-white">{std.height}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Chest Expansion:</span>
                  <span className="font-semibold text-white">{std.chest}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Running Benchmark:</span>
                  <span className="font-semibold text-emerald-400 text-right">{std.run}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Beam / Calisthenics:</span>
                  <span className="font-semibold text-amber-300">{std.pullups}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
