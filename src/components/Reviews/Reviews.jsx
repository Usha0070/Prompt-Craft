import { REVIEWS } from '../../data/reviews';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Reviews.css';

function Stars({ n = 5 }) {
  return (
    <div className="rv-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={'rv-star' + (i < n ? ' rv-star--on' : '')}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useScrollReveal();
  return (
    <section className="reviews section-wrap section-pad" ref={ref}>
      <p className="reviews__eyebrow sr">User Reviews</p>
      <h2 className="reviews__title sr">Top Reviews from our Happy Users</h2>
      <div className="reviews__grid">
        {REVIEWS.map((r, i) => (
          <article key={r.id} className="review-card sr" style={{ transitionDelay: i * 0.1 + 's' }}>
            <Stars n={r.rating} />
            <blockquote className="review-card__text">"{r.text}"</blockquote>
            <footer className="review-card__footer">
              <div className="review-card__avatar">{r.avatar}</div>
              <div>
                <p className="review-card__name">{r.name}</p>
                <p className="review-card__role">{r.role}</p>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
