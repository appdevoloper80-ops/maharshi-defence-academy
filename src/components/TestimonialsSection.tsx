import React, { useState } from 'react';
import { Star, CheckCircle, Quote, MessageSquare, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/academyData';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filterWings = [
    { id: 'All', label: 'All Reviews' },
    { id: 'Army', label: 'Indian Army' },
    { id: 'Paramilitary', label: 'SSC GD & Paramilitary' },
    { id: 'Police', label: 'AP Police' },
    { id: 'Navy', label: 'Indian Navy' },
    { id: 'Parent', label: 'Parents Feedback' },
  ];

  const filteredTestimonials = filter === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.wing === filter);

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Real Student Feedback & Rally Selections</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-military">
            What Aspirants & Parents Say
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Consistently praised as the <strong className="text-slate-900">"Best academy for middle class people with great training, food, and accommodation"</strong> and <strong className="text-slate-900">"super coaching at an affordable fee."</strong>
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 w-full max-w-full no-scrollbar px-1">
          {filterWings.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                filter === item.id
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{review.review}"
                </p>
              </div>

              {/* Cadets Info */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 font-military">
                  {review.avatarText}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      {review.name}
                    </h4>
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Selection" />
                    )}
                  </div>
                  <p className="text-xs font-semibold text-emerald-700 truncate">
                    {review.examCleared}
                  </p>
                  <p className="text-xs text-slate-500">
                    From {review.village}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Rally Highlight Stat Card */}
        <div className="mt-12 bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-military">
              Next Rally Batch Starting This Monday in Pileru
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100">
              Limited seats in hostel to ensure individual guidance on 1600m timings and study routines.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer"
            >
              Reserve Your Bed & Seat
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
