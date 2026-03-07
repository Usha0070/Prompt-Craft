import { useState } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Studio.css';

const INTEGRATIONS = [
  { id:'blender', label:'Blender',       logo:'/logo-blender.png' },
  { id:'maya',    label:'Maya',          logo:'/logo-c4d.png'     },
  { id:'3dsmax',  label:'3ds Max',       logo:'/logo-zbrush.png'  },
  { id:'unity',   label:'Unity',         logo:'/logo-unity.png'   },
  { id:'unreal',  label:'Unreal Engine', logo:'/logo-unreal.png'  },
];
const TOOLS = [
  { icon:'⬛', label:'Select'   },
  { icon:'✏️',  label:'Draw'    },
  { icon:'🔵', label:'Orbit'   },
  { icon:'💡', label:'Light'   },
  { icon:'📐', label:'Measure' },
  { icon:'⚙️',  label:'Settings'},
];

export default function Studio() {
  const [activeInteg, setActiveInteg] = useState('blender');
  const [activeTool,  setActiveTool]  = useState(0);
  const ref = useScrollReveal();

  return (
    <section className="studio section-wrap section-pad" ref={ref}>
      <div className="studio__card sr">
        <div className="studio__left">
          <p className="studio__eyebrow">Online Studio for 3D model editing</p>
          <h2 className="studio__title">
            <span className="studio__title-green">ONLINE STUDIO</span>
            <br />FOR 3D MODEL EDITING
          </h2>
          <p className="studio__desc">
            Turn text or images into 3D models in seconds. Generate high-quality visuals and
            create realistic textures with AI — all within our Studio.
          </p>
          <div className="studio__integrations">
            {INTEGRATIONS.map(integ => (
              <button
                key={integ.id}
                className={'studio__integ-btn' + (activeInteg === integ.id ? ' studio__integ-btn--active' : '')}
                onClick={() => setActiveInteg(integ.id)}
                title={integ.label}
              >
                <img src={integ.logo} alt={integ.label} className="studio__integ-logo" />
                {integ.label}
              </button>
            ))}
          </div>
          <button className="studio__cta-btn">Online Studio ↗</button>
        </div>
        <div className="studio__right">
          <div className="studio__mockup">
            <div className="studio__mockup-bar">
              <span className="studio__dot studio__dot--r" />
              <span className="studio__dot studio__dot--y" />
              <span className="studio__dot studio__dot--g" />
              <span className="studio__mockup-url">studio.promptcraft.ai</span>
            </div>
            <div className="studio__viewport">
              <div className="studio__vp-grid" aria-hidden="true" />
              <div className="studio__vp-model">
                <img src="/Imageto3D_Pic4.png" alt="3D model" className="studio__vp-img" />
                <div className="studio__vp-glow" aria-hidden="true" />
              </div>
              <div className="studio__vp-axes" aria-hidden="true">
                <span style={{color:'#ef4444'}}>X</span>
                <span style={{color:'#22c55e'}}>Y</span>
                <span style={{color:'#3b82f6'}}>Z</span>
              </div>
            </div>
            <div className="studio__toolbar">
              {TOOLS.map((t, i) => (
                <button
                  key={i}
                  className={'studio__tool-btn' + (activeTool === i ? ' studio__tool-btn--active' : '')}
                  onClick={() => setActiveTool(i)}
                  title={t.label}
                >{t.icon}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
