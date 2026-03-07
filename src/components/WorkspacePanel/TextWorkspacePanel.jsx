import { useState } from 'react';
import './WorkspacePanel.css';

export default function TextWorkspacePanel() {
  const [modelType,   setModelType]   = useState('standard');
  const [pose,        setPose]        = useState('A-Pose');
  const [license,     setLicense]     = useState('cc');
  const [multiView,   setMultiView]   = useState(true);
  const [poseToggle,  setPoseToggle]  = useState(true);
  const [prompt,      setPrompt]      = useState('');
  return (
    <div className="workspace-panel">
      <div className="workspace-panel__header">
        <span className="workspace-panel__title">New Model</span>
        <button className="workspace-panel__upload-icon">⬆</button>
      </div>
      <div className="workspace-panel__mode-tabs">
        <button className="workspace-panel__mode-tab">🖼️</button>
        <button className="workspace-panel__mode-tab workspace-panel__mode-tab--active">🧊</button>
      </div>
      <div className="workspace-panel__field">
        <div className="workspace-panel__label-row">
          <label className="workspace-panel__label">Prompt</label>
          <div className="workspace-panel__label-actions">
            <button className="workspace-panel__icon-btn">✨</button>
            <button className="workspace-panel__icon-btn">🎲</button>
            <button className="workspace-panel__icon-btn">✕</button>
          </div>
        </div>
        <textarea className="workspace-panel__textarea" placeholder="Describe the object you want to generate." value={prompt} onChange={e=>setPrompt(e.target.value)} rows={5} />
      </div>
      <div className="workspace-panel__field">
        <label className="workspace-panel__label">Model Type <span className="workspace-panel__help">?</span></label>
        <div className="workspace-panel__toggle-group">
          <button className={'workspace-panel__toggle'+(modelType==='standard'?' workspace-panel__toggle--active':'')} onClick={()=>setModelType('standard')}>Standard</button>
          <button className={'workspace-panel__toggle'+(modelType==='lowpoly'?' workspace-panel__toggle--active':'')} onClick={()=>setModelType('lowpoly')}>Low Poly (Beta)</button>
        </div>
      </div>
      <div className="workspace-panel__field">
        <label className="workspace-panel__label">AI Model <span className="workspace-panel__help">?</span></label>
        <div className="workspace-panel__select-wrap">
          <select className="workspace-panel__select"><option>Meshy 6</option><option>Meshy 5</option></select>
        </div>
      </div>
      <div className="workspace-panel__field workspace-panel__field--row">
        <label className="workspace-panel__label">Multi-view (Beta) <span className="workspace-panel__help">?</span></label>
        <div className="workspace-panel__switch-row">
          <span className="workspace-panel__coin">🪙</span>
          <button className={'workspace-panel__switch'+(multiView?' workspace-panel__switch--on':'')} onClick={()=>setMultiView(!multiView)}><span className="workspace-panel__switch-thumb" /></button>
        </div>
      </div>
      <div className="workspace-panel__field workspace-panel__field--row">
        <label className="workspace-panel__label">Pose <span className="workspace-panel__help">?</span></label>
        <div className="workspace-panel__switch-row">
          <span className="workspace-panel__coin">🪙</span>
          <button className={'workspace-panel__switch'+(poseToggle?' workspace-panel__switch--on':'')} onClick={()=>setPoseToggle(!poseToggle)}><span className="workspace-panel__switch-thumb" /></button>
        </div>
      </div>
      {poseToggle && (
        <div className="workspace-panel__toggle-group" style={{margin:'0 14px'}}>
          {['A-Pose','T-Pose','Custom'].map(p=>(
            <button key={p} className={'workspace-panel__toggle'+(pose===p?' workspace-panel__toggle--active':'')} onClick={()=>setPose(p)}>{p}</button>
          ))}
        </div>
      )}
      <div className="workspace-panel__field">
        <label className="workspace-panel__label">License <span className="workspace-panel__help">?</span></label>
        <div className="workspace-panel__toggle-group">
          <button className={'workspace-panel__toggle workspace-panel__toggle--green'+(license==='cc'?' workspace-panel__toggle--active':'')} onClick={()=>setLicense('cc')}>CC BY 4.0</button>
          <button className={'workspace-panel__toggle workspace-panel__toggle--gold'+(license==='private'?' workspace-panel__toggle--active-gold':'')} onClick={()=>setLicense('private')}>Private 👑</button>
        </div>
      </div>
      <div className="workspace-panel__footer">
        <div className="workspace-panel__cost">
          <span className="workspace-panel__time">1 min</span>
          <span className="workspace-panel__coin-cost">🪙 20</span>
        </div>
        <button className="workspace-panel__generate-btn">✦ Generate</button>
      </div>
    </div>
  );
}
