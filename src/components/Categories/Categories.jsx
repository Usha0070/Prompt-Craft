import { CATEGORIES } from '../../data/categories';
import './Categories.css';
export default function Categories() {
  return (
    <section className="categories section-wrap section-pad">
      <div className="section-header">
        <h2 className="section-title">Category</h2>
        <button className="btn-ghost">Explore More →</button>
      </div>
      <div className="categories__grid">
        {CATEGORIES.map(c => (
          <button key={c.id} className="categories__card">
            <span className="categories__emoji">{c.emoji}</span>
            <span className="categories__label">{c.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
