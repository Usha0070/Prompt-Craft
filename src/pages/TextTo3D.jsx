import Navbar             from '../components/Navbar/Navbar';
import Sidebar            from '../components/Sidebar/Sidebar';
import TextWorkspacePanel from '../components/WorkspacePanel/TextWorkspacePanel';
import AssetLibrary       from '../components/AssetLibrary/AssetLibrary';
import './WorkspacePage.css';

const VP_TOOLS = ['⊡','◎','🔄','💡','📷','⚙️'];

export default function TextTo3D() {
  return (
    <div className="workspace-page">
      <Navbar />
      <div className="workspace-page__body">
        <Sidebar />
        <TextWorkspacePanel />

        {/* ── Central Viewport ── */}
        <main className="workspace-page__viewport">
          {/* Top toolbar */}
          <div className="vp-toolbar">
            {VP_TOOLS.map((t,i)=>(
              <button key={i} className="vp-tb-btn" title={t}>{t}</button>
            ))}
          </div>

          {/* Empty state */}
          <div className="viewport-empty">
            <div className="vp-shapes">
              <div className="vp-shape">▲</div>
              <div className="vp-shape">●</div>
              <div className="vp-shape">■</div>
              <div className="vp-shape">◆</div>
            </div>
            <h2 className="vp-title">What will you create today?</h2>
            <p className="vp-sub">
              Describe your 3D model in the prompt panel — our AI will generate it for you in under a minute.
            </p>
            <div className="vp-hint">
              <span className="vp-hint-dot"/>
              Type a prompt on the left, then click Generate
            </div>
          </div>

          {/* Bottom axes info bar */}
          <div className="vp-infobar">
            <div className="vp-axes">
              <span style={{color:'#ef4444'}}>X</span>
              <span style={{color:'#22c55e'}}>Y</span>
              <span style={{color:'#3b82f6'}}>Z</span>
            </div>
            <span>Text to 3D · studio.promptcraft.ai</span>
          </div>
        </main>

        <AssetLibrary />
      </div>
    </div>
  );
}
