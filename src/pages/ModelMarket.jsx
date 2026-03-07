import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { MARKET_COMMUNITY, MARKET_MODELS } from '../data/workspace';
import useScrollReveal from '../hooks/useScrollReveal';
import './ModelMarket.css';

const SPOTLIGHT_TAGS = ['3D Printing','Game Development','Collections','Creators','User Stories'];
const FILTER_TABS    = ['All','Featured','Following','Trending'];
const TAG_ICONS      = {'3D Printing':'🖨️','Game Development':'🎮','Collections':'📁','Creators':'👤','User Stories':'📖'};

const HERO_BANNERS = [
  { imagePath:'/New Images/NEW FOUNDATION MODEL.png', tag:'NEW FOUNDATION MODEL', accentColor:'#3ddc84', wide:true  },
  { imagePath:'/New Images/NEW FEATURE.png',          tag:'NEW FEATURE',          accentColor:'#f59e0b', wide:false },
  { imagePath:'/New Images/TUTORIAL.png',             tag:'TUTORIAL',             accentColor:'#f472b6', wide:false },
  { imagePath:'/New Images/TUTORIAL (1).png',         tag:'TUTORIAL',             accentColor:'#60a5fa', wide:false },
];

export default function ModelMarket() {
  const [activeSpot,   setActiveSpot]   = useState('3D Printing');
  const [activeFilter, setActiveFilter] = useState('All');
  const [search,       setSearch]       = useState('');
  const bannerRef   = useScrollReveal();
  const spotRef     = useScrollReveal(.05);
  const inspireRef  = useScrollReveal(.05);

  const filtered = MARKET_MODELS.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase()) ||
    m.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="market-page">
      <Navbar />
      <main className="market-page__main">

        {/* ── Hero Banners ── */}
        <section className="market-banners" ref={bannerRef}>
          {HERO_BANNERS.map((b, i) => (
            <div key={i} className={'market-banner sr'+(b.wide?' market-banner--wide':'')}
              style={{transitionDelay: i*.08+'s'}}>
              <img src={b.imagePath} alt={b.tag} className="market-banner__bg-img"/>
              <div className="market-banner__overlay">
                <span className="market-banner__tag"
                  style={{color:b.accentColor,background:b.accentColor+'22',border:'1px solid '+b.accentColor+'44'}}>
                  {b.tag}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* ── Community Spotlight ── */}
        <section className="market-spotlight" ref={spotRef}>
          <div className="market-spotlight__header sr">
            <h2 className="market-spotlight__title">Community Spotlight</h2>
            <div className="market-spotlight__tabs">
              {SPOTLIGHT_TAGS.map(tag=>(
                <button key={tag}
                  className={'market-spotlight__tab'+(activeSpot===tag?' market-spotlight__tab--active':'')}
                  onClick={()=>setActiveSpot(tag)}>
                  {TAG_ICONS[tag]} {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="market-spotlight__grid">
            {MARKET_COMMUNITY.map((item,i)=>(
              <div key={item.id} className="market-community-card sr" style={{transitionDelay:i*.09+'s'}}>
                <div className="market-community-card__thumb" style={{background:item.bg}}>
                  <img src={item.imagePath} alt={item.title} className="market-community-card__img"/>
                  <span className="market-community-card__tag-overlay">{item.tag}</span>
                  <div className="market-community-card__hover-overlay">
                    <button className="market-community-card__view-btn">View Collection</button>
                  </div>
                </div>
                <div className="market-community-card__stats">
                  <span>👁 {item.views}</span><span>❤️ {item.likes}</span>
                  <span>💬 {item.comments}</span><span>🔖 {item.saves}</span>
                  <span className="market-community-card__dl">⬇ {item.downloads}</span>
                </div>
                <div className="market-community-card__info">
                  <p className="market-community-card__title">{item.title}</p>
                  <div className="market-community-card__author-row">
                    <div className="market-community-card__avatar">{item.author[0].toUpperCase()}</div>
                    <div>
                      <p className="market-community-card__author">{item.author}</p>
                      <p className="market-community-card__time">{item.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="market-spotlight__footer sr">
            <button className="market-spotlight__view-more">View More →</button>
          </div>
        </section>

        {/* ── More Inspiration ── */}
        <section className="market-inspiration" ref={inspireRef}>
          <div className="market-inspiration__header sr">
            <h2 className="market-inspiration__title">More Inspiration</h2>
            <div className="market-inspiration__controls">
              <span className="market-inspiration__type-pill">🧊 Models ▾</span>
              <div className="market-inspiration__filter-tabs">
                {FILTER_TABS.map(tab=>(
                  <button key={tab}
                    className={'market-inspiration__filter-tab'+(activeFilter===tab?' market-inspiration__filter-tab--active':'')}
                    onClick={()=>setActiveFilter(tab)}>{tab}</button>
                ))}
              </div>
              <div className="market-inspiration__search-wrap">
                <span className="market-inspiration__search-icon">🔍</span>
                <input className="market-inspiration__search" placeholder="Search…"
                  value={search} onChange={e=>setSearch(e.target.value)}/>
                <button className="market-inspiration__search-btn">Search</button>
              </div>
            </div>
          </div>
          <div className="market-inspiration__grid">
            {filtered.map((model,i)=>(
              <div key={model.id} className="market-model-card sr" style={{transitionDelay:i*.04+'s'}}>
                <div className="market-model-card__thumb" style={{background:model.bg}}>
                  <img src={model.imagePath} alt={model.title} className="market-model-card__img"/>
                  <span className="market-model-card__price">{model.price}</span>
                  <span className="market-model-card__type-badge">{model.type}</span>
                  <div className="market-model-card__hover-bar">
                    <span>👁 {model.views}</span>
                    <span>❤️ {model.likes}</span>
                    <span>💬 {model.comments}</span>
                  </div>
                </div>
                <div className="market-model-card__info">
                  <p className="market-model-card__title">{model.title}</p>
                  <div className="market-model-card__author-row">
                    <div className="market-model-card__avatar">{model.author[0].toUpperCase()}</div>
                    <div>
                      <p className="market-model-card__author">{model.author}</p>
                      <p className="market-model-card__time">{model.days}d ago</p>
                    </div>
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
