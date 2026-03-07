import { REVIEWS } from '../../data/reviews';
import './Reviews.css';
function Stars({ n=5 }) {
  return <div className="reviews__stars" aria-label={n+' stars'}>{Array.from({length:n}).map((_,i)=><span key={i}>★</span>)}</div>;
}
function ReviewCard({ r }) {
  return (
    <article className="review-card">
      <Stars n={r.rating} />
      <blockquote className="review-card__text">"{r.text}"</blockquote>
      <footer className="review-card__author">
        <div className="review-card__avatar">{r.avatar}</div>
        <div><p className="review-card__name">{r.name}</p><p className="review-card__role">{r.role}</p></div>
      </footer>
    </article>
  );
}
export default function Reviews() {
  return (
    <section className="reviews section-wrap section-pad">
      <p className="reviews__eyebrow">User Review for AI Generative Website</p>
      <h2 className="reviews__title">Top Review from our Happy Users</h2>
      <div className="reviews__grid">{REVIEWS.map(r => <ReviewCard key={r.id} r={r} />)}</div>
      <div className="reviews__cta"><button className="btn-ghost">See all the reviews →</button></div>
    </section>
  );
}
