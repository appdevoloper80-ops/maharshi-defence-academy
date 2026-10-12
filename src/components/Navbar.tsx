import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Menu, X, Shield, ChevronRight, Award, Play } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface NavbarProps {
  onOpenEnquiry: (prefillExam?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section on scroll
      const sections = ['home', 'about', 'courses', 'compare', 'facilities', 'routine', 'eligibility', 'reviews', 'contact', 'connect'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Compare', href: '#compare' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Routine', href: '#routine' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'Hall of Valor', href: '#shaurya' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 transition-all duration-200">
      {/* Top Notification & Hotline Bar - sleek on desktop, tucked away on mobile to keep navbar pinned */}
      <div className="hidden sm:block bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wide">
              OFFICIAL DEFENCE PORTAL
            </span>
            <span className="hidden md:inline text-slate-300 text-xs">
              Pileru • Kammollapalli Circle, Tirupati Highway (AP)
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://www.youtube.com/@Maharshi-Defence-Academy"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-red-400 hover:text-red-300 transition-colors font-semibold text-xs"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Drill Videos</span>
            </a>
            <a
              href={`tel:${ACADEMY_INFO.phonePrimary}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold">{ACADEMY_INFO.phonePrimary}</span>
            </a>
            <a
              href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Maharshi Defence Academy, I want to enquire about defence coaching & hostel admissions in Piler.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Permanently Pinned at the top */}
      <div className={`max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 transition-all duration-200 ${isScrolled ? 'py-2 sm:py-2.5' : 'py-2.5 sm:py-3.5'}`}>
        <div className="flex items-center justify-between gap-2">
          
          {/* Official Indian Defence Crest & Academy Name */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink">
            <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950 flex items-center justify-center text-amber-400 shadow-md border-2 border-amber-500 group-hover:scale-105 transition-transform shrink-0 relative overflow-hidden ring-2 ring-amber-500/30">
              <img
                src="/logo.jpg"
                alt="Maharshi Defence Academy Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap sm:flex-wrap">
                <span className="text-sm xs:text-base sm:text-xl lg:text-2xl font-black tracking-tight text-slate-950 font-military truncate">
                  MAHARSHI
                </span>
                <span className="text-sm xs:text-base sm:text-xl lg:text-2xl font-black text-amber-600 font-military truncate">
                  DEFENCE ACADEMY
                </span>
              </div>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-600 font-medium flex items-center gap-1 truncate">
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 inline shrink-0" />
                <span className="truncate">Pileru • Tirupati Highway (AP)</span>
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all relative ${
                    isActive
                      ? 'text-amber-900 bg-amber-500/20 font-black'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all text-xs flex items-center gap-1.5 cursor-pointer uppercase tracking-wider font-military"
            >
              <Award className="w-4 h-4 text-slate-950" />
              <span>Admission Enquiry</span>
            </button>
          </div>

          {/* Mobile Actions Header Bar (Call + Enquire + Toggle Menu) */}
          <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
            <a
              href={`tel:${ACADEMY_INFO.phonePrimary}`}
              className="p-1.5 xs:p-2 text-slate-700 hover:text-amber-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Call Academy Helpline"
              title="Call Academy Helpline"
            >
              <Phone className="w-4 h-4 text-amber-600" />
            </a>
            <button
              onClick={() => onOpenEnquiry()}
              className="bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black px-2.5 xs:px-3 py-1.5 rounded-lg text-[11px] xs:text-xs tracking-wide shadow-sm transition-all"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 xs:p-2 rounded-lg text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="lg:hidden relative z-50 bg-white border-b border-slate-200 shadow-2xl px-4 pt-2 pb-6 animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col space-y-1 py-2">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-500/15 text-slate-950 font-bold border-l-4 border-amber-500'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-amber-600 translate-x-0.5' : 'text-slate-400'}`} />
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-4 rounded-lg text-center flex items-center justify-center gap-2 text-sm shadow cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>Join Now / Admission Enquiry</span>
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <a
                href={`tel:${ACADEMY_INFO.phonePrimary}`}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-900 text-white rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Maharshi Defence Academy, I want to enquire about admissions in Piler.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 bg-emerald-600 text-white rounded-lg"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Official Social Channels shortcut for mobile */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
              <a
                href="https://www.youtube.com/@Maharshi-Defence-Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>YouTube Drills</span>
              </a>
              <a
                href="#connect"
                onClick={(e) => handleNavClick(e, '#connect')}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold border border-slate-200"
              >
                <span>All Channels</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </>
    )}
    </header>
  );
};
