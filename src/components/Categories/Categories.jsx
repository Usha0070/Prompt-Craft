import { CATEGORIES } from '../../data/categories';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Categories.css';

export default function Categories() {
  const ref = useScrollReveal();
  return (
    <section className="categories section-wrap section-pad" ref={ref}>
      <div className="section-header sr">
        <h2 className="section-title">Category</h2>
        <button className="btn-ghost">Explore More ▸</button>
      </div>
      <div className="categories__row">
        {CATEGORIES.map((c, i) => (
          <div key={c.id} className="cat-card sr" style={{transitionDelay: i*0.07+'s'}}>
            <div className="cat-card__img-box">
              <img src={c.img} alt={c.label} className="cat-card__img" />
              <div className="cat-card__overlay" aria-hidden="true"/>
              <div className="cat-card__shine" aria-hidden="true"/>
            </div>
            <span className="cat-card__label">{c.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
