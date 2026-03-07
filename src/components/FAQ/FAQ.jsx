import { useState } from 'react';
import { FAQS } from '../../data/footer';
import useScrollReveal from '../../hooks/useScrollReveal';
import './FAQ.css';

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const ref = useScrollReveal();
  return (
    <section className="faq section-wrap section-pad" ref={ref}>
      <h2 className="faq__title sr">Frequently Asked Questions</h2>
      <div className="faq__list">
        {FAQS.map((q, i) => (
          <div
            key={i}
            className={'faq-item sr' + (open === i ? ' faq-item--open' : '')}
            style={{ transitionDelay: i * 0.05 + 's' }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faq-item__row">
              <span className="faq-item__q">{q}</span>
              <span className="faq-item__icon">{open === i ? '−' : '+'}</span>
            </div>
            <div className="faq-item__body">
              <p>Our platform is designed to be flexible and scalable for all use cases.
                 Contact support or check the documentation for detailed guidance specific to your workflow.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
