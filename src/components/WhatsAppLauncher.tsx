import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight, Shield, Sparkles, Wrench } from 'lucide-react';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/company';

export const WhatsAppLauncher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickTopics = [
    { label: 'PPF, Wrap & Body Kit Quote', msg: 'Hello DSUS VIP, I would like to get a quote for Paint Protection Film (PPF) / Vinyl Wrap.' },
    { label: 'Apple CarPlay & Audio Upgrade', msg: 'Hello DSUS VIP, I want to upgrade my vehicle multimedia to Apple CarPlay / Android Auto.' },
    { label: 'ECU Diagnostics & Electronics', msg: 'Hello DSUS VIP, I need an electrical diagnosis / ECU fault inspection for my car.' },
    { label: 'Leather Upholstery & Starlight', msg: 'Hello DSUS VIP, I am interested in custom interior leather re-upholstery / Starlight Headliner.' },
    { label: 'Mechanical Service Booking', msg: 'Hello DSUS VIP, I would like to book a mechanical service / brake check.' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-background-surface border border-border-DEFAULT rounded-2xl shadow-2xl overflow-hidden animate-fade-in backdrop-blur-xl">
          {/* Header */}
          <div className="bg-[#128C7E] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm">
                  DSUS
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#128C7E] rounded-full" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">DSUS VIP Concierge</h4>
                <p className="text-[11px] text-white/80">Online • Al Quoz Bay Direct</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Close WhatsApp chat panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#0B0D10]">
            <p className="text-xs text-text-secondary leading-relaxed">
              Welcome to DSUS Car Care Center. Choose your enquiry topic below for priority WhatsApp routing:
            </p>

            <div className="space-y-1.5">
              {quickTopics.map((topic, i) => (
                <a
                  key={i}
                  href={createWhatsAppUrl(topic.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left p-2.5 rounded-lg bg-background-elevated hover:bg-background-hover border border-border-subtle hover:border-brand-gold/40 text-xs text-text-primary hover:text-brand-gold transition-all flex items-center justify-between group"
                >
                  <span className="truncate pr-2">{topic.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-brand-gold shrink-0 transition-colors" />
                </a>
              ))}
            </div>

            {/* Direct Open Button */}
            <div className="pt-2">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Custom WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 relative group focus:outline-none"
        aria-label="Chat with DSUS VIP on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};
