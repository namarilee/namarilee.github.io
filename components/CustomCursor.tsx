'use client';

import { useEffect, useRef, useState } from 'react';

const BASE_SIZE = 16;
const LABEL_PADDING = 14; // Total extra width added to measured label (px). 24 gives ~12px padding per side.

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [label, setLabel] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [semiTransparent, setSemiTransparent] = useState(false);
  const [width, setWidth] = useState(BASE_SIZE);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let x = 0;
    let y = 0;
    let raf = 0;

    const move = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      setVisible(true);

      if (!raf) {
        raf = window.requestAnimationFrame(() => {
          cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
          raf = 0;
        });
      }
    };

    window.addEventListener('mousemove', move);

    const targets = document.querySelectorAll<HTMLElement>('[data-cursor-label]');
    const semiTransparentTargets = document.querySelectorAll<HTMLElement>('[data-cursor-semi-transparent]');

    const enter = (event: Event) => {
      const element = event.currentTarget as HTMLElement;
      setLabel(element.dataset.cursorLabel ?? '');
      setExpanded(true);
      setSemiTransparent(false);
    };

    const enterSemiTransparent = () => {
      setSemiTransparent(true);
      setExpanded(false);
    };

    const leave = () => {
      setExpanded(false);
      setSemiTransparent(false);
    };

    targets.forEach((target) => {
      target.addEventListener('mouseenter', enter);
      target.addEventListener('mouseleave', leave);
    });

    semiTransparentTargets.forEach((target) => {
      target.addEventListener('mouseenter', enterSemiTransparent);
      target.addEventListener('mouseleave', leave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      if (raf) window.cancelAnimationFrame(raf);
      targets.forEach((target) => {
        target.removeEventListener('mouseenter', enter);
        target.removeEventListener('mouseleave', leave);
      });
      semiTransparentTargets.forEach((target) => {
        target.removeEventListener('mouseenter', enterSemiTransparent);
        target.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  useEffect(() => {
    if (expanded && measureRef.current) {
      setWidth(measureRef.current.offsetWidth + LABEL_PADDING);
      return;
    }

    setWidth(BASE_SIZE);
  }, [expanded, label]);

  return (
    <>
      <span
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: '-9999px',
          top: '-9999px',
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          fontFamily: '"Azeret Mono", monospace',
          fontSize: '0.7rem', // match the visible label's font-size so measured width equals displayed width
          fontWeight: 500,
          letterSpacing: '0.02em',
        }}
      >
        {label}
      </span>

      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: `${width}px`,
          height: expanded ? '28px' : `${BASE_SIZE}px`,
          borderRadius: 9999,
          backgroundColor: '#d388a3',
          color: '#ffffff',
          pointerEvents: 'none',
          opacity: visible ? (semiTransparent ? 0.4 : 1) : 0,
          transition:
            'width 280ms ease-out, height 280ms ease-out, opacity 160ms ease-out',
          willChange: 'transform, width, height, opacity',
          overflow: 'hidden',
        }}
      >
        <span
          style={{
            whiteSpace: 'nowrap',
            fontFamily: '"Azeret Mono", monospace',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.02em',
            opacity: expanded ? 1 : 0,
            transition: 'opacity 160ms ease-out',
          }}
        >
          {label}
        </span>
      </div>
    </>
  );
}