import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
  subtitle?: string;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  subtitle,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fade-in">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div>
          {title && <h3 className="text-white font-display font-bold text-lg">{title}</h3>}
          {subtitle && <p className="text-text-muted text-xs uppercase tracking-wider mt-0.5">{subtitle}</p>}
        </div>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image */}
      <div className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center p-4">
        <img
          src={imageUrl}
          alt={title || 'Enlarged View'}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
        />

        {/* Previous Button */}
        {hasPrev && onPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/15 transition-all shadow-lg focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {hasNext && onNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/15 transition-all shadow-lg focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};
