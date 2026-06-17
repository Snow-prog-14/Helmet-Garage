import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const [isIntersecting, setIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [options]);

  return { targetRef, isIntersecting };
}
