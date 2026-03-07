import { useState, useRef } from 'react';
import './WorkspacePanel.css';

export default function ImageWorkspacePanel() {
  const [modelType,  setModelType]  = useState('standard');
  const [pose,       setPose]       = useState('A-Pose');
  const [license,    setLicense]    = useState('cc');
  const [multiView,  setMultiView]  = useState(true);
  const [poseToggle, setPoseToggle] = useState(true);
  const [dragOver,   setDragOver]   = useState(false);
  const [preview,    setPreview]    = useState(null);
  const [name,       setName]       = useState('');
  const [aiModel,    setAiModel]    = useState('Meshy 6');
  const fileRef = useRef();

  const handleDrop = e => {
    e.preventDefault(); setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f) setPreview(URL.createObjectURL(f));
  };
  const handleFile = e => {
    const f = e.target.files[0];
    if (f) setPreview(URL.createObjectURL(f));
  };

  return (
    <div className="wp">
      {/* Header */}
      <div className="wp__header">
        <span className="wp__title">🖼️ New Model</span>
        <div className="wp__header-actions">
          <button className="wp__icon-btn" onClick={()=>fileRef.current.click()} title="Upload">⬆</button>
          <button className="wp__icon-btn" title="Settings">⚙️</button>
        </div>
      </div>

      {/* Mode tabs */}
      <div className="wp__mode-tabs">
        <button className="wp__mode-tab" onClick={()=>{}}>
          <span className="wp__mode-tab-icon">💬</span>Text to 3D
        </button>
        <button className="wp__mode-tab wp__mode-tab--active">
          <span className="wp__mode-tab-icon">🖼️</span>Image to 3D
        </button>
      </div>

      {/* Image upload */}
      <div className="wp__field">
        <div className="wp__label-row">
          <label className="wp__label">Reference Image</label>
          <div className="wp__label-actions">
            <button className="wp__icon-btn" onClick={()=>fileRef.current.click()} title="Upload">⬆</button>
            <button className="wp__icon-btn" title="From URL">🔗</button>
            <button className="wp__icon-btn" onClick={()=>setPreview(null)} title="Clear">✕</button>
          </div>
        </div>
        <div
          className={'wp__dropzone'+(dragOver?' wp__dropzone--over':'')+(preview?' wp__dropzone--filled':'')}
          onDragOver={e=>{e.preventDefault();setDragOver(true)}}
          onDragLeave={()=>setDragOver(false)}
          onDrop={handleDrop}
          onClick={()=>fileRef.current.click()}
        >
          {preview
            ? <img src={preview} alt="preview" className="wp__preview"/>
            : <>
                <span className="wp__drop-icon">📁</span>
                <p className="wp__drop-text">Click, Drag &amp; Drop or Paste</p>
                <p className="wp__drop-sub">PNG · JPG · JPEG · WEBP</p>
                <p className="wp__drop-sub">Max 20 MB</p>
              </>
          }
        </div>
        <input ref={fileRef} type="file" accept=".png,.jpg,.jpeg,.webp" style={{display:'none'}} onChange={handleFile}/>
      </div>

      {/* Name */}
      <div className="wp__field">
        <label className="wp__label">Model Name</label>
        <input className="wp__input" placeholder="Give your model a name" value={name} onChange={e=>setName(e.target.value)}/>
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
          {preview ? 'Image ready — click Generate!' : 'Upload an image to continue'}
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
