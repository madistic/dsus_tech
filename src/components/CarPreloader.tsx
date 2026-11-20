import React, { useState, useEffect } from 'react';
import { COMPANY_DATA } from '../data/company';

interface CarPreloaderProps {
  onComplete?: () => void;
  minDuration?: number; // Minimum display time in ms (default: 2000ms)
  maxDuration?: number; // Safety fallback timeout in ms (default: 2800ms)
}

export const CarPreloader: React.FC<CarPreloaderProps> = ({
  onComplete,
  minDuration = 2100,
  maxDuration = 2900,
}) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [telemetryText, setTelemetryText] = useState('CALIBRATING TELEMETRY');

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsHidden(true);
      if (onComplete) onComplete();
      return;
    }

    // Check if preloader was already shown in this session
    const hasShown = sessionStorage.getItem('dsus_preloader_viewed');
    if (hasShown) {
      setIsHidden(true);
      if (onComplete) onComplete();
      return;
    }

    const startTime = Date.now();
    const intervalTime = 30; // update every 30ms

    const telemetryStates = [
      { at: 15, text: 'INITIALIZING POWER ARCHITECTURE' },
      { at: 40, text: 'OPTICAL & RADAR DIAGNOSTICS' },
      { at: 68, text: 'CABIN ATELIER SYNCHRONIZATION' },
      { at: 88, text: 'AL QUOZ BAY TELEMETRY READY' },
      { at: 100, text: 'ENGINEERED FOR YOUR DRIVE' },
    ];

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(100, Math.floor((elapsed / minDuration) * 100));
      
      setProgress(calculatedProgress);

      const matchedState = telemetryStates.find(s => calculatedProgress <= s.at);
      if (matchedState) {
        setTelemetryText(matchedState.text);
      }

      if (elapsed >= minDuration) {
        clearInterval(timer);
        setProgress(100);
        triggerExit();
      }
    }, intervalTime);

    // Hard fallback safety timeout so it never hangs
    const safetyTimer = setTimeout(() => {
      clearInterval(timer);
      setProgress(100);
      triggerExit();
    }, maxDuration);

    const triggerExit = () => {
      setIsExiting(true);
      sessionStorage.setItem('dsus_preloader_viewed', 'true');
      setTimeout(() => {
        setIsHidden(true);
        if (onComplete) onComplete();
      }, 700); // exit transition duration
    };

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimer);
    };
  }, [minDuration, maxDuration, onComplete]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#060709] select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none filter blur-sm' : 'opacity-100 scale-100'
      }`}
      aria-label="Loading DSUS VIP experience"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background Atmosphere: Subtle radial spotlight and road speed lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(197,168,128,0.08)_0%,rgba(6,7,9,0.95)_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      {/* Top Bar: Brand Crest & Dubai Location */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo/dsus-badge.png"
            alt="DSUS VIP Badge"
            className="h-9 w-auto object-contain drop-shadow-[0_0_12px_rgba(197,168,128,0.4)]"
          />
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-sm sm:text-base tracking-[0.2em] text-white">
              DSUS <span className="text-brand-gold">VIP</span>
            </span>
            <span className="text-[9px] tracking-[0.25em] text-text-muted uppercase">
              Car Care Center • Dubai
            </span>
          </div>
        </div>

        {/* Skip button for immediate entry */}
        <button
          onClick={() => {
            setIsExiting(true);
            sessionStorage.setItem('dsus_preloader_viewed', 'true');
            setTimeout(() => {
              setIsHidden(true);
              if (onComplete) onComplete();
            }, 300);
          }}
          className="text-[11px] font-mono tracking-widest text-text-muted hover:text-brand-gold uppercase px-3 py-1 rounded border border-border-subtle hover:border-brand-gold/40 transition-colors focus:outline-none"
        >
          Skip Intro →
        </button>
      </div>

      {/* Center Stage: Cinematic Sports Car with Headlight Beams & Aerodynamic Flow */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center my-auto">
        <div className="relative w-full max-w-[620px] aspect-[21/9] flex items-center justify-center">
          
          {/* Headlight Cones / Volumetric Beams */}
          <div
            className="absolute right-0 top-[38%] w-64 sm:w-80 h-32 pointer-events-none transition-opacity duration-500"
            style={{
              opacity: progress > 15 ? (progress > 85 ? 0.95 : 0.7) : 0,
              background: 'radial-gradient(ellipse at left, rgba(255,255,255,0.7) 0%, rgba(197,168,128,0.3) 25%, transparent 70%)',
              transform: 'translateX(35%) rotate(-3deg)',
              filter: 'blur(8px)',
            }}
          />

          {/* Taillight Red Ambient Trail */}
          <div
            className="absolute left-0 top-[42%] w-48 h-20 pointer-events-none transition-opacity duration-500"
            style={{
              opacity: progress > 20 ? 0.75 : 0,
              background: 'radial-gradient(ellipse at right, rgba(239,68,68,0.6) 0%, rgba(220,38,38,0.2) 40%, transparent 80%)',
              transform: 'translateX(-30%)',
              filter: 'blur(10px)',
            }}
          />

          {/* Sleek Vector Luxury Supercar Silhouette (Aston Martin / AMG GT Profile) */}
          <svg
            viewBox="0 0 1000 350"
            className="w-full h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-out"
            style={{
              transform: isExiting ? 'translateX(80px) scale(0.98)' : 'translateX(0) scale(1)',
            }}
          >
            <defs>
              {/* Metallic body gradient */}
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E222A" />
                <stop offset="35%" stopColor="#2A303C" />
                <stop offset="70%" stopColor="#14171E" />
                <stop offset="100%" stopColor="#0B0D12" />
              </linearGradient>

              {/* Roofline glass reflection */}
              <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#07090C" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#3E4756" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#07090C" stopOpacity="0.95" />
              </linearGradient>

              {/* Gold Accent pinstripe */}
              <linearGradient id="goldPinstripe" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9A7D57" stopOpacity="0" />
                <stop offset="40%" stopColor="#C5A880" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#DFC4A2" stopOpacity="1" />
                <stop offset="100%" stopColor="#9A7D57" stopOpacity="0.2" />
              </linearGradient>

              {/* Laser scan wave */}
              <linearGradient id="laserScan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#C5A880" stopOpacity="0.8" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Aerodynamic Airflow Streamlines */}
            <path
              d="M 50 160 Q 250 140, 500 135 T 950 150"
              fill="none"
              stroke="url(#goldPinstripe)"
              strokeWidth="1.5"
              strokeDasharray="20 40"
              className="opacity-40 animate-pulse-slow"
            />
            <path
              d="M 120 185 Q 380 180, 680 190 T 960 215"
              fill="none"
              stroke="url(#goldPinstripe)"
              strokeWidth="1"
              strokeDasharray="15 30"
              className="opacity-30"
            />

            {/* Car Shadow Ground Reflection */}
            <ellipse cx="500" cy="275" rx="420" ry="24" fill="rgba(0,0,0,0.85)" filter="blur(6px)" />

            {/* Main Sculpted Body Silhouette */}
            <path
              d="M 110 240 
                 C 120 220, 140 215, 175 215 
                 C 200 170, 260 170, 285 215 
                 L 640 215 
                 C 665 170, 725 170, 750 215 
                 L 865 215 
                 C 890 215, 910 205, 920 195 
                 C 905 185, 875 175, 820 170 
                 C 740 165, 660 155, 600 120 
                 C 530 80, 390 85, 300 125 
                 C 210 165, 160 175, 120 185 
                 C 90 195, 85 215, 95 235 
                 Z"
              fill="url(#bodyGradient)"
              stroke="#2E3543"
              strokeWidth="2.5"
            />

            {/* Glass Canopy (Windshield, Side Windows, Fastback) */}
            <path
              d="M 315 125 
                 C 385 92, 510 90, 575 122 
                 C 620 145, 665 155, 715 160 
                 L 310 160 
                 Z"
              fill="url(#glassReflection)"
              stroke="#1C212B"
              strokeWidth="1.5"
            />

            {/* B-Pillar & Window Trim */}
            <path d="M 465 100 L 485 160" stroke="#0C0E13" strokeWidth="3" />
            <path d="M 315 160 L 715 160" stroke="url(#goldPinstripe)" strokeWidth="1.5" />

            {/* Front Hood & Fender Character Crease */}
            <path
              d="M 640 155 Q 780 168, 890 185"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.5"
            />

            {/* Side Skirt Ground Effects / Carbon Splitter */}
            <path
              d="M 285 240 L 640 240 L 640 246 L 285 246 Z"
              fill="#090B0E"
              stroke="#C5A880"
              strokeWidth="0.8"
            />

            {/* Rear Wheels & Arch */}
            <g transform="translate(230, 215)">
              {/* Tire */}
              <circle cx="0" cy="0" r="48" fill="#0C0E12" stroke="#252A34" strokeWidth="4" />
              {/* Rim Outer Lip */}
              <circle cx="0" cy="0" r="38" fill="#15181F" stroke="#3D4554" strokeWidth="2" />
              {/* Brake Rotor & Caliper in Gold */}
              <circle cx="0" cy="0" r="28" fill="#222731" stroke="#4A5364" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M -18 -20 C -12 -26, 0 -28, 12 -26 L 10 -15 C 2 -17, -8 -16, -14 -12 Z" fill="#C5A880" />
              {/* Alloy Spokes (Multi-spoke with rotational animation) */}
              <g className="origin-center animate-[spin_1.2s_linear_infinite]">
                <line x1="-32" y1="0" x2="32" y2="0" stroke="#68758D" strokeWidth="2.5" />
                <line x1="0" y1="-32" x2="0" y2="32" stroke="#68758D" strokeWidth="2.5" />
                <line x1="-23" y1="-23" x2="23" y2="23" stroke="#68758D" strokeWidth="2.5" />
                <line x1="-23" y1="23" x2="23" y2="-23" stroke="#68758D" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="7" fill="#C5A880" />
              </g>
            </g>

            {/* Front Wheels & Arch */}
            <g transform="translate(695, 215)">
              {/* Tire */}
              <circle cx="0" cy="0" r="48" fill="#0C0E12" stroke="#252A34" strokeWidth="4" />
              {/* Rim Outer Lip */}
              <circle cx="0" cy="0" r="38" fill="#15181F" stroke="#3D4554" strokeWidth="2" />
              {/* Brake Rotor & Caliper in Gold */}
              <circle cx="0" cy="0" r="28" fill="#222731" stroke="#4A5364" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 14 -20 C 8 -26, -4 -28, -16 -26 L -14 -15 C -6 -17, 4 -16, 10 -12 Z" fill="#C5A880" />
              {/* Alloy Spokes (Multi-spoke with rotational animation) */}
              <g className="origin-center animate-[spin_1.2s_linear_infinite]">
                <line x1="-32" y1="0" x2="32" y2="0" stroke="#68758D" strokeWidth="2.5" />
                <line x1="0" y1="-32" x2="0" y2="32" stroke="#68758D" strokeWidth="2.5" />
                <line x1="-23" y1="-23" x2="23" y2="23" stroke="#68758D" strokeWidth="2.5" />
                <line x1="-23" y1="23" x2="23" y2="-23" stroke="#68758D" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="7" fill="#C5A880" />
              </g>
            </g>

            {/* LED Headlight Cluster with Razor DRL */}
            <path
              d="M 885 188 L 925 198 L 915 204 L 880 196 Z"
              fill={progress > 15 ? '#FFFFFF' : '#475569'}
              filter={progress > 15 ? 'drop-shadow(0 0 10px #FFFFFF)' : 'none'}
              className="transition-all duration-300"
            />
            {/* Dual Laser Projector Pupils */}
            {progress > 25 && (
              <>
                <circle cx="905" cy="196" r="3.5" fill="#E0F2FE" filter="drop-shadow(0 0 8px #38BDF8)" />
                <circle cx="918" cy="199" r="3" fill="#E0F2FE" filter="drop-shadow(0 0 8px #38BDF8)" />
              </>
            )}

            {/* Sequential Tail Light Blade */}
            <path
              d="M 98 228 L 115 210 L 118 214 L 102 232 Z"
              fill={progress > 20 ? '#EF4444' : '#5C1D1D'}
              filter={progress > 20 ? 'drop-shadow(0 0 8px #EF4444)' : 'none'}
              className="transition-all duration-300"
            />

            {/* Laser Scanning Line across Car Profile based on Progress */}
            <line
              x1={100 + (progress / 100) * 820}
              y1="60"
              x2={100 + (progress / 100) * 820}
              y2="280"
              stroke="#C5A880"
              strokeWidth="2"
              strokeOpacity="0.75"
              filter="drop-shadow(0 0 6px #C5A880)"
            />
          </svg>

          {/* Road Asphalt Perspective Horizon & Animated Grid Hash Marks */}
          <div className="absolute bottom-1 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2D3442] to-transparent overflow-hidden">
            <div
              className="w-full h-full bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-80"
              style={{
                transform: `translateX(${(progress * 4) % 100 - 50}%)`,
              }}
            />
          </div>
        </div>

        {/* Center Automotive Telemetry HUD */}
        <div className="w-full max-w-md mt-6 space-y-3 text-center">
          {/* Main Headline reveal */}
          <div className="font-display font-extrabold text-xl sm:text-2xl tracking-[0.14em] uppercase text-white drop-shadow-md">
            Engineered For Your Drive
          </div>

          {/* Telemetry Status Text */}
          <div className="flex items-center justify-between text-xs font-mono text-text-muted px-1">
            <span className="tracking-wider text-brand-gold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
              {telemetryText}
            </span>
            <span className="text-white font-bold">{progress}%</span>
          </div>

          {/* Telemetry Precision Bar */}
          <div className="relative w-full h-1.5 bg-background-elevated rounded-full overflow-hidden border border-border-subtle shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(197,168,128,0.7)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Digital Telemetry Indicators */}
          <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] font-mono uppercase text-text-muted">
            <div className="border border-border-subtle rounded py-1 px-2 bg-black/40">
              <span className="text-text-muted block">FACILITY</span>
              <span className="text-white font-semibold">AL QUOZ 2</span>
            </div>
            <div className="border border-border-subtle rounded py-1 px-2 bg-black/40">
              <span className="text-text-muted block">TECH LAB</span>
              <span className="text-white font-semibold">8 BAYS ACTV</span>
            </div>
            <div className="border border-border-subtle rounded py-1 px-2 bg-black/40">
              <span className="text-text-muted block">CALIBRATION</span>
              <span className="text-brand-gold font-semibold">
                {progress === 100 ? 'OPTIMAL' : 'SYNCING'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Credits */}
      <div className="relative z-10 w-full text-center pb-6 text-[10px] uppercase tracking-[0.25em] text-text-muted font-light">
        DSUS VIP Car Care Center • Master Automotive Atelier • Dubai, UAE
      </div>
    </div>
  );
};
