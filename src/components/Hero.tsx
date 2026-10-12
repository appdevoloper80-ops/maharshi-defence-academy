import React from 'react';
import { Shield, ChevronRight, CheckCircle2, Award, Users, Utensils, MapPin, IndianRupee, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { ACADEMY_INFO, TRUST_STATS } from '../data/academyData';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white overflow-hidden pt-6 pb-16 lg:py-16">
      {/* Background Decorative Pattern & Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Patriotic Saffron & Olive Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Official Indian Defence Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-amber-500/50 px-3.5 py-1.5 rounded-full text-xs text-slate-200 shadow-md backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-amber-400 font-bold tracking-wider uppercase font-military">
              GOVT. REGD DEFENCE ACADEMY (AP)
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 font-medium">Kammollapalli Circle, Pileru</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-600/40 text-emerald-300 text-xs font-semibold">
            <span>⚔️ Army GD</span>
            <span>•</span>
            <span>⚓ Navy SSR/MR</span>
            <span>•</span>
            <span>✈️ Air Force</span>
            <span>•</span>
            <span>👮 Police</span>
          </div>
        </div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Army Vibe & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-400 font-military flex items-center gap-2">
                <span className="h-0.5 w-6 bg-amber-500 inline-block"></span>
                <span>DEFENCE OF THE NATION • SERVICE BEFORE SELF • PILER CAMPUS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-military">
                Serve the Nation in Uniform with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                  Maharshi Defence Academy
                </span>
                , Piler.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Andhra Pradesh's premier residential recruitment hub for <strong className="text-white font-semibold">rural & middle-class youth</strong>. Rigorous 1600m timed rally track training, 10 pull-up beam drills, bilingual written classroom coaching, and hygienic on-campus hostel at an affordable fee of ~₹10,000.
            </p>

            {/* Key Quick Highlight Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>05:30 AM Daily 1600m Track Drills</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bilingual Written Coaching (Telugu & Eng)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nutritious Mess (Boiled Eggs & Sprouts)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>130+ Selections in Defence & Police</span>
              </div>
            </div>

            {/* Quick Action Command Deck (Easy for Aspirants & Parents) */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection('courses')}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer group uppercase tracking-wider font-military"
              >
                <span>Explore 2026 Batches</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('roadmap')}
                className="bg-slate-800/90 hover:bg-slate-700 text-white font-semibold px-5 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-1.5 text-sm cursor-pointer"
              >
                <span>4-Step Roadmap</span>
              </button>

              <button
                onClick={() => scrollToSection('eligibility')}
                className="bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 font-semibold px-5 py-3.5 rounded-xl border border-emerald-600/40 hover:border-emerald-500 transition-all flex items-center justify-center gap-1.5 text-sm cursor-pointer"
              >
                <span>Check Eligibility</span>
              </button>
            </div>

            {/* Quick Contact Chips for Instant Inquiry */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={`tel:${ACADEMY_INFO.phonePrimary}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Commandant: {ACADEMY_INFO.phonePrimary}</span>
              </a>
              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Maharshi Defence Academy Piler, I want to enquire about defence coaching and hostel admissions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/50 text-xs font-bold text-emerald-300 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Admission Cell: {ACADEMY_INFO.whatsappDisplay}</span>
              </a>
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Kammollapalli Circle, Tirupati Highway, Pileru (517214)</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="text-emerald-400 font-semibold">Free Sunday Medical Screening</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Card / Academy Credential Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/95 p-6 sm:p-7 border border-slate-700/80 shadow-2xl backdrop-blur-md">
              
              {/* Badge Overhang */}
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Rayalaseema's Trusted</span>
              </div>

              <div className="flex items-center gap-4 pb-5 border-b border-slate-700/60">
                <div className="w-14 h-14 rounded-full bg-slate-950 flex items-center justify-center font-bold shadow-md border-2 border-amber-500 overflow-hidden shrink-0 ring-2 ring-amber-500/30">
                  <img
                    src="/logo.jpg"
                    alt="Maharshi Defence Academy Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-military">MAHARSHI CADET WINGS</h3>
                  <p className="text-xs text-slate-400">Army • Navy • Air Force • Police • SSC GD</p>
                </div>
              </div>

              {/* Training Features Matrix */}
              <div className="py-4 space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/60 border border-slate-700/40">
                  <div className="p-2 rounded-md bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                    <IndianRupee className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Affordable Fee Guarantee</h4>
                    <p className="text-xs text-slate-300">Accessible to middle-class and farmer families without debt pressure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/60 border border-slate-700/40">
                  <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Daily 1600m & Obstacle Grounds</h4>
                    <p className="text-xs text-slate-300">Dedicated 400m track, 9-ft ditch, zig-zag balance, and pull-up beams.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/60 border border-slate-700/40">
                  <div className="p-2 rounded-md bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">On-Campus Hostel & Mess</h4>
                    <p className="text-xs text-slate-300">Clean rooms, RO water, and daily protein diet (eggs, sprouts, milk).</p>
                  </div>
                </div>
              </div>

              {/* Quick Batch Inquiry Action inside Hero Card */}
              <div className="pt-3 border-t border-slate-700/60">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Free Campus Visit & Counseling</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Trust Badges / Highlights Bar (Bottom of Hero) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {TRUST_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 sm:p-5 hover:border-amber-500/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-military tracking-wide">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
