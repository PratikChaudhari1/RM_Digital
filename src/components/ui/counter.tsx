import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

export function Counter({ 
  end, 
  suffix = "", 
  duration = 2000,
  delay = 0 
}: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(percentage) * end);
      
      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(startAnimation);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(startAnimation);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, end, duration, delay]);

  return (
    <span ref={ref} className="inline-block">
      {count}
      {suffix}
    </span>
  );
}