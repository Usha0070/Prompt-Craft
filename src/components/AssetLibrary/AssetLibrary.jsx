import { useState } from 'react';
import { EXAMPLE_ASSETS } from '../../data/workspace';
import './AssetLibrary.css';

const TOOLS_L = ['📁','⊞','⋯','◎','✂️'];
const TOOLS_R = ['⊡','▣'];

export default function AssetLibrary() {
  const [search, setSearch] = useState('');
  const [activeL, setActiveL] = useState(0);

  const filtered = EXAMPLE_ASSETS.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="al">
      {/* Search + Upload */}
      <div className="al__top">
        <div className="al__search-wrap">
          <span className="al__search-icon">🔍</span>
          <input
            className="al__search"
            placeholder="Search assets…"
            value={search}
            onChange={e=>setSearch(e.target.value)}
          />
        </div>
        <button className="al__upload-btn">⬆ Upload</button>
      </div>

      {/* Toolbar */}
      <div className="al__toolbar">
        <div className="al__tb-left">
          {TOOLS_L.map((b,i)=>(
            <button
              key={i}
              className={'al__tb-btn'+(activeL===i?' al__tb-btn--active':'')}
              onClick={()=>setActiveL(i)}
            >{b}</button>
          ))}
        </div>
        <div className="al__tb-right">
          {TOOLS_R.map((b,i)=><button key={i} className="al__tb-btn">{b}</button>)}
        </div>
      </div>

      {/* Asset list */}
      <div className="al__list">
        {filtered.length===0 && (
          <div style={{textAlign:'center',padding:'32px 16px',color:'var(--text-muted)',fontSize:'12px'}}>
            No assets found
          </div>
        )}
        {filtered.map(asset=>(
          <div key={asset.id} className="al__item">
            <div className="al__item-header">
              <span className="al__item-title">{asset.title}</span>
              <span className="al__item-meta">All {asset.assets} ▶</span>
            </div>
            <div className="al__item-thumb" style={{background:asset.bg}}>
              {asset.tag && <span className="al__item-tag">{asset.tag}</span>}
              <img src={asset.imagePath} alt={asset.title} className="al__item-img"/>
              <div className="al__item-hover">
                <button className="al__item-use-btn">✦ Use Model</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="al__pagination">
        <div className="al__pg-size"><span>20</span><span>⌃</span></div>
        <span style={{color:'var(--border-subtle)'}}>|</span>
        {['⟨⟨','⟨'].map((b,i)=><button key={i} className="al__pg-btn">{b}</button>)}
        <span className="al__pg-current">1 / 1</span>
        {['⟩','⟩⟩'].map((b,i)=><button key={i} className="al__pg-btn">{b}</button>)}
      </div>
    </aside>
  );
}
