import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { MARKET_COMMUNITY, MARKET_MODELS } from '../data/workspace';
import './ModelMarket.css';

const SPOTLIGHT_TAGS = ['3D Printing','Game Development','Collections','Creators','User Stories'];
const FILTER_TABS    = ['All','Featured','Following','Trending'];
const HERO_BANNERS   = [
  { tag:'NEW FOUNDATION MODEL', title:'MESHY 6 TEXTURE',                          emoji:'🎨', bg:'linear-gradient(135deg,#0a2a3a,#0a1a2a)' },
  { tag:'NEW FEATURE',          title:'Stylized Generation in Image Workspace',    emoji:'🖼️', bg:'linear-gradient(135deg,#1a2a0a,#2a1a0a)' },
  { tag:'TUTORIAL',             title:'How to Create Multi-Color 3D Prints?',      emoji:'🖨️', bg:'linear-gradient(135deg,#2a0a1a,#1a0a2a)' },
  { tag:'TUTORIAL',             title:'Game Assets Made Easy: Tank Battle Game',   emoji:'🎮', bg:'linear-gradient(135deg,#0a1a0a,#1a2a0a)' },
];
const TAG_ICONS = {'3D Printing':'🖨️','Game Development':'🎮','Collections':'📁','Creators':'👤','User Stories':'📖'};

export default function ModelMarket() {
  const [activeSpot,   setActiveSpot]   = useState('3D Printing');
  const [activeFilter, setActiveFilter] = useState('All');
  const [search,       setSearch]       = useState('');
  const filtered = MARKET_MODELS.filter(m => m.title.toLowerCase().includes(search.toLowerCase()) || m.author.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="market-page">
      <Navbar />
      <main className="market-page__main">
        <section className="market-banners">
          {HERO_BANNERS.map((b,i) => (
            <div key={i} className="market-banner" style={{ background: b.bg }}>
              <span className="market-banner__tag">{b.tag}</span>
              <div className="market-banner__emoji">{b.emoji}</div>
              <p className="market-banner__title">{b.title}</p>
            </div>
          ))}
        </section>

        <section className="market-spotlight">
          <div className="market-spotlight__header">
            <h2 className="market-spotlight__title">Community Spotlight</h2>
            <div className="market-spotlight__tabs">
              {SPOTLIGHT_TAGS.map(tag => (
                <button key={tag} className={'market-spotlight__tab'+(activeSpot===tag?' market-spotlight__tab--active':'')} onClick={()=>setActiveSpot(tag)}>
                  {TAG_ICONS[tag]} {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="market-spotlight__grid">
            {MARKET_COMMUNITY.map(item => (
              <div key={item.id} className="market-community-card">
                <div className="market-community-card__thumb" style={{ background: item.bg }}>
                  <span className="market-community-card__emoji">{item.emoji}</span>
                  <span className="market-community-card__tag-overlay">{item.tag}</span>
                </div>
                <div className="market-community-card__stats">
                  <span>👁 {item.views}</span><span>❤️ {item.likes}</span><span>💬 {item.comments}</span><span>🔖 {item.saves}</span>
                </div>
                <div className="market-community-card__info">
                  <div className="market-community-card__author-row">
                    <span className="market-community-card__avatar">{item.author[0]}</span>
                    <div><p className="market-community-card__author">{item.author}</p><p className="market-community-card__time">{item.time}</p></div>
                    <span className="market-community-card__downloads">⬇ {item.downloads}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="market-spotlight__view-more">View More →</button>
        </section>

        <section className="market-inspiration">
          <div className="market-inspiration__header">
            <h2 className="market-inspiration__title">More Inspiration</h2>
            <div className="market-inspiration__filters">
              <span className="market-inspiration__filter-label">🧊 Models ▾</span>
              {FILTER_TABS.map(tab => (
                <button key={tab} className={'market-inspiration__filter-tab'+(activeFilter===tab?' market-inspiration__filter-tab--active':'')} onClick={()=>setActiveFilter(tab)}>{tab}</button>
              ))}
              <div className="market-inspiration__search-wrap">
                <input className="market-inspiration__search" placeholder="🔍 Search models..." value={search} onChange={e=>setSearch(e.target.value)} />
                <button className="market-inspiration__search-btn">Search</button>
              </div>
            </div>
          </div>
          <div className="market-inspiration__grid">
            {filtered.map(model => (
              <div key={model.id} className="market-model-card">
                <div className="market-model-card__thumb" style={{ background: model.bg }}>
                  <span className="market-model-card__emoji">{model.emoji}</span>
                  <span className="market-model-card__price">{model.price}</span>
                  <span className="market-model-card__type-badge">{model.type}</span>
                </div>
                <div className="market-model-card__info">
                  <div className="market-model-card__author-row">
                    <span className="market-model-card__avatar">{model.author[0]}</span>
                    <div><p className="market-model-card__author">{model.author}</p><p className="market-model-card__time">{model.days} days ago</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
