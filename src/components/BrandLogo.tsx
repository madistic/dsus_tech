import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  const getBadgeDimensions = () => {
    switch (size) {
      case 'sm':
        return 'h-8 w-auto';
      case 'lg':
        return 'h-14 w-auto';
      case 'hero':
        return 'h-20 md:h-28 w-auto';
      case 'md':
      default:
        return 'h-10 w-auto';
    }
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Brand Emblem */}
      <div className="relative flex items-center justify-center">
        {/* Genuine high-res DSUS VIP emblem badge */}
        <img
          src="/assets/logo/dsus-badge.png"
          alt="DSUS VIP"
          className={`${getBadgeDimensions()} object-contain drop-shadow-[0_2px_12px_rgba(197,168,128,0.35)] transition-transform duration-300 group-hover:scale-105`}
          onError={(e) => {
            // Fallback to SVG emblem if PNG is loading
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-display font-extrabold text-lg sm:text-xl md:text-2xl tracking-[0.18em] text-white group-hover:text-brand-gold transition-colors duration-300">
            DSUS
          </span>
          <span className="font-sans font-bold text-xs sm:text-sm tracking-[0.25em] px-1.5 py-0.5 rounded bg-brand-gold/15 text-brand-gold border border-brand-gold/40">
            VIP
          </span>
        </div>
        {showTagline && (
          <span className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-text-muted group-hover:text-text-secondary transition-colors duration-300 mt-1">
            Car Care Center • Dubai
          </span>
        )}
      </div>
    </Link>
  );
};
