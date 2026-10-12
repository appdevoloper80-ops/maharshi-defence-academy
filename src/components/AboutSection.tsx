import React from 'react';
import { Target, Compass, HeartHandshake, ShieldCheck, MapPin, Sparkles, Check, Users } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Mission for Middle-Class Youth",
      description: "Breaking the financial barrier. We provide tier-1 physical and written coaching so every capable farmer and middle-class aspirant can earn the uniform without family debt."
    },
    {
      icon: Compass,
      title: "Strategic Pileru Location",
      description: "Situated on the Tirupati Road at Kammollapalli Circle, Piler, easily reachable from Chittoor, Tirupati, Madanapalle, Rayachoty, and Kadapa districts."
    },
    {
      icon: ShieldCheck,
      title: "Ex-Servicemen & Certified Mentors",
      description: "Our drill instructors and academic faculty bring real military discipline, strict time management, and deep familiarity with recruitment rally procedures."
    },
    {
      icon: HeartHandshake,
      title: "Homely Care & Safety",
      description: "Dedicated residential hostel with healthy mess diet, personal mentorship, and character development in a secure, disciplined environment."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Serving The Nation • Empowering Youth</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-military">
            About Maharshi Defence Academy, Piler
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Founded with a patriotic vision to make top-tier defence recruitment coaching accessible, disciplined, and genuinely affordable for the youth of Andhra Pradesh.
          </p>
        </div>

        {/* Two-Column Story and Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Narrative and Strategic Location */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p className="text-base sm:text-lg">
                <strong className="text-slate-900 font-semibold">Maharshi Defence Academy</strong> is situated strategically near <strong className="text-emerald-800 font-semibold">Kammollapalli Circle along the main Tirupati Highway in Pileru, Andhra Pradesh</strong>. Our academy was created in direct response to the heavy commercialization of defence coaching centers in big cities that charge exorbitant fees beyond the reach of everyday families.
              </p>
              
              <p className="text-sm sm:text-base text-slate-600">
                We believe courage, patriotism, and physical stamina belong to hardworking youth from villages and small towns. That is why our comprehensive coaching—encompassing morning-to-night physical drills, structured academic classrooms, and full hostel facilities—starts at an economical fee structure of around <strong>₹10,000</strong>.
              </p>
            </div>

            {/* Location & District Connectivity Callout */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Strategic Location & Regional Connectivity:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                Direct bus connectivity from Tirupati (50 km), Madanapalle (50 km), Rayachoty (55 km), and Chittoor. Local auto-rickshaws connect Pileru APSRTC bus station directly to our Kammollapalli campus in under 5 minutes.
              </p>
            </div>

            {/* Quick Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Daily 1600m timed rally track training",
                "Dedicated hostel with clean beds & RO water",
                "Nutritious protein diet (eggs, milk & sprouts)",
                "Bilingual study notes (Telugu & English)",
                "Weekly OMR mock tests with rank analysis",
                "Pre-medical examination & physical screening"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right: The 4 Strategic Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-military tracking-wide">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
