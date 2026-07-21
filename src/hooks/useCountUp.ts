import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number | string, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  // Only animate numeric values, return 0 for non-numeric
  const numericTarget = typeof target === 'number' ? target : 0;

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(numericTarget * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [numericTarget, duration, start]);

  return value;
}
