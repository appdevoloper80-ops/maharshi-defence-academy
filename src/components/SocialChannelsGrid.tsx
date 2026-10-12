import React, { useState } from 'react';
import { ExternalLink, Check, Copy, Play, Bell, MessageSquare, Send, Sparkles } from 'lucide-react';
import { SOCIAL_CHANNELS, ACADEMY_INFO } from '../data/academyData';
import { SocialChannel } from '../types';

export const SocialChannelsGrid: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (channel: SocialChannel, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(channel.url);
    setCopiedId(channel.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getChannelIcon = (icon: string) => {
    switch (icon) {
      case 'youtube':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case 'whatsapp':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.201.3-.777.979-.953 1.18-.175.201-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.783-1.676-2.084-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.238-.244-.59-.493-.51-.677-.52-.176-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.03-1.429.251-.702.251-1.304.176-1.43-.076-.125-.276-.201-.577-.351zM12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.98.58 3.82 1.58 5.38L2 22l4.78-1.55c1.5 1 3.29 1.58 5.26 1.58 5.52 0 10-4.48 10-10S17.56 2 12.04 2z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      default:
        return <Send className="w-5 h-5" />;
    }
  };

  const getChannelColors = (icon: string) => {
    switch (icon) {
      case 'youtube':
        return {
          bgBadge: 'bg-red-50 text-red-700 border-red-200',
          iconContainer: 'bg-red-600 text-white',
          hoverBorder: 'hover:border-red-400 group-hover:shadow-red-500/10',
          btnBg: 'bg-red-600 hover:bg-red-700 text-white'
        };
      case 'whatsapp':
        return {
          bgBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          iconContainer: 'bg-emerald-600 text-white',
          hoverBorder: 'hover:border-emerald-400 group-hover:shadow-emerald-500/10',
          btnBg: 'bg-emerald-600 hover:bg-emerald-700 text-white'
        };
      case 'instagram':
        return {
          bgBadge: 'bg-pink-50 text-pink-700 border-pink-200',
          iconContainer: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white',
          hoverBorder: 'hover:border-pink-400 group-hover:shadow-pink-500/10',
          btnBg: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
        };
      default:
        return {
          bgBadge: 'bg-slate-50 text-slate-700 border-slate-200',
          iconContainer: 'bg-slate-800 text-white',
          hoverBorder: 'hover:border-slate-400',
          btnBg: 'bg-slate-900 hover:bg-slate-800 text-white'
        };
    }
  };

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {SOCIAL_CHANNELS.map((ch) => {
          const colors = getChannelColors(ch.icon);
          return (
            <a
              key={ch.id}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${ch.name} (${ch.handle}) - ${ch.ctaText}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs group"
            >
              <span className={`w-5 h-5 rounded flex items-center justify-center ${colors.iconContainer} text-xs p-0.5`}>
                {getChannelIcon(ch.icon)}
              </span>
              <span className="font-medium text-[11px]">{ch.name.split(' ')[0]}</span>
              <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-400" />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with channel count & purpose */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
              Official Media Network
            </span>
            <span className="text-xs text-slate-500">Live & Active Channels</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            Connect With Maharshi Defence Academy Channels
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Follow our verified YouTube, WhatsApp, and Instagram channels for rally drill videos, ground routines, and instant admissions counseling.
          </p>
        </div>

        {/* Quick Subscribe YouTube highlight */}
        <a
          href="https://www.youtube.com/@Maharshi-Defence-Academy"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>YouTube: @Maharshi-Defence-Academy</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Grid of Verified Functional Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {SOCIAL_CHANNELS.map((ch) => {
          const colors = getChannelColors(ch.icon);
          const isCopied = copiedId === ch.id;

          return (
            <div
              key={ch.id}
              className={`group bg-white rounded-2xl border border-slate-200 p-5 shadow-sm transition-all duration-200 flex flex-col justify-between hover:shadow-md ${colors.hoverBorder}`}
            >
              <div>
                {/* Top bar: Icon, title, badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center p-2.5 shadow-sm ${colors.iconContainer}`}>
                      {getChannelIcon(ch.icon)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        {ch.name}
                      </h4>
                      <p className="text-xs font-semibold text-slate-500 font-mono">
                        {ch.handle}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${colors.bgBadge}`}>
                    {ch.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {ch.description}
                </p>

                {/* Highlight text / follower count */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="font-medium">{ch.highlightText}</span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs transition-all shadow-sm ${colors.btnBg}`}
                >
                  <span>{ch.ctaText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={(e) => handleCopyLink(ch, e)}
                  title="Copy channel link"
                  className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  {isCopied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          );
        })}

        {/* Bonus interactive Card: Quick Video Training Hub */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl border border-slate-700 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 uppercase">
                Video Training Hub
              </span>
              <Play className="w-4 h-4 text-red-500 fill-current" />
            </div>
            <h4 className="text-base font-bold text-white font-military">
              Watch Academy Grounds & Drills
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Explore authentic footage of Piler 400m track sprints, morning physical obstacle practice, mess meals, and cadet passing-out ceremonies.
            </p>

            <div className="mt-3 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>1600m timed rally runs (under 5:20 mins)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Pull-ups (10/10 target) & 9-ft ditch jumps</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Maths & Reasoning classes in Telugu & English</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700/60 mt-4">
            <a
              href="https://www.youtube.com/@Maharshi-Defence-Academy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch on YouTube (@Maharshi-Defence-Academy)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
