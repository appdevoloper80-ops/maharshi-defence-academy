import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle2, Shield, Award } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillExam?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, prefillExam }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [exam, setExam] = useState(prefillExam || 'Indian Army (Agniveer GD)');
  const [hostelNeeded, setHostelNeeded] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter candidate name.');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `*Direct Admission Enquiry - Maharshi Defence Academy Piler*
*Name:* ${name}
*Phone:* ${phone}
*Target Exam:* ${exam}
*Hostel Needed:* ${hostelNeeded ? 'Yes' : 'No'}
Please share upcoming batch dates and fee breakdown.`;
    return `https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base font-military text-white">
                Maharshi Defence Academy Admission
              </h3>
              <p className="text-[11px] text-amber-400">
                Piler Campus • Tirupati Road (AP)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-military">
                Enquiry Registered!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Thank you, <strong>{name}</strong>. Our Piler admissions coordinator will contact you at <strong>{phone}</strong> today.
              </p>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                  {error}
                </div>
              )}

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                  Candidate Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                  Mobile Number (Calling & WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9848012345"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                  Target Recruitment Wing
                </label>
                <select
                  value={exam}
                  onChange={(e) => setExam(e.target.value)}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                >
                  <option value="Indian Army (Agniveer GD)">Indian Army (Agniveer GD)</option>
                  <option value="Indian Army (Clerk / Tech)">Indian Army (Clerk / Tech)</option>
                  <option value="Indian Navy (SSR / MR)">Indian Navy (SSR / MR)</option>
                  <option value="Indian Air Force (Agniveer Vayu)">Indian Air Force (Agniveer Vayu)</option>
                  <option value="SSC GD Constable (BSF, CISF, CRPF)">SSC GD Constable & Paramilitary</option>
                  <option value="AP Police Constable / SI">AP Police Constable / SI</option>
                  <option value="NDA / CDS Officer Entry">NDA / CDS Officer Entry</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="hostelCheck"
                  checked={hostelNeeded}
                  onChange={(e) => setHostelNeeded(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 cursor-pointer"
                />
                <label htmlFor="hostelCheck" className="text-xs text-slate-700 cursor-pointer">
                  Require on-campus hostel accommodation & mess food
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-sm transition-all shadow flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Receive Fee Details</span>
              </button>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-slate-500">
                  Or call directly:{' '}
                  <a href={`tel:${ACADEMY_INFO.phonePrimary}`} className="font-bold text-slate-900 hover:underline">
                    {ACADEMY_INFO.phonePrimary}
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
