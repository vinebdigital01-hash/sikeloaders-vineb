import { useEffect, useRef, useState } from 'react';

/**
 * Hook that triggers a fade-in animation when the element scrolls into view.
 * Uses IntersectionObserver and only fires once.
 * Respects prefers-reduced-motion by defaulting to visible.
 */
export function useFadeInOnScroll(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);

  return { ref, isVisible };
}
