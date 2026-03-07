import { useState } from 'react';
import { FAQS } from '../../data/footer';
import './FAQ.css';
function FAQItem({ q, isOpen, onToggle }) {
  return (
    <div className={'faq-item' + (isOpen ? ' faq-item--open' : '')}>
      <button className="faq-item__trigger" onClick={onToggle}>
        <span className="faq-item__question">{q}</span>
        <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="faq-item__answer"><p>Our platform provides flexible options to fit your workflow. Reach out to our support team for detailed guidance.</p></div>}
    </div>
  );
}
export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq section-wrap section-pad">
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <div className="faq__list">
        {FAQS.map((q,i) => <FAQItem key={i} q={q} isOpen={open===i} onToggle={() => setOpen(open===i?null:i)} />)}
      </div>
      <p className="faq__contact">Didn't find the answer? <button className="faq__contact-link">Contact us →</button></p>
    </section>
  );
}
