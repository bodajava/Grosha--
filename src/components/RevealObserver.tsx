"use client";

import { useEffect, useRef } from "react";

export function RevealObserver({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    function observeElements() {
      const elements = el!.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])');
      if (!elements.length) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elements.forEach(el => { el.dataset.revealed = 'true'; });
        return;
      }

      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = 'true';
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

      elements.forEach(el => io.observe(el));
    }

    observeElements();

    const observer = new MutationObserver(() => observeElements());
    observer.observe(el, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
