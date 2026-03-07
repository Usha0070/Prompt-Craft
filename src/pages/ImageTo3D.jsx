import Navbar              from '../components/Navbar/Navbar';
import Sidebar             from '../components/Sidebar/Sidebar';
import ImageWorkspacePanel from '../components/WorkspacePanel/ImageWorkspacePanel';
import AssetLibrary        from '../components/AssetLibrary/AssetLibrary';
import './WorkspacePage.css';
export default function ImageTo3D() {
  return (
    <div className="workspace-page">
      <Navbar />
      <div className="workspace-page__body">
        <Sidebar />
        <ImageWorkspacePanel />
        <main className="workspace-page__viewport">
          <div className="workspace-viewport__empty">
            <div className="workspace-viewport__icon-group" aria-hidden="true">
              <span className="workspace-viewport__shape workspace-viewport__shape--triangle">▲</span>
              <span className="workspace-viewport__shape workspace-viewport__shape--circle">●</span>
              <span className="workspace-viewport__shape workspace-viewport__shape--square">■</span>
              <span className="workspace-viewport__shape workspace-viewport__shape--diamond">◆</span>
            </div>
            <h2 className="workspace-viewport__title">What will you create today?</h2>
            <p className="workspace-viewport__sub">Generate a new model from image or text, or edit one from your asset library. Your next masterpiece awaits.</p>
          </div>
        </main>
        <AssetLibrary />
      </div>
    </div>
  );
}
