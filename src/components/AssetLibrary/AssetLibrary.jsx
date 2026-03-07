import { useState } from 'react';
import { EXAMPLE_ASSETS } from '../../data/workspace';
import './AssetLibrary.css';
export default function AssetLibrary() {
  const [search, setSearch] = useState('');
  const filtered = EXAMPLE_ASSETS.filter(a => a.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <aside className="asset-library">
      <div className="asset-library__top">
        <div className="asset-library__search-wrap">
          <span className="asset-library__search-icon">🔍</span>
          <input className="asset-library__search" placeholder="Search my generation" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <button className="asset-library__upload-btn">⬆ Upload</button>
      </div>
      <div className="asset-library__toolbar">
        <div className="asset-library__toolbar-left">
          {['📁','⊞','⋯','◎','✂️','🏃'].map((b,i) => <button key={i} className={'asset-library__tool-btn' + (i===0?' asset-library__tool-btn--active':'')}>{b}</button>)}
        </div>
        <div className="asset-library__toolbar-right">
          {['⊡','▣','⤢'].map((b,i) => <button key={i} className="asset-library__tool-btn">{b}</button>)}
        </div>
      </div>
      <div className="asset-library__list">
        {filtered.map(asset => (
          <div key={asset.id} className="asset-item">
            <div className="asset-item__header">
              <span className="asset-item__title">{asset.title}</span>
              <span className="asset-item__meta">All {asset.assets} asset ▶</span>
            </div>
            <div className="asset-item__thumb" style={{ background: asset.bg }}>
              {asset.tag && <span className="asset-item__tag">{asset.tag}</span>}
              <span className="asset-item__emoji">{asset.emoji}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="asset-library__pagination">
        <div className="asset-library__page-size"><span>20</span><span>⌃</span></div>
        <span style={{color:'var(--border-subtle)'}}>|</span>
        {['⟨⟨','⟨'].map((b,i) => <button key={i} className="asset-library__page-btn">{b}</button>)}
        <span className="asset-library__page-current">1/1</span>
        {['⟩','⟩⟩'].map((b,i) => <button key={i} className="asset-library__page-btn">{b}</button>)}
      </div>
    </aside>
  );
}
