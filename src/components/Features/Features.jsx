import { FEATURES } from '../../data/features';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Features.css';
import './FeatureCard.css';

export default function Features() {
  const ref = useScrollReveal();
  return (
    <section className="features section-wrap section-pad" ref={ref}>
      <h2 className="features__title sr">
        <span className="features__title-green">AI-Powered</span> 3D Generation
      </h2>
      <div className="features__grid">
        {FEATURES.map((f, i) => (
          <div key={f.id} className="feature-card sr"
            style={{transitionDelay: i*.1+'s', background:f.bgColor, borderColor:f.accentColor+'33'}}>
            <div className="feature-card__header">
              <h3 className="feature-card__title">{f.title}</h3>
              {f.tag && (
                <span className="feature-card__tag"
                  style={{color:f.accentColor, background:f.accentColor+'22', borderColor:f.accentColor+'44'}}>
                  {f.tag}
                </span>
              )}
            </div>
            <p className="feature-card__desc">{f.description}</p>
            {f.imagePath && (
              <div className="feature-card__img-wrap">
                <img src={f.imagePath} alt={f.title} className="feature-card__img"/>
              </div>
            )}
            {f.subText && <p className="feature-card__quote">{f.subText}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
