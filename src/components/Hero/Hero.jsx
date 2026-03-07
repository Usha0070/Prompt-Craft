import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const IMAGES = [
  '/front Page images/Container.png',
  '/front Page images/Container (1).png',
  '/front Page images/Container (2).png',
  '/front Page images/Overlay (1).png',
];

export default function Hero() {
  const canvasRef = useRef(null);

  /* lightweight floating-dot particle effect on canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    const DOTS = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - .5) * 0.0006,
      vy: (Math.random() - .5) * 0.0006,
      a: Math.random() * 0.35 + 0.08,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      DOTS.forEach(d => {
        d.x = (d.x + d.vx + 1) % 1;
        d.y = (d.y + d.vy + 1) % 1;
        ctx.beginPath();
        ctx.arc(d.x * canvas.width, d.y * canvas.height, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(61,220,132,${d.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <section className="hero">
      {/* Particle layer */}
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

      {/* Glow blobs */}
      <div className="hero__blob hero__blob--a" aria-hidden="true" />
      <div className="hero__blob hero__blob--b" aria-hidden="true" />

      <div className="hero__inner">
        {/* LEFT — 2×2 image grid */}
        <div className="hero__img-grid">
          {IMAGES.map((src, i) => (
            <div key={i} className="hero__img-cell" style={{ animationDelay: i * 0.14 + 's' }}>
              <img src={src} alt="" className="hero__img" />
              <div className="hero__img-shine" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* RIGHT — copy */}
        <div className="hero__content">
          <h1 className="hero__title" style={{ animationDelay: '.1s' }}>
            IMAGINE, TYPE<br />&amp; See your Imagination
          </h1>
          <p className="hero__subtitle" style={{ animationDelay: '.22s' }}>
            Turn Your Ideas into 3D Models — Just Type or Upload
          </p>
          <div className="hero__actions" style={{ animationDelay: '.34s' }}>
            <Link to="/text-to-3d" className="hero__btn-generate">
              <span className="hero__btn-star">✦</span> Generate
            </Link>
            <Link to="/model-market" className="hero__btn-examples">
              Examples &rsaquo;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
