import React, { useEffect, useState, useRef } from 'react';

export const AutomotiveCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'drag' | 'text'>('default');
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position references for smooth 60fps lerp
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instant update for inner laser dot (zero lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Detect hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer');
      const gallery = target.closest('[data-cursor="view"], .group.cursor-pointer');
      const dragArea = target.closest('.cursor-ew-resize, [data-cursor="drag"]');

      if (dragArea) {
        setCursorType('drag');
      } else if (gallery) {
        setCursorType('view');
      } else if (interactive) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth Lerp animation loop for the outer reticle ring (automotive caliper tracking)
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.22);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.22);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 1. Inner Laser Center Dot & Micro Crosshairs */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform"
      >
        <div
          className={`w-1.5 h-1.5 rounded-full bg-brand-gold transition-all duration-150 ${
            isClicking ? 'scale-150 bg-white' : ''
          }`}
        />
      </div>

      {/* 2. Outer Precision Automotive Reticle Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform"
      >
        <div
          className={`relative flex items-center justify-center transition-all duration-200 ease-out ${
            cursorType === 'pointer'
              ? 'w-11 h-11 border border-brand-gold/80 bg-brand-gold/10 shadow-[0_0_12px_rgba(197,168,128,0.3)]'
              : cursorType === 'view'
              ? 'w-14 h-14 border border-brand-gold bg-black/60 shadow-[0_0_15px_rgba(197,168,128,0.4)] backdrop-blur-xs'
              : cursorType === 'drag'
              ? 'w-12 h-12 border border-brand-gold/80 bg-black/40'
              : 'w-7 h-7 border border-white/30'
          } ${isClicking ? 'scale-90 border-brand-gold' : 'scale-100'} rounded-full`}
        >
          {/* Caliper Cardinal Tick Marks (automotive gauge style) */}
          {cursorType === 'default' && (
            <>
              <span className="absolute -top-1 w-0.5 h-1 bg-brand-gold/70" />
              <span className="absolute -bottom-1 w-0.5 h-1 bg-brand-gold/70" />
              <span className="absolute -left-1 w-1 h-0.5 bg-brand-gold/70" />
              <span className="absolute -right-1 w-1 h-0.5 bg-brand-gold/70" />
            </>
          )}

          {/* View Label inside Reticle */}
          {cursorType === 'view' && (
            <span className="text-[8px] font-mono tracking-widest uppercase text-brand-gold font-bold">
              VIEW
            </span>
          )}

          {/* Drag Arrows */}
          {cursorType === 'drag' && (
            <div className="flex items-center gap-1 text-brand-gold">
              <span className="text-[9px]">◀</span>
              <span className="text-[9px]">▶</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
