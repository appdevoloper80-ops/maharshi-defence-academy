import React, { useState } from 'react';
import { 
  ArrowLeftRight, 
  CheckCircle2, 
  Flame, 
  Clock, 
  Target, 
  BookOpen, 
  Footprints, 
  Award, 
  Sparkles, 
  GraduationCap, 
  HelpCircle, 
  ArrowRight, 
  Check, 
  Info,
  Calendar,
  Layers,
  ChevronDown
} from 'lucide-react';
import { COURSES } from '../data/academyData';
import { Course } from '../types';

interface CourseComparisonProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const CourseComparison: React.FC<CourseComparisonProps> = ({ onOpenEnquiry }) => {
  // Default selection: Indian Army vs SSC GD Constable
  const [courseAId, setCourseAId] = useState<string>('indian-army');
  const [courseBId, setCourseBId] = useState<string>('ssc-gd-constable');
  const [highlightDifferences, setHighlightDifferences] = useState<boolean>(true);

  const courseA = COURSES.find(c => c.id === courseAId) || COURSES[0];
  const courseB = COURSES.find(c => c.id === courseBId) || COURSES[3];

  const handleSwap = () => {
    const temp = courseAId;
    setCourseAId(courseBId);
    setCourseBId(temp);
  };

  const getIntensityBadge = (level?: 'High' | 'Very High' | 'Extreme') => {
    switch (level) {
      case 'Extreme':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-700 border border-rose-300">
            <Flame className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            Extreme Intensity
          </span>
        );
      case 'Very High':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/15 text-amber-800 border border-amber-300">
            <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
            Very High Intensity
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-sky-500/15 text-sky-800 border border-sky-300">
            <Flame className="w-3.5 h-3.5 text-sky-600" />
            High Intensity
          </span>
        );
    }
  };

  const getWingBadge = (wing: string) => {
    switch (wing) {
      case 'Army':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">Army Ground</span>;
      case 'Navy':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-800">Naval Recruit</span>;
      case 'AirForce':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-100 text-sky-800">Air Force Vayu</span>;
      case 'Paramilitary':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800">Central CAPF</span>;
      case 'Police':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-100 text-purple-800">State Police</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 text-indigo-800">Officer Entry</span>;
    }
  };

  const quickPairs = [
    { label: 'Army vs SSC GD', idA: 'indian-army', idB: 'ssc-gd-constable' },
    { label: 'Army vs Navy SSR', idA: 'indian-army', idB: 'indian-navy' },
    { label: 'Air Force vs Navy', idA: 'indian-air-force', idB: 'indian-navy' },
    { label: 'Police SI vs SSC GD', idA: 'ap-ts-police', idB: 'ssc-gd-constable' },
    { label: 'Soldier Entry vs Officer NDA', idA: 'indian-army', idB: 'nda-cds' },
  ];

  return (
    <section id="compare" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 shadow-xs">
            <ArrowLeftRight className="w-3.5 h-3.5 text-amber-700" />
            <span>Interactive Program Comparison</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-military">
            Side-by-Side Course Comparison
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Not sure which exam path suits your qualification, running stamina, or career ambitions? Select any two defence coaching programs below to contrast duration, physical ground intensity, and academic focus areas.
          </p>
        </div>

        {/* Quick Comparison Presets */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Popular Matches:
          </span>
          {quickPairs.map((pair, idx) => {
            const isCurrent = (courseAId === pair.idA && courseBId === pair.idB) || (courseAId === pair.idB && courseBId === pair.idA);
            return (
              <button
                key={idx}
                onClick={() => {
                  setCourseAId(pair.idA);
                  setCourseBId(pair.idB);
                }}
                className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-slate-900 text-amber-400 font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {pair.label}
              </button>
            );
          })}
        </div>

        {/* Selector Header Bar */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 mb-8 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
            
            {/* Program A Selector */}
            <div className="lg:col-span-5 space-y-2">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[11px] font-black">A</span>
                <span>Select First Program</span>
              </label>
              <div className="relative">
                <select
                  value={courseAId}
                  onChange={(e) => setCourseAId(e.target.value)}
                  className="w-full bg-slate-800 border-2 border-slate-700 hover:border-amber-400 focus:border-amber-400 focus:outline-none rounded-xl px-4 py-3 text-sm sm:text-base font-bold text-white appearance-none cursor-pointer pr-10 transition-colors"
                >
                  {COURSES.map(course => (
                    <option key={course.id} value={course.id} disabled={course.id === courseBId}>
                      {course.title} ({course.wing})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-5 h-5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Swap Button */}
            <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
              <button
                onClick={handleSwap}
                title="Swap Programs"
                aria-label="Swap compared programs"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400 flex items-center justify-center border border-slate-700 shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                <ArrowLeftRight className="w-5 h-5" />
              </button>
            </div>

            {/* Program B Selector */}
            <div className="lg:col-span-5 space-y-2">
              <label className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-[11px] font-black">B</span>
                <span>Select Second Program</span>
              </label>
              <div className="relative">
                <select
                  value={courseBId}
                  onChange={(e) => setCourseBId(e.target.value)}
                  className="w-full bg-slate-800 border-2 border-slate-700 hover:border-emerald-400 focus:border-emerald-400 focus:outline-none rounded-xl px-4 py-3 text-sm sm:text-base font-bold text-white appearance-none cursor-pointer pr-10 transition-colors"
                >
                  {COURSES.map(course => (
                    <option key={course.id} value={course.id} disabled={course.id === courseAId}>
                      {course.title} ({course.wing})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-5 h-5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Quick Differences Toggle & Context */}
          <div className="mt-5 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2 min-w-0">
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="truncate">Comparing: <strong>{courseA.title}</strong> vs <strong>{courseB.title}</strong></span>
            </div>

            <label className="inline-flex items-center gap-2 cursor-pointer select-none shrink-0">
              <input
                type="checkbox"
                checked={highlightDifferences}
                onChange={(e) => setHighlightDifferences(e.target.checked)}
                className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 border-slate-600 bg-slate-800 cursor-pointer"
              />
              <span className="font-semibold text-slate-300">Highlight differences</span>
            </label>
          </div>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden w-full">
          {/* Mobile swipe helper bar */}
          <div className="md:hidden px-4 py-2 bg-amber-500/10 border-b border-amber-500/20 text-xs font-semibold text-amber-900 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <ArrowLeftRight className="w-3.5 h-3.5 text-amber-600" />
              <span>Side-by-side comparison matrix</span>
            </span>
            <span className="text-[11px] font-bold bg-amber-200/80 text-amber-950 px-2 py-0.5 rounded">
              Swipe ↔
            </span>
          </div>

          <div className="overflow-x-auto w-full no-scrollbar">
            <div className="min-w-[660px] md:min-w-0">
              
              {/* Header Summary Row */}
              <div className="grid grid-cols-12 divide-x divide-slate-200 border-b border-slate-200 bg-slate-50">
                <div className="col-span-4 p-5 sm:p-6 flex flex-col justify-center min-w-0 break-words">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Comparison Matrix</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 font-military">Key Dimensions</h3>
                  <p className="text-xs text-slate-500 mt-1">Review the side-by-side metrics below.</p>
                </div>

                {/* Course A Header */}
                <div className="col-span-4 p-5 sm:p-6 bg-amber-50/40 space-y-2.5 min-w-0 break-words">
                  <div className="flex items-center justify-between gap-2">
                    {getWingBadge(courseA.wing)}
                    <span className="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                      {courseA.batchStatus}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 font-military leading-snug">
                    {courseA.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{courseA.description}</p>
                  <div className="pt-2 flex items-center justify-between gap-2">
                    {getIntensityBadge(courseA.comparison?.intensityLevel)}
                    <button
                      onClick={() => onOpenEnquiry(courseA.title)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <span>Apply A</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Course B Header */}
                <div className="col-span-4 p-5 sm:p-6 bg-emerald-50/40 space-y-2.5 min-w-0 break-words">
                  <div className="flex items-center justify-between gap-2">
                    {getWingBadge(courseB.wing)}
                    <span className="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                      {courseB.batchStatus}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 font-military leading-snug">
                    {courseB.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{courseB.description}</p>
                  <div className="pt-2 flex items-center justify-between gap-2">
                    {getIntensityBadge(courseB.comparison?.intensityLevel)}
                    <button
                      onClick={() => onOpenEnquiry(courseB.title)}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <span>Apply B</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* TABLE COMPARISON ROWS */}
              <div className="divide-y divide-slate-200 text-sm">

                {/* ROW 1: Training Duration */}
                <div className="grid grid-cols-12 divide-x divide-slate-100 hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 p-4 sm:p-5 flex items-start gap-2.5 bg-slate-50/50 min-w-0 break-words">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900">Program Duration</div>
                      <div className="text-xs text-slate-500">Coaching course duration & batch timeline</div>
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 font-semibold text-slate-800 min-w-0 break-words ${highlightDifferences ? 'bg-amber-50/20' : ''}`}>
                    <div className="text-amber-800 font-bold">{courseA.duration}</div>
                    <div className="text-xs text-slate-600 mt-1">{courseA.comparison?.durationDetailed}</div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 font-semibold text-slate-800 min-w-0 break-words ${highlightDifferences ? 'bg-emerald-50/20' : ''}`}>
                    <div className="text-emerald-800 font-bold">{courseB.duration}</div>
                    <div className="text-xs text-slate-600 mt-1">{courseB.comparison?.durationDetailed}</div>
                  </div>
                </div>

                {/* ROW 2: Physical Training Intensity */}
                <div className="grid grid-cols-12 divide-x divide-slate-100 hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 p-4 sm:p-5 flex items-start gap-2.5 bg-slate-50/50 min-w-0 break-words">
                    <Footprints className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900">Physical Ground Intensity</div>
                      <div className="text-xs text-slate-500">Track stamina, obstacle drills & events</div>
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 space-y-2 min-w-0 break-words ${highlightDifferences ? 'bg-amber-50/20' : ''}`}>
                    <div className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-900 font-bold text-xs">
                      {courseA.comparison?.physicalIntensity}
                    </div>
                    <div className="text-xs text-slate-600">
                      <span className="font-semibold text-slate-800">Daily Ground Work:</span> {courseA.comparison?.dailyGroundHours}
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 space-y-2 min-w-0 break-words ${highlightDifferences ? 'bg-emerald-50/20' : ''}`}>
                    <div className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-900 font-bold text-xs">
                      {courseB.comparison?.physicalIntensity}
                    </div>
                    <div className="text-xs text-slate-600">
                      <span className="font-semibold text-slate-800">Daily Ground Work:</span> {courseB.comparison?.dailyGroundHours}
                    </div>
                  </div>
                </div>

                {/* ROW 3: Academic & Written Exam Intensity */}
                <div className="grid grid-cols-12 divide-x divide-slate-100 hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 p-4 sm:p-5 flex items-start gap-2.5 bg-slate-50/50 min-w-0 break-words">
                    <BookOpen className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900">Academic & Written Intensity</div>
                      <div className="text-xs text-slate-500">Classroom lectures, speed maths & syllabus</div>
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 space-y-2 min-w-0 break-words ${highlightDifferences ? 'bg-amber-50/20' : ''}`}>
                    <div className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-900 font-bold text-xs">
                      {courseA.comparison?.academicIntensity}
                    </div>
                    <div className="text-xs text-slate-600">
                      <span className="font-semibold text-slate-800">Daily Classroom Study:</span> {courseA.comparison?.dailyClassHours}
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 space-y-2 min-w-0 break-words ${highlightDifferences ? 'bg-emerald-50/20' : ''}`}>
                    <div className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-900 font-bold text-xs">
                      {courseB.comparison?.academicIntensity}
                    </div>
                    <div className="text-xs text-slate-600">
                      <span className="font-semibold text-slate-800">Daily Classroom Study:</span> {courseB.comparison?.dailyClassHours}
                    </div>
                  </div>
                </div>

                {/* ROW 4: Primary Focus Areas */}
                <div className="grid grid-cols-12 divide-x divide-slate-100 hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 p-4 sm:p-5 flex items-start gap-2.5 bg-slate-50/50 min-w-0 break-words">
                    <Target className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900">Key Focus Areas</div>
                      <div className="text-xs text-slate-500">Core academy curriculum priorities</div>
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 min-w-0 break-words ${highlightDifferences ? 'bg-amber-50/20' : ''}`}>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {courseA.comparison?.primaryFocusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 min-w-0 break-words ${highlightDifferences ? 'bg-emerald-50/20' : ''}`}>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {courseB.comparison?.primaryFocusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ROW 5: Physical Test Benchmarks */}
                <div className="grid grid-cols-12 divide-x divide-slate-100 hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 p-4 sm:p-5 flex items-start gap-2.5 bg-slate-50/50 min-w-0 break-words">
                    <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900">Physical Test Benchmarks</div>
                      <div className="text-xs text-slate-500">Official standard expected at rally ground</div>
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 min-w-0 break-words ${highlightDifferences ? 'bg-amber-50/20' : ''}`}>
                    <div className="space-y-1.5">
                      {courseA.comparison?.physicalBenchmarks.map((bm, idx) => (
                        <div key={idx} className="text-xs bg-white border border-slate-200 rounded-md p-2 font-medium text-slate-800">
                          ⚡ {bm}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 min-w-0 break-words ${highlightDifferences ? 'bg-emerald-50/20' : ''}`}>
                    <div className="space-y-1.5">
                      {courseB.comparison?.physicalBenchmarks.map((bm, idx) => (
                        <div key={idx} className="text-xs bg-white border border-slate-200 rounded-md p-2 font-medium text-slate-800">
                          ⚡ {bm}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ROW 6: Key Written Exam Subjects */}
                <div className="grid grid-cols-12 divide-x divide-slate-100 hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 p-4 sm:p-5 flex items-start gap-2.5 bg-slate-50/50 min-w-0 break-words">
                    <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900">Key Academic Subjects</div>
                      <div className="text-xs text-slate-500">Core modules taught by subject specialists</div>
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 min-w-0 break-words ${highlightDifferences ? 'bg-amber-50/20' : ''}`}>
                    <div className="flex flex-wrap gap-1.5">
                      {courseA.comparison?.keySubjects.map((sub, idx) => (
                        <span key={idx} className="text-xs bg-slate-100 text-slate-800 font-semibold px-2 py-1 rounded-md border border-slate-200">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 min-w-0 break-words ${highlightDifferences ? 'bg-emerald-50/20' : ''}`}>
                    <div className="flex flex-wrap gap-1.5">
                      {courseB.comparison?.keySubjects.map((sub, idx) => (
                        <span key={idx} className="text-xs bg-slate-100 text-slate-800 font-semibold px-2 py-1 rounded-md border border-slate-200">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ROW 7: Eligibility Criteria */}
                <div className="grid grid-cols-12 divide-x divide-slate-100 hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 p-4 sm:p-5 flex items-start gap-2.5 bg-slate-50/50 min-w-0 break-words">
                    <Layers className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900">Eligibility & Age Range</div>
                      <div className="text-xs text-slate-500">Educational criteria & age cutoff</div>
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 text-xs text-slate-700 leading-relaxed font-medium min-w-0 break-words ${highlightDifferences ? 'bg-amber-50/20' : ''}`}>
                    {courseA.eligibility}
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 text-xs text-slate-700 leading-relaxed font-medium min-w-0 break-words ${highlightDifferences ? 'bg-emerald-50/20' : ''}`}>
                    {courseB.eligibility}
                  </div>
                </div>

                {/* ROW 8: Examination Stages & Mode */}
                <div className="grid grid-cols-12 divide-x divide-slate-100 hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 p-4 sm:p-5 flex items-start gap-2.5 bg-slate-50/50 min-w-0 break-words">
                    <Calendar className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900">Selection Stages</div>
                      <div className="text-xs text-slate-500">Official recruitment pipeline</div>
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 text-xs space-y-1.5 min-w-0 break-words ${highlightDifferences ? 'bg-amber-50/20' : ''}`}>
                    <div className="font-semibold text-slate-900 mb-1">Mode: {courseA.comparison?.examMode}</div>
                    <div className="flex flex-wrap gap-1">
                      {courseA.comparison?.selectionProcess.map((stg, idx) => (
                        <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded text-[11px] text-slate-700 font-medium">
                          {idx + 1}. {stg}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 text-xs space-y-1.5 min-w-0 break-words ${highlightDifferences ? 'bg-emerald-50/20' : ''}`}>
                    <div className="font-semibold text-slate-900 mb-1">Mode: {courseB.comparison?.examMode}</div>
                    <div className="flex flex-wrap gap-1">
                      {courseB.comparison?.selectionProcess.map((stg, idx) => (
                        <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded text-[11px] text-slate-700 font-medium">
                          {idx + 1}. {stg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ROW 9: Who Should Choose This? */}
                <div className="grid grid-cols-12 divide-x divide-slate-100 hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 p-4 sm:p-5 flex items-start gap-2.5 bg-slate-50/50 min-w-0 break-words">
                    <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900">Best Suited For</div>
                      <div className="text-xs text-slate-500">Academy counselor recommendation</div>
                    </div>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 text-xs text-slate-700 leading-relaxed min-w-0 break-words ${highlightDifferences ? 'bg-amber-50/20' : ''}`}>
                    <p className="font-medium text-slate-900">{courseA.comparison?.recommendedFor}</p>
                  </div>
                  <div className={`col-span-4 p-4 sm:p-5 text-xs text-slate-700 leading-relaxed min-w-0 break-words ${highlightDifferences ? 'bg-emerald-50/20' : ''}`}>
                    <p className="font-medium text-slate-900">{courseB.comparison?.recommendedFor}</p>
                  </div>
                </div>

                {/* ROW 10: Call-To-Action Footers */}
                <div className="grid grid-cols-12 divide-x divide-slate-100 bg-slate-50/70">
                  <div className="col-span-4 p-4 sm:p-5 flex flex-col justify-center min-w-0 break-words">
                    <span className="text-xs font-bold text-slate-600">Need personalized guidance?</span>
                    <span className="text-xs text-slate-500">Visit our Piler campus or speak with head coaches.</span>
                  </div>
                  <div className="col-span-4 p-4 sm:p-5 min-w-0">
                    <button
                      onClick={() => onOpenEnquiry(courseA.title)}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    >
                      <span className="truncate">Enquire: {courseA.title.split('(')[0].trim()}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>
                  </div>
                  <div className="col-span-4 p-4 sm:p-5 min-w-0">
                    <button
                      onClick={() => onOpenEnquiry(courseB.title)}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    >
                      <span className="truncate">Enquire: {courseB.title.split('(')[0].trim()}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
