import { useEffect, useRef } from 'react';
export default function useScrollReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('.sr');
    items.forEach((item, i) => {
      item.style.transitionDelay = (delay + i * 0.07) + 's';
    });
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('sr--visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    items.forEach(item => io.observe(item));
    return () => io.disconnect();
  }, [delay]);
  return ref;
}
