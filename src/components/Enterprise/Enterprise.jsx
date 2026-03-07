import './Enterprise.css';
const SWATCHES = ['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6','#1abc9c','#e67e22','#3ddc84','#27ae60'];
export default function Enterprise() {
  return (
    <section className="enterprise section-wrap section-pad">
      <div className="enterprise__card">
        <div className="enterprise__left">
          <span className="enterprise__eyebrow">🏢 Industry Standard Connection</span>
          <h2 className="enterprise__title">Advanced Enterprise Controls and Administration</h2>
          <p className="enterprise__desc">Our services for organizations with powerful tools for secure access, data privacy, collaboration, and governance, making it ideal for enterprise environments with multiple teams and projects.</p>
          <div className="enterprise__sub-block">
            <span className="enterprise__sub-badge">Multi-Team Management</span>
            <p className="enterprise__desc">For enterprise organizations handling multiple games and large teams, we allow you to create and manage multiple team workspaces with centralized control and oversight.</p>
          </div>
          <button className="btn-primary enterprise__cta">Get Enterprise Access →</button>
        </div>
        <div className="enterprise__right">
          <div className="enterprise__swatches">
            {SWATCHES.map((c,i) => <div key={i} className="enterprise__swatch" style={{ background: c }} />)}
          </div>
          <div className="enterprise__pills">
            {[{icon:'🔒',label:'Secure Access',sub:'Enterprise-grade security'},{icon:'👥',label:'Team Workspaces',sub:'Centralized oversight'},{icon:'📊',label:'Usage Analytics',sub:'Detailed reporting'}].map(p => (
              <div key={p.label} className="enterprise__pill">
                <span className="enterprise__pill-icon">{p.icon}</span>
                <div><div className="enterprise__pill-label">{p.label}</div><div className="enterprise__pill-sub">{p.sub}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
