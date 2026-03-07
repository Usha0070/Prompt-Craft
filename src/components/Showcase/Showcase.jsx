import ModelCard from './ModelCard';
import { COLLECTION_CARDS, MODEL_CARDS } from '../../data/categories';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Showcase.css';

const LEFT_LOGOS  = [
  { id:'blender', src:'/logo-blender.png', alt:'Blender'   },
  { id:'c4d',     src:'/logo-c4d.png',     alt:'Cinema4D'  },
  { id:'godot',   src:'/logo-godot.png',   alt:'Godot'     },
  { id:'unity',   src:'/logo-unity.png',   alt:'Unity'     },
];
const RIGHT_LOGOS = [
  { id:'unreal',  src:'/logo-unreal.png',  alt:'Unreal'    },
  { id:'eye',     src:'/logo-eye.png',     alt:'Software'  },
  { id:'bambu',   src:'/logo-bambu.png',   alt:'Bambu Lab' },
  { id:'zbrush',  src:'/logo-zbrush.png',  alt:'ZBrush'    },
];

export default function Showcase() {
  const ref = useScrollReveal();
  return (
    <section className="showcase section-wrap" ref={ref}>
      <div className="section-header sr">
        <h2 className="section-title">Showcase</h2>
        <button className="btn-ghost">Explore More →</button>
      </div>

      <div className="showcase__row-label sr">
        <span>👥</span> Users Collections
      </div>
      <div className="showcase__collections">
        {COLLECTION_CARDS.map((c, i) => (
          <div key={c.id} className="sr" style={{ transitionDelay: i * 0.08 + 's' }}>
            <ModelCard imagePath={c.imagePath} userImage={c.userImage} label={c.label} bg={c.bg} user={c.user} wide />
          </div>
        ))}
      </div>

      <div className="showcase__row-label sr" style={{ marginTop:36 }}>
        <span>✨</span> 3D Models
      </div>
      <div className="showcase__models">
        {MODEL_CARDS.map((c, i) => (
          <div key={c.id} className="sr" style={{ transitionDelay: i * 0.07 + 's' }}>
            <ModelCard imagePath={c.imagePath} userImage={c.userImage} label={c.label} bg={c.bg} user={c.user} />
          </div>
        ))}
      </div>

      <div className="showcase__integ-bar sr">
        <div className="showcase__integ-left">
          {LEFT_LOGOS.map(l => <img key={l.id} src={l.src} alt={l.alt} className="showcase__integ-logo" title={l.alt} />)}
        </div>
        <span className="showcase__integ-quote">"Use Models in Your Workspace"</span>
        <div className="showcase__integ-right">
          {RIGHT_LOGOS.map(l => <img key={l.id} src={l.src} alt={l.alt} className="showcase__integ-logo" title={l.alt} />)}
        </div>
      </div>
    </section>
  );
}
