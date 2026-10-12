import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, Shield, ArrowRight, UserCheck } from 'lucide-react';

interface EligibilityCheckerProps {
  onSelectProgram: (programName: string) => void;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ onSelectProgram }) => {
  const [age, setAge] = useState<number>(19);
  const [education, setEducation] = useState<string>('12th');
  const [height, setHeight] = useState<number>(168);
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');

  // Calculation of eligible exams
  const getEligibleExams = () => {
    const list = [];

    // Army GD
    if (age >= 17.5 && age <= 21 && height >= 166) {
      list.push({
        title: "Indian Army Agniveer (GD)",
        reason: "Matches 10th+ requirement and standard rally height criteria (166cm+).",
        wing: "Army"
      });
    }

    // Army Technical & Clerk
    if (age >= 17.5 && age <= 21 && (education === '12th' || education === 'Degree') && height >= 162) {
      list.push({
        title: "Indian Army Clerk / Storekeeper & Tech",
        reason: "Requires Intermediate qualification and minimum 162cm height.",
        wing: "Army"
      });
    }

    // Navy SSR / MR
    if (age >= 17.5 && age <= 21 && height >= 157) {
      list.push({
        title: "Indian Navy (Agniveer SSR / MR)",
        reason: "Eligible for online CBT and 1.6km physical fitness test.",
        wing: "Navy"
      });
    }

    // Air Force Vayu
    if (age >= 17.5 && age <= 21 && height >= 152.5) {
      list.push({
        title: "Indian Air Force (Agniveer Vayu)",
        reason: "Eligible for Science / Other than Science exams.",
        wing: "Air Force"
      });
    }

    // SSC GD
    if (age >= 18 && age <= 23 && (gender === 'Male' ? height >= 170 : height >= 157)) {
      list.push({
        title: "SSC GD Constable (BSF, CISF, CRPF, ITBP)",
        reason: "10th pass qualification with 5km running test eligibility.",
        wing: "Paramilitary"
      });
    }

    // AP Police Constable
    if (age >= 18 && age <= 24 && (education === '12th' || education === 'Degree') && (gender === 'Male' ? height >= 167.6 : height >= 152.5)) {
      list.push({
        title: "AP Police Constable (Civil / APSP)",
        reason: "Eligible for AP SLPRB events (1600m & Long Jump).",
        wing: "Police"
      });
    }

    // AP Police SI
    if (age >= 21 && age <= 27 && education === 'Degree' && (gender === 'Male' ? height >= 167.6 : height >= 152.5)) {
      list.push({
        title: "AP Police Sub-Inspector (SI)",
        reason: "Degree completed with physical standard satisfaction.",
        wing: "Police"
      });
    }

    // NDA
    if (age >= 16.5 && age <= 19.5 && education === '12th' && height >= 157) {
      list.push({
        title: "NDA (National Defence Academy - UPSC)",
        reason: "Officer level entry right after Intermediate.",
        wing: "Officer"
      });
    }

    return list;
  };

  const eligibleExams = getEligibleExams();

  return (
    <section id="eligibility" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900 text-amber-400">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Interactive Cadet Screener</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-military">
            Instant Eligibility & Rally Checker
          </h2>
          
          <p className="text-base text-slate-600">
            Not sure which exam you or your son/daughter qualifies for? Enter your details below for instant verification.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Top Controls Grid */}
          <div className="p-6 sm:p-8 bg-slate-900 text-white border-b border-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Gender */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender('Male')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      gender === 'Male'
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('Female')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      gender === 'Female'
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Age */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold uppercase text-slate-400 tracking-wider">
                  <span>Age</span>
                  <span className="text-amber-400 font-bold">{age} Years</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="26"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>16 yrs</span>
                  <span>21 yrs</span>
                  <span>26 yrs</span>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Education
                </label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-800 text-white rounded-lg text-xs font-medium border border-slate-700 focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="10th">10th Class Passed</option>
                  <option value="12th">Intermediate (12th)</option>
                  <option value="Degree">Graduation / Degree</option>
                </select>
              </div>

              {/* Height */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold uppercase text-slate-400 tracking-wider">
                  <span>Height</span>
                  <span className="text-amber-400 font-bold">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="185"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>150 cm</span>
                  <span>168 cm</span>
                  <span>185 cm</span>
                </div>
              </div>

            </div>
          </div>

          {/* Results Area */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 font-military flex items-center gap-2">
                <span>Eligible Rallies & Exams:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  {eligibleExams.length} Qualified
                </span>
              </h3>
              <span className="text-xs text-slate-500">
                Piler Academy physical coaching included
              </span>
            </div>

            {eligibleExams.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {eligibleExams.map((exam, idx) => {
                  const wingBadgeColor = 
                    exam.wing === 'Army' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' :
                    exam.wing === 'Navy' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                    exam.wing === 'Air Force' ? 'bg-sky-100 text-sky-800 border-sky-200' :
                    exam.wing === 'Police' ? 'bg-amber-100 text-amber-800 border-amber-200' :
                    'bg-slate-100 text-slate-800 border-slate-200';

                  return (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                            {exam.title}
                          </h4>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${wingBadgeColor}`}>
                            {exam.wing}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {exam.reason}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Eligible for Rally</span>
                        </span>

                        <button
                          onClick={() => onSelectProgram(exam.title)}
                          className="text-xs font-bold text-amber-600 hover:text-amber-700 group-hover:translate-x-0.5 transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <span>Apply Batch</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-6 text-slate-500 text-sm">
                <AlertCircle className="w-8 h-8 mx-auto text-amber-500 mb-2" />
                <p className="font-semibold text-slate-800">No standard recruitment match for the current parameters.</p>
                <p className="text-xs text-slate-500 mt-1">Please call our helpline directly at +91 94402 85671 to discuss special relaxations or state-level civilian defence posts.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
