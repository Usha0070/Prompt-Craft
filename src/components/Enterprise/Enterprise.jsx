import useScrollReveal from '../../hooks/useScrollReveal';
import './Enterprise.css';

export default function Enterprise() {
  const ref = useScrollReveal();
  return (
    <section className="enterprise section-wrap section-pad" ref={ref}>
      <div className="enterprise__card sr">
        <div className="enterprise__left">
          <span className="enterprise__eyebrow">🏢 Industry Standard Connection</span>
          <h2 className="enterprise__title">Advanced Enterprise Controls and Administration</h2>
          <p className="enterprise__desc">
            Our services for organizations with powerful tools for secure access, data privacy,
            collaboration, and governance, making it ideal for enterprise environments with
            multiple teams and projects.
          </p>
          <div className="enterprise__sub-block">
            <span className="enterprise__sub-badge">Multi-Team Management</span>
            <p className="enterprise__sub-desc">
              For enterprise organizations handling multiple studios and large teams, we allow you
              to create and manage multiple team workspaces with centralized control and oversight.
            </p>
          </div>
          <button className="btn-primary enterprise__cta">Get Enterprise Access →</button>
        </div>
        <div className="enterprise__right">
          <div className="enterprise__diagram">
            <div className="enterprise__org-top">
              <div className="enterprise__org-node enterprise__org-node--org">
                <span className="enterprise__org-icon">🏢</span>
                <span className="enterprise__org-label">Organization</span>
              </div>
            </div>
            <div className="enterprise__org-lines" aria-hidden="true">
              <div className="enterprise__org-hline" />
            </div>
            <div className="enterprise__org-row">
              {['Studio A','Studio B','Studio C'].map(s => (
                <div key={s} className="enterprise__org-node enterprise__org-node--studio">
                  <div className="enterprise__avatars">
                    <span className="enterprise__avatar">👤</span>
                    <span className="enterprise__avatar">👤</span>
                    <span className="enterprise__avatar">👤</span>
                  </div>
                  <span className="enterprise__studio-label">{s}</span>
                </div>
              ))}
              <div className="enterprise__org-node enterprise__org-node--create">
                <span className="enterprise__create-icon">＋</span>
                <span className="enterprise__studio-label">Create<br/>Workspace</span>
              </div>
            </div>
            <p className="enterprise__diagram-caption">Multi-Team Management</p>
          </div>
        </div>
      </div>
    </section>
  );
}
