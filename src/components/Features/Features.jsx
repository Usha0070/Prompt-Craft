import FeatureCard from './FeatureCard';
import { FEATURES } from '../../data/features';
import './Features.css';
export default function Features() {
  return (
    <section className="features section-wrap section-pad">
      <div className="features__grid">
        {FEATURES.map(f => <FeatureCard key={f.id} feature={f} />)}
      </div>
    </section>
  );
}
