import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Factory / Before',
  afterLabel = 'DSUS VIP / After',
  aspectRatio = 'aspect-[16/10]',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 2) position = 2;
    if (position > 98) position = 98;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-xl border border-border-DEFAULT shadow-2xl ${aspectRatio} ${className} cursor-ew-resize`}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full background) */}
      <img
        src={afterImage}
        alt="After Transformation"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before Transformation"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
          }}
          draggable={false}
        />
      </div>

      {/* Divider Bar */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-brand-gold shadow-[0_0_10px_rgba(197,168,128,0.8)] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Knob */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-black/90 border-2 border-brand-gold shadow-glow-gold flex items-center justify-center text-brand-gold">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" />
          </svg>
        </div>
      </div>

      {/* Badges */}
      <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
        <span className="px-2.5 py-1 rounded bg-black/75 border border-white/10 text-[10px] uppercase font-bold tracking-widest text-text-muted backdrop-blur-md">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
        <span className="px-2.5 py-1 rounded bg-brand-gold/90 text-black text-[10px] uppercase font-bold tracking-widest shadow-glow-gold backdrop-blur-md">
          {afterLabel}
        </span>
      </div>
    </div>
  );
};
