import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { ContactFormData } from '../types';
import { SocialChannelsGrid } from './SocialChannelsGrid';

interface LocationContactSectionProps {
  prefillExam?: string;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({ prefillExam }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    targetExam: prefillExam || 'Indian Army (Agniveer)',
    town: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const examsList = [
    'Indian Army (Agniveer GD / Tech / Clerk)',
    'Indian Navy (Agniveer SSR / MR)',
    'Indian Air Force (Agniveer Vayu)',
    'SSC GD Constable & CAPF (BSF / CISF / CRPF)',
    'AP Police Constable & SI',
    'NDA & CDS (Officer Entry)',
    'General Physical Fitness & Hostel Enquiry'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Admission Enquiry - Maharshi Defence Academy Piler*
*Name:* ${formData.name}
*Mobile:* ${formData.phone}
*Target Exam:* ${formData.targetExam}
*Town/Village:* ${formData.town || 'Not specified'}
*Message:* ${formData.message || 'Please share course fee and hostel details.'}`;
    return encodeURIComponent(text);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>Visit Campus or Enquire Today</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-military">
            Location & Admission Contact
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Parents and aspirants are always welcome to visit our training ground, inspect the hostel, and taste the mess food before admission.
          </p>
        </div>

        {/* Grid: Left is Info & Map, Right is Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left: Contact Info & Interactive Map */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 border border-slate-800">
              <div className="border-b border-slate-800 pb-5">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                  Official Campus Headquarters
                </span>
                <h3 className="text-2xl font-bold font-military mt-1">
                  Maharshi Defence Academy, Piler
                </h3>
              </div>

              {/* Address details */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full Physical Address</h4>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    {ACADEMY_INFO.address}
                  </p>
                  <p className="text-xs text-amber-400 mt-1 font-semibold">
                    Landmark: {ACADEMY_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Phone helpline */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Call for Admission Guidance</h4>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <a
                      href={`tel:${ACADEMY_INFO.phonePrimary}`}
                      className="text-base font-bold text-emerald-400 hover:underline"
                    >
                      {ACADEMY_INFO.phonePrimary}
                    </a>
                    <span className="text-slate-500">|</span>
                    <a
                      href={`tel:${ACADEMY_INFO.phoneSecondary}`}
                      className="text-sm text-slate-300 hover:text-white"
                    >
                      {ACADEMY_INFO.phoneSecondary}
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Telugu & English counselling available</p>
                </div>
              </div>

              {/* WhatsApp direct help */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct WhatsApp Helpline</h4>
                  <div className="mt-1">
                    <a
                      href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Maharshi Defence Academy, I want to enquire about defence coaching in Piler.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-400 hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{ACADEMY_INFO.whatsappDisplay}</span>
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Instant response for syllabus, hostel & batch details</p>
                </div>
              </div>

              {/* Working hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Ground & Office Timing</h4>
                  <p className="text-sm text-slate-300 mt-1">
                    {ACADEMY_INFO.operatingHours}
                  </p>
                </div>
              </div>

              {/* Quick Action Buttons (Call & WhatsApp) */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${ACADEMY_INFO.phonePrimary}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Director Now</span>
                </a>

                <a
                  href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Maharshi Defence Academy, I want to enquire about new batch coaching in Piler.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp ({ACADEMY_INFO.whatsappDisplay})</span>
                </a>
              </div>

            </div>

            {/* Embedded Interactive Map for Pileru - Tirupati Road */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <div className="p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Interactive Map: Pileru – Tirupati Road (AP)</span>
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('Maharshi Defence Academy Piler Kammollapalli Tirupati Road Andhra Pradesh')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="h-64 w-full relative">
                <iframe
                  title="Maharshi Defence Academy Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=78.9800%2C13.6700%2C79.0800%2C13.7300&amp;layer=mapnik&amp;marker=13.6950%2C79.0300"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-3 bg-white text-xs text-slate-600 flex items-center justify-between">
                <span>📍 Tirupati Road, Kammollapalli, Pileru 517214</span>
                <span className="text-emerald-700 font-semibold">Easy Bus Stop Access</span>
              </div>
            </div>

          </div>

          {/* Right: Admission Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Direct Admission Desk
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-military mt-1">
                  Enquire for New Batch & Hostel
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Submit your details below and our senior drill coordinator will contact you directly with fee and batch schedule.
                </p>
              </div>

              {submitted ? (
                <div className="bg-white rounded-xl p-6 sm:p-8 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 font-military">
                    Enquiry Received Successfully!
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our admissions team for the <strong className="text-emerald-800">{formData.targetExam}</strong> batch in Piler will call you shortly at <strong className="text-slate-900">{formData.phone}</strong>.
                  </p>

                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Enquiry Instantly via WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        targetExam: 'Indian Army (Agniveer)',
                        town: '',
                        message: ''
                      });
                    }}
                    className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                  >
                    Submit another student enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Full Name of Cadet / Aspirant <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  {/* Target Exam */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Target Defence / Police Exam
                    </label>
                    <select
                      value={formData.targetExam}
                      onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent cursor-pointer"
                    >
                      {examsList.map((ex, i) => (
                        <option key={i} value={ex}>
                          {ex}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Town / Village */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Native Town / Village / District
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Madanapalle / Rayachoty / Chittoor"
                      value={formData.town}
                      onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Any Questions? (Hostel / Fees / Batch date)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask about hostel facility, food menu, or upcoming rally coaching dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold rounded-lg text-sm transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Admission Enquiry</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 We respect your privacy. No spam. Direct call from academy staff only.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Dedicated Connect With Us On Official Media Channels Hub */}
        <div id="connect" className="mt-14 pt-10 border-t border-slate-200">
          <SocialChannelsGrid />
        </div>

      </div>
    </section>
  );
};
