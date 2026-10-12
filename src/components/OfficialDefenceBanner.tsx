import React, { useState, useEffect } from 'react';
import { Shield, Bell, CheckCircle2, Award, Phone, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const OfficialDefenceBanner: React.FC = () => {
  const [currentTickerIdx, setCurrentTickerIdx] = useState(0);

  const officialBulletins = [
    {
      badge: "LIVE ADMISSION",
      text: "2026 Agniveer Army, Navy SSR/MR & AP Police Batches Open at Piler Campus",
      highlight: "Hostel + 400m Ground Included",
    },
    {
      badge: "PHYSICAL RALLY",
      text: "Daily 05:30 AM 1600m Timed Track Drills & 10 Pull-Ups Obstacle Conditioning",
      highlight: "Target < 5m 25s",
    },
    {
      badge: "FREE SCREENING",
      text: "Every Sunday Free Pre-Medical Screening & Height/Chest Assessment for Aspirants",
      highlight: "Open to All Rural Cadets",
    },
    {
      badge: "AFFORDABLE FEE",
      text: "Special Middle-Class Fee Subsidy ~₹10,000 for Deserving Village & Farmer Aspirants",
      highlight: "No Hidden Costs",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTickerIdx((prev) => (prev + 1) % officialBulletins.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [officialBulletins.length]);

  return (
    <div className="w-full bg-slate-950 text-white border-b border-amber-500/40 relative z-50">
      {/* Indian National Flag Subtle Tricolor Ribbon Bar */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-[#FF9933]"></div> {/* Saffron */}
        <div className="flex-1 bg-[#FFFFFF]"></div> {/* White */}
        <div className="flex-1 bg-[#138808]"></div> {/* India Green */}
      </div>

      {/* Official Government Credential & Tri-Service Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1 sm:py-2">
        <div className="flex flex-row items-center justify-between gap-2 text-xs">
          
          {/* Left: Official Portal Verification & Tri-Service Mottos in English */}
          <div className="flex items-center gap-2 sm:gap-3 text-slate-300 shrink-0">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40 tracking-wider text-[10px] sm:text-[11px]">
              <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
              <span className="hidden xs:inline sm:inline">OFFICIAL DEFENCE ACADEMY</span>
              <span className="xs:hidden">DEFENCE ACADEMY</span>
            </div>

            <span className="hidden sm:inline text-slate-600">|</span>

            {/* Tri-Service Mottos in Pure English */}
            <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-300 font-medium">
              <span className="text-amber-300 font-semibold">Army: Service Before Self</span>
              <span className="text-slate-600">•</span>
              <span className="text-sky-300 font-semibold">Navy: May the Lord of the Sea Be Auspicious</span>
              <span className="text-slate-600">•</span>
              <span className="text-blue-300 font-semibold">Air Force: Touch the Sky with Glory</span>
            </div>
          </div>

          {/* Center / Right: Live Official Bulletin Ticker */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            <div className="flex items-center gap-2 min-w-0 flex-1 lg:flex-initial">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-700/60 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping"></span>
                <span>{officialBulletins[currentTickerIdx].badge}</span>
              </span>
              <span className="text-[11px] text-slate-200 truncate">
                {officialBulletins[currentTickerIdx].text} -{' '}
                <strong className="text-amber-400 font-semibold">
                  {officialBulletins[currentTickerIdx].highlight}
                </strong>
              </span>
            </div>

            {/* Direct Call Commandant chip */}
            <a
              href={`tel:${ACADEMY_INFO.phonePrimary}`}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-[11px] font-bold transition-colors shrink-0"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Helpline: {ACADEMY_INFO.phonePrimary}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
