import ModelCard from './ModelCard';
import { COLLECTION_CARDS, MODEL_CARDS } from '../../data/categories';
import './Showcase.css';
const INTEGRATIONS = ['Blender','Maya','3ds Max','Unity','Unreal Engine'];
const EXTRA = ['</>','⚡','𝕗','◈'];
export default function Showcase() {
  return (
    <section className="showcase section-wrap">
      <div className="section-header">
        <h2 className="section-title">Showcase</h2>
        <button className="btn-ghost">Explore More →</button>
      </div>
      <div className="showcase__row-label"><span>👥</span> Users Collections</div>
      <div className="showcase__collections">
        {COLLECTION_CARDS.map(c => <ModelCard key={c.id} emoji={c.emoji} label={c.label} bg={c.bg} user={c.user} wide />)}
      </div>
      <div className="showcase__row-label" style={{marginTop:36}}><span>✨</span> 3D Models</div>
      <div className="showcase__models">
        {MODEL_CARDS.map(c => <ModelCard key={c.id} emoji={c.emoji} label={c.label} bg={c.bg} />)}
      </div>
      <div className="showcase__integ-bar">
        <div className="showcase__integ-left">
          {INTEGRATIONS.map(n => <span key={n} className="showcase__integ-badge">⚙️ {n}</span>)}
        </div>
        <span className="showcase__integ-quote">"Use Models in Your Workspace"</span>
        <div className="showcase__integ-right">
          {EXTRA.map(b => <span key={b} className="showcase__integ-badge">{b}</span>)}
        </div>
      </div>
    </section>
  );
}
