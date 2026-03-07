import Navbar              from '../components/Navbar/Navbar';
import Sidebar             from '../components/Sidebar/Sidebar';
import ImageWorkspacePanel from '../components/WorkspacePanel/ImageWorkspacePanel';
import AssetLibrary        from '../components/AssetLibrary/AssetLibrary';
import './WorkspacePage.css';

const VP_TOOLS = ['⊡','◎','🔄','💡','📷','⚙️'];

export default function ImageTo3D() {
  return (
    <div className="workspace-page">
      <Navbar />
      <div className="workspace-page__body">
        <Sidebar />
        <ImageWorkspacePanel />

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
              <div className="vp-shape">🖼️</div>
              <div className="vp-shape">🧊</div>
              <div className="vp-shape">✨</div>
              <div className="vp-shape">⬆</div>
            </div>
            <h2 className="vp-title">Upload an Image to Begin</h2>
            <p className="vp-sub">
              Upload a reference photo or artwork — our AI will convert it into a detailed 3D model ready for download.
            </p>
            <div className="vp-hint">
              <span className="vp-hint-dot"/>
              Drag an image into the left panel to start
            </div>
          </div>

          {/* Bottom axes info bar */}
          <div className="vp-infobar">
            <div className="vp-axes">
              <span style={{color:'#ef4444'}}>X</span>
              <span style={{color:'#22c55e'}}>Y</span>
              <span style={{color:'#3b82f6'}}>Z</span>
            </div>
            <span>Image to 3D · studio.promptcraft.ai</span>
          </div>
        </main>

        <AssetLibrary />
      </div>
    </div>
  );
}
