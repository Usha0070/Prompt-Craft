import './ModelCard.css';
export default function ModelCard({ emoji, label, bg, user='User Name', wide=false }) {
  return (
    <div className={'model-card' + (wide ? ' model-card--wide' : '')}>
      <div className="model-card__thumb" style={{ background: bg }}>
        <span className="model-card__emoji">{emoji}</span>
        <div className="model-card__overlay" />
      </div>
      <div className="model-card__info">
        {label && <p className="model-card__label">{label}</p>}
        <p className="model-card__user"><span className="model-card__user-dot" />{user}</p>
      </div>
    </div>
  );
}
