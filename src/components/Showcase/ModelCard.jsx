import './ModelCard.css';

// 1. We added 'imagePath' and 'userImage' to the incoming properties
export default function ModelCard({ imagePath, emoji, label, bg, user='User Name', userImage, wide=false }) {
  return (
    <div className={'model-card' + (wide ? ' model-card--wide' : '')}>
      <div className="model-card__thumb" style={{ background: bg }}>
        
        {/* 2. Show the main image if it exists, otherwise fall back to the emoji */}
        {imagePath ? (
          <img src={imagePath} alt={label} className="model-card__image" />
        ) : (
          <span className="model-card__emoji">{emoji}</span>
        )}
        
        <div className="model-card__overlay" />
      </div>
      <div className="model-card__info">
        {label && <p className="model-card__label">{label}</p>}
        
        <p className="model-card__user">
          {/* 3. Replaced the old 'user-dot' with a real user avatar image */}
          <img 
            src={userImage || '/default-avatar.png'} 
            alt={user} 
            className="model-card__user-pic" 
          />
          {user}
        </p>
        
      </div>
    </div>
  );
}