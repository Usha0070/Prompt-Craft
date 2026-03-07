import './Studio.css';
const INTEGRATIONS = ['Blender','Maya','3ds Max','Unity','Unreal Engine'];
export default function Studio() {
  return (
    <section className="studio section-wrap section-pad">
      <div className="studio__card">
        <div className="studio__left">
          <p className="studio__eyebrow">Online Studio for 3D model editing</p>
          <h2 className="studio__title"><span className="studio__title-highlight">ONLINE STUDIO</span><br />FOR 3D MODEL EDITING</h2>
          <p className="studio__desc">Turn text or images into 3D models in seconds. Generate high-quality visuals and create realistic textures with AI — all within our Studio.</p>
          <div className="studio__integrations">
            {INTEGRATIONS.map(n => <span key={n} className="studio__integ-tag">{n}</span>)}
          </div>
          <button className="studio__btn">Online Studio ↗</button>
        </div>
        <div className="studio__mockup">
          <div className="studio__mockup-bar">
            <span className="studio__mock-dot studio__mock-dot--red" />
            <span className="studio__mock-dot studio__mock-dot--yellow" />
            <span className="studio__mock-dot studio__mock-dot--green" />
            <span className="studio__mockup-url">studio.promptcraft.ai</span>
          </div>
          <div className="studio__mockup-viewport">
            <div className="studio__mockup-grid" aria-hidden="true" />
            <div className="studio__mockup-model">🧊</div>
            <div className="studio__mockup-axes">
              <span style={{color:'#e74c3c'}}>X</span>
              <span style={{color:'#2ecc71'}}>Y</span>
              <span style={{color:'#3498db'}}>Z</span>
            </div>
          </div>
          <div className="studio__mockup-toolbar">
            {['🔲','✏️','🔄','💡','📐','⚙️'].map((icon,i) => <button key={i} className="studio__tool-btn">{icon}</button>)}
          </div>
        </div>
      </div>
    </section>
  );
}
