import React, { useState } from 'react';
import { BookOpen, Footprints, ShieldCheck, Check, Clock, Calendar, ArrowRight, Shield, Award, Users } from 'lucide-react';
import { COURSES, TRAINING_PILLARS } from '../data/academyData';

interface CoursesSectionProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedWing, setSelectedWing] = useState<string>('All');
  const [activePillarTab, setActivePillarTab] = useState<number>(0);

  const wings = [
    { id: 'All', label: 'All Programs' },
    { id: 'Army', label: 'Indian Army' },
    { id: 'Navy', label: 'Indian Navy' },
    { id: 'AirForce', label: 'Air Force' },
    { id: 'Paramilitary', label: 'SSC GD & CAPF' },
    { id: 'Police', label: 'AP / TS Police' },
    { id: 'Officer', label: 'NDA & CDS' },
  ];

  const filteredCourses = selectedWing === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.wing === selectedWing);

  return (
    <section id="courses" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200">
            <Shield className="w-3.5 h-3.5 text-emerald-700" />
            <span>Structured Recruitment Batches</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-military">
            Defence & Police Coaching Programs
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Scientifically planned training programs combining high-scoring academic coaching with strenuous ground drills for all major armed forces rallies.
          </p>
        </div>

        {/* Wing Filter Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 w-full max-w-full no-scrollbar px-1">
          {wings.map((w) => (
            <button
              key={w.id}
              onClick={() => setSelectedWing(w.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedWing === w.id
                  ? 'bg-slate-900 text-amber-400 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide bg-slate-900 text-amber-400">
                    {course.wing}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {course.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors font-military">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2">
                  {course.description}
                </p>

                {/* Posts Tag Cloud */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Target Posts / Ranks:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.posts.map((post, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium"
                      >
                        {post}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Eligibility & Duration */}
                <div className="mt-4 space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-slate-800 shrink-0">Eligibility:</span>
                    <span>{course.eligibility}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="font-semibold text-slate-800">Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mt-4 space-y-1.5">
                  {course.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {course.batchStatus}
                </span>
                
                <button
                  onClick={() => onOpenEnquiry(course.title)}
                  className="bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Enquire Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Breakdown of Written Exam Coaching + Physical Fitness Training + Ground Obstacle Practice */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10">
          
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Complete 3-Stage Training System
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-military">
              Comprehensive 360° Cadet Development
            </h3>
            <p className="text-sm text-slate-600">
              Passing a defence rally requires balance between sharp intellect, speed calculations, and unbreakable physical stamina.
            </p>
          </div>

          {/* Interactive 3-Pillar Tab Switcher */}
          <div className="flex justify-center border-b border-slate-200 mb-8">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-2xl">
              {TRAINING_PILLARS.map((pillar, idx) => {
                const isActive = activePillarTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActivePillarTab(idx)}
                    className={`py-3 sm:py-4 px-2 text-center border-b-2 font-bold text-xs sm:text-sm transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      isActive
                        ? 'border-amber-500 text-slate-900 bg-amber-50/50 rounded-t-lg'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <span className="truncate">{pillar.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Pillar Details Card */}
          <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-military">
                    {TRAINING_PILLARS[activePillarTab].title}
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 text-amber-400">
                    {TRAINING_PILLARS[activePillarTab].subtitle}
                  </span>
                </div>

                <div className="space-y-2.5 pt-2">
                  {TRAINING_PILLARS[activePillarTab].points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Routine Schedule: {TRAINING_PILLARS[activePillarTab].schedule}</span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-slate-900 text-amber-400 flex items-center justify-center shadow">
                  {activePillarTab === 0 && <BookOpen className="w-7 h-7" />}
                  {activePillarTab === 1 && <Footprints className="w-7 h-7" />}
                  {activePillarTab === 2 && <ShieldCheck className="w-7 h-7" />}
                </div>

                <h5 className="font-bold text-slate-900 text-sm">
                  Ready to Start Preparation?
                </h5>
                <p className="text-xs text-slate-600 leading-normal">
                  Batches are divided by target exam with special attention given to beginners who need physical stamina enhancement.
                </p>

                <button
                  onClick={() => onOpenEnquiry(TRAINING_PILLARS[activePillarTab].title)}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Enquire for This Program
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Course Comparison Teaser Banner */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden w-full">
          <div className="space-y-2 text-center md:text-left min-w-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <span>Interactive Decision Tool</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-military">
              Confused between Army, Navy, Air Force or SSC GD?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Compare any two exam training courses side-by-side to understand exact running timings, physical benchmarks, daily routine hours, and academic subjects.
            </p>
          </div>

          <a
            href="#compare"
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all text-sm flex items-center gap-2 cursor-pointer group"
          >
            <span>Compare Programs Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
