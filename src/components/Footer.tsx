import React from 'react';
import { Shield, MapPin, Phone, MessageSquare, Mail, Heart, ChevronRight, ExternalLink, Play } from 'lucide-react';
import { ACADEMY_INFO, SOCIAL_CHANNELS } from '../data/academyData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper patriotic stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-white to-emerald-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Closing Note */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-amber-500/80 flex items-center justify-center overflow-hidden shrink-0 shadow-md ring-2 ring-amber-500/20">
                <img
                  src="/logo.jpg"
                  alt="Maharshi Defence Academy Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-military">
                  MAHARSHI DEFENCE
                </span>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  Academy • Piler (AP)
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Dedicated to preparing disciplined, physically resilient, and academically confident soldiers, sailors, airmen, and police officers to serve the Republic of India with pride and honor.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-slate-200">
              <span className="text-amber-400 text-base">🇮🇳</span>
              <span>"The Brave Shall Inherit the Earth" • Service Before Self!</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-military">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'courses', label: 'Courses' },
                { id: 'compare', label: 'Compare Courses' },
                { id: 'roadmap', label: 'Cadet Roadmap' },
                { id: 'facilities', label: 'Facilities' },
                { id: 'routine', label: 'Cadet Routine' },
                { id: 'eligibility', label: 'Eligibility Tool' },
                { id: 'shaurya', label: 'Shaurya Wall' },
                { id: 'contact', label: 'Contact Us' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-amber-400 transition-colors text-left cursor-pointer flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Wings & Coaching */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-military">
              Coaching Wings
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Indian Army Agniveer GD & Tech</li>
              <li>• Indian Navy SSR & MR Sailors</li>
              <li>• Indian Air Force Agniveer Vayu</li>
              <li>• SSC GD Constable & CAPF Forces</li>
              <li>• AP & TS Police Constable / SI</li>
              <li>• NDA & CDS Officer Examinations</li>
              <li>• 1600m & 5km Physical Ground Drills</li>
            </ul>
          </div>

          {/* Col 4: Campus Address & Social */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-military">
              Campus Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{ACADEMY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${ACADEMY_INFO.phonePrimary}`} className="hover:text-white font-medium">
                  {ACADEMY_INFO.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: {ACADEMY_INFO.whatsappDisplay}
                </a>
              </div>
            </div>

            {/* Social Media Functional Channels */}
            <div className="pt-3 border-t border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider">
                  Connect With Our Official Channels
                </span>
                <span className="text-[10px] text-slate-500">Official Handles</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {SOCIAL_CHANNELS.map((ch) => (
                  <a
                    key={ch.id}
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${ch.name}: ${ch.handle} - ${ch.ctaText}`}
                    className="text-[11px] font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-400/60 hover:bg-slate-850 px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform"></span>
                    <span>{ch.name.split(' ')[0]}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-500 group-hover:text-amber-400" />
                  </a>
                ))}
              </div>

              {/* Quick direct action for YouTube */}
              <div className="mt-3">
                <a
                  href="https://www.youtube.com/@Maharshi-Defence-Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] text-red-400 hover:text-red-300 font-semibold"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Subscribe to YouTube (@Maharshi-Defence-Academy)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Maharshi Defence Academy, Piler. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Kammollapalli, Tirupati Road, Pileru, AP</span>
            <span>•</span>
            <span className="text-amber-500/90 font-medium">Empowering Middle-Class Aspirants</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
