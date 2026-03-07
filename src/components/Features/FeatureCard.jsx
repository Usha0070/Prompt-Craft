import './FeatureCard.css';
export default function FeatureCard({ feature }) {
  const { title, description, subText, tag, emoji, bgColor, accentColor } = feature;
  return (
    <div className="feature-card" style={{ background: bgColor, '--accent': accentColor }}>
      <div className="feature-card__header">
        <h3 className="feature-card__title">{title}</h3>
        {tag && <span className="feature-card__tag" style={{ color: accentColor, background: accentColor+'22' }}>{tag}</span>}
      </div>
      <p className="feature-card__desc">{description}</p>
      {subText && <p className="feature-card__sub">{subText}</p>}
      <div className="feature-card__media"><span className="feature-card__emoji">{emoji}</span></div>
      <div className="feature-card__accent-line" style={{ background: accentColor }} />
    </div>
  );
}
