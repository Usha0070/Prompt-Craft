import { useState } from 'react';
import './WorkspacePanel.css';

export default function TextWorkspacePanel() {
  const [modelType,   setModelType]  = useState('standard');
  const [pose,        setPose]       = useState('A-Pose');
  const [license,     setLicense]    = useState('cc');
  const [multiView,   setMultiView]  = useState(true);
  const [poseToggle,  setPoseToggle] = useState(true);
  const [prompt,      setPrompt]     = useState('');
  const [aiModel,     setAiModel]    = useState('Meshy 6');

  const charCount = prompt.length;

  return (
    <div className="wp">
      {/* Header */}
      <div className="wp__header">
        <span className="wp__title">✦ New Model</span>
        <div className="wp__header-actions">
          <button className="wp__icon-btn" title="Upload reference">⬆</button>
          <button className="wp__icon-btn" title="Settings">⚙️</button>
        </div>
      </div>

      {/* Mode tabs */}
      <div className="wp__mode-tabs">
        <button className="wp__mode-tab wp__mode-tab--active">
          <span className="wp__mode-tab-icon">💬</span>Text to 3D
        </button>
        <button className="wp__mode-tab" onClick={()=>{}}>
          <span className="wp__mode-tab-icon">🖼️</span>Image to 3D
        </button>
      </div>

      {/* Prompt */}
      <div className="wp__field">
        <div className="wp__label-row">
          <label className="wp__label">Prompt</label>
          <div className="wp__label-actions">
            <button className="wp__icon-btn" title="Enhance prompt">✨</button>
            <button className="wp__icon-btn" title="Randomise">🎲</button>
            <button className="wp__icon-btn" title="Clear" onClick={()=>setPrompt('')}>✕</button>
          </div>
        </div>
        <textarea
          className="wp__textarea"
          placeholder="Describe the 3D object you want to generate…&#10;e.g. A steampunk owl with brass gears and glowing eyes"
          value={prompt}
          onChange={e=>setPrompt(e.target.value)}
          rows={5}
        />
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <span style={{fontSize:'9px',color:'var(--text-muted)'}}>{charCount}/500</span>
        </div>
      </div>

      {/* Model Type */}
      <div className="wp__field">
        <label className="wp__label">Model Type <span className="wp__help">?</span></label>
        <div className="wp__toggle-group">
          {['standard','lowpoly'].map(t=>(
            <button key={t} className={'wp__toggle'+(modelType===t?' wp__toggle--active':'')} onClick={()=>setModelType(t)}>
              {t==='standard'?'Standard':'Low Poly (Beta)'}
            </button>
          ))}
        </div>
      </div>

      {/* AI Model */}
      <div className="wp__field">
        <label className="wp__label">AI Model <span className="wp__help">?</span></label>
        <div className="wp__select-wrap">
          <select className="wp__select" value={aiModel} onChange={e=>setAiModel(e.target.value)}>
            <option>Meshy 6</option>
            <option>Meshy 5</option>
            <option>Meshy 4 (Legacy)</option>
          </select>
        </div>
      </div>

      <div className="wp__divider"/>

      {/* Multi-view */}
      <div className="wp__field wp__field--row">
        <label className="wp__label">Multi-view (Beta) <span className="wp__help">?</span></label>
        <div className="wp__switch-row">
          <span className="wp__coin">🪙</span>
          <button className={'wp__switch'+(multiView?' wp__switch--on':'')} onClick={()=>setMultiView(!multiView)}>
            <span className="wp__switch-thumb"/>
          </button>
        </div>
      </div>

      {/* Pose */}
      <div className="wp__field wp__field--row">
        <label className="wp__label">Pose <span className="wp__help">?</span></label>
        <div className="wp__switch-row">
          <span className="wp__coin">🪙</span>
          <button className={'wp__switch'+(poseToggle?' wp__switch--on':'')} onClick={()=>setPoseToggle(!poseToggle)}>
            <span className="wp__switch-thumb"/>
          </button>
        </div>
      </div>
      {poseToggle&&(
        <div className="wp__field" style={{paddingTop:6}}>
          <div className="wp__toggle-group">
            {['A-Pose','T-Pose','Custom'].map(p=>(
              <button key={p} className={'wp__toggle'+(pose===p?' wp__toggle--active':'')} onClick={()=>setPose(p)}>{p}</button>
            ))}
          </div>
        </div>
      )}

      <div className="wp__divider"/>

      {/* License */}
      <div className="wp__field">
        <label className="wp__label">License <span className="wp__help">?</span></label>
        <div className="wp__toggle-group">
          <button className={'wp__toggle wp__toggle--green'+(license==='cc'?' wp__toggle--active':'')} onClick={()=>setLicense('cc')}>CC BY 4.0</button>
          <button className={'wp__toggle wp__toggle--gold'+(license==='private'?' wp__toggle--active-gold':'')} onClick={()=>setLicense('private')}>Private 👑</button>
        </div>
      </div>

      {/* Footer */}
      <div className="wp__footer">
        <div className="wp__hint">
          <span className="wp__hint-dot"/>
          Ready — fill prompt then generate
        </div>
        <div className="wp__cost">
          <span className="wp__time">⏱ ~1 min</span>
          <span className="wp__coin-cost">🪙 20 credits</span>
        </div>
        <button className="wp__generate-btn">
          <span>✦</span> Generate Model
        </button>
      </div>
    </div>
  );
}
