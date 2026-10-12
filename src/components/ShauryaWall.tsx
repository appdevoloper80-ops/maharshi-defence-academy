import React from 'react';
import { Shield, Award, Medal, Flag, Sparkles, Quote, Star } from 'lucide-react';

export const ShauryaWall: React.FC = () => {
  const warHeroes = [
    {
      name: "Captain Vikram Batra, PVC",
      unit: "13 Jammu and Kashmir Rifles",
      title: "Hero of Kargil War (Point 5140 & Point 4875)",
      quote: "Either I will come back after hoisting the Tricolor, or I will come back wrapped in it, but I will be back for sure.",
      war: "Operation Vijay 1999 (Kargil)",
    },
    {
      name: "Field Marshal Sam Manekshaw, MC",
      unit: "8th Gorkha Rifles",
      title: "First Field Marshal of the Indian Army",
      quote: "If a man says he is not afraid of dying, he is either lying or is a Gorkha.",
      war: "1971 Indo-Pak Liberation War",
    },
    {
      name: "Subedar Major Yogendra Singh Yadav, PVC",
      unit: "18 Grenadiers",
      title: "Youngest Recipient of the Param Vir Chakra",
      quote: "A soldier does not fight because he hates what is in front of him. He fights because he loves what he left behind.",
      war: "Tiger Hill 1999 (Kargil)",
    },
    {
      name: "Major Somnath Sharma, PVC",
      unit: "4 Kumaon Regiment",
      title: "First Recipient of the Param Vir Chakra",
      quote: "The enemy is only 50 yards from us. We are heavily outnumbered. I shall not withdraw an inch but fight to the last man and last round.",
      war: "Battle of Badgam 1947",
    },
  ];

  const wings = [
    {
      name: "Indian Army",
      motto: "Service Before Self",
      meaning: "Supreme dedication to the motherland above individual interests",
      insignia: "Crossed Swords & Lion Capital",
      role: "Land Warfare, Territorial Integrity & Counter-Insurgency",
      color: "from-amber-600/30 to-emerald-950/40 border-amber-500/40",
      accent: "text-amber-400",
    },
    {
      name: "Indian Navy",
      motto: "May the Lord of the Sea Be Auspicious Unto Us",
      meaning: "Maritime superiority and safeguarding ocean trade lanes",
      insignia: "Golden Anchor & Naval Crest",
      role: "Maritime Dominance, Blue Water Security & Submarine Operations",
      color: "from-sky-900/30 to-blue-950/40 border-sky-500/40",
      accent: "text-sky-400",
    },
    {
      name: "Indian Air Force",
      motto: "Touch the Sky with Glory",
      meaning: "Air dominance and swift aerial response in national defense",
      insignia: "Himalayan Eagle & Roundel",
      role: "Air Superiority, Precision Strike & Strategic Defense",
      color: "from-blue-900/30 to-indigo-950/40 border-blue-500/40",
      accent: "text-blue-300",
    },
    {
      name: "Paramilitary (BSF / CRPF / CISF)",
      motto: "Duty Unto Death & National Vigilance",
      meaning: "Unflinching commitment to border and internal safety",
      insignia: "Guard Shield & Laurel Wreath",
      role: "Border Surveillance, Internal Security & Vital Installation Protection",
      color: "from-amber-900/20 to-slate-900 border-amber-600/30",
      accent: "text-amber-300",
    },
    {
      name: "Andhra Pradesh Police",
      motto: "Peace, Order & Citizen Protection",
      meaning: "Protecting citizens, upholding rule of law, and serving society",
      insignia: "State Crest & Asoka Chakra",
      role: "Law & Order, Crime Investigation & Armed Reserve Battalions",
      color: "from-emerald-900/20 to-slate-900 border-emerald-600/30",
      accent: "text-emerald-400",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle Military Camo Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <Medal className="w-3.5 h-3.5 text-amber-400" />
            <span>Hall of Valor & Indian Defence Heritage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-military">
            Inspiration from the Bravehearts of the Nation
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            At Maharshi Defence Academy, we train not just the muscle and mind, but the warrior spirit. Every cadet is guided by the legendary heritage of the Indian Armed Forces.
          </p>
        </div>

        {/* Famous Chetwode Motto Box (Indian Military Academy Creed) */}
        <div className="mb-14 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/50 border-2 border-amber-500/50 rounded-2xl p-6 sm:p-8 text-center relative shadow-2xl">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[11px] font-bold px-4 py-0.5 rounded-full uppercase tracking-wider font-military shadow">
            The Chetwode Motto • Indian Military Academy (IMA)
          </div>

          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-4">
            The Eternal Creed of the Indian Officer
          </p>

          <blockquote className="space-y-3 text-slate-200 text-sm sm:text-base md:text-lg font-serif italic max-w-4xl mx-auto">
            <p>
              "The safety, honour and welfare of your country come first, always and every time."
            </p>
            <p className="text-amber-300 font-semibold">
              "The honour, welfare and comfort of the men you command come next."
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              "Your own ease, comfort and safety come last, always and every time."
            </p>
          </blockquote>
          
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-sans uppercase tracking-wider">
            Inscribed at the Chetwode Hall, Dehradun • Inculcated in every Maharshi Defence Cadet
          </div>
        </div>

        {/* Param Vir Chakra Heroes Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-military">
              Param Vir Chakra Heroes & Quotes of Courage
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Real legends whose sacrifice defines the ethos of Indian Defence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {warHeroes.map((hero, index) => (
              <div
                key={index}
                className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 relative group shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                        {hero.war}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-white mt-1.5 font-military group-hover:text-amber-400 transition-colors">
                        {hero.name}
                      </h4>
                      <p className="text-xs text-amber-500 font-medium">
                        {hero.unit}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 group-hover:scale-110 transition-transform">
                      <Medal className="w-5 h-5" />
                    </div>
                  </div>

                  <blockquote className="text-sm text-slate-200 italic border-l-2 border-amber-500 pl-3 leading-relaxed">
                    "{hero.quote}"
                  </blockquote>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px] text-slate-300 font-medium">{hero.title}</span>
                  <span className="text-amber-400 text-xs font-bold">Param Vir Chakra</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tri-Service & Police Wings Overview Cards */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-military">
              Wings Trained at Maharshi Defence Academy
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select your service wing and train under tailored physical and written syllabi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {wings.map((wing, index) => (
              <div
                key={index}
                className={`bg-gradient-to-b ${wing.color} bg-slate-900/90 rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-base font-black ${wing.accent} font-military`}>
                      {wing.name}
                    </span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-700">
                      {wing.insignia}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      Motto: <span className={wing.accent}>"{wing.motto}"</span>
                    </div>
                    <div className="text-[11px] text-slate-300 italic">
                      Meaning: {wing.meaning}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {wing.role}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Piler Coaching:</span>
                  <span className="text-amber-400 font-semibold">Active 2026 Batch</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
