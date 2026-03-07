import './Hero.css';
const BG = ['🦊','🎃','⚔️','🐉','👑','🧙','🌊','🏔️','🌙'];
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-grid" aria-hidden="true">
        {BG.map((e,i) => <div key={i} className="hero__bg-cell">{e}</div>)}
      </div>
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__eyebrow">AI-Powered 3D Generation</p>
        <h1 className="hero__title">IMAGINE, TYPE<br />&amp; See your Imagination</h1>
        <p className="hero__subtitle">Turn Your Ideas into 3D Models — Just Type or Upload</p>
        <div className="hero__actions">
          <button className="hero__btn-generate"><span>⚡</span> Generate</button>
          <button className="hero__btn-examples">Examples →</button>
        </div>
        <div className="hero__badge"><span className="hero__badge-dot" />Powered by advanced AI</div>
      </div>
    </section>
  );
}
