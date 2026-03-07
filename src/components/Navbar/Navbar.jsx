import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label:'Text to 3D',              path:'/text-to-3d'   },
  { label:'Pricing',                 path:'/#pricing'     },
  { label:'Image to 3D',             path:'/image-to-3d'  },
  { label:'Model Market',            path:'/model-market' },
  { label:'Video to 3D',             path:'/#', badge:'Soon' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo">
          <span className="navbar__logo-mark"><span className="navbar__logo-dot"/></span>
          <span className="navbar__logo-text">Prompt <strong>Craft</strong></span>
        </NavLink>

        <nav className="navbar__links">
          {NAV_LINKS.map(l => (
            <NavLink key={l.label} to={l.path}
              className={({isActive})=>'navbar__link'+(isActive&&!l.path.startsWith('/#')?' navbar__link--active':'')}>
              {l.label}
              {l.badge && <span className="navbar__badge">{l.badge}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="btn-primary navbar__btn">Sign Up</button>
          <button className="btn-outline navbar__btn">Login</button>
        </div>

        <button className="navbar__hamburger" onClick={()=>setOpen(!open)} aria-label="menu">
          {[0,1,2].map(i=><span key={i} className={'hline'+(open?' hline--open':'')}/>)}
        </button>
      </div>

      {open&&(
        <div className="navbar__mobile">
          {NAV_LINKS.map(l=>(
            <NavLink key={l.label} to={l.path} className="navbar__mobile-link" onClick={()=>setOpen(false)}>
              {l.label}{l.badge&&<span className="navbar__badge">{l.badge}</span>}
            </NavLink>
          ))}
          <div className="navbar__mobile-actions">
            <button className="btn-primary">Sign Up</button>
            <button className="btn-outline">Login</button>
          </div>
        </div>
      )}
    </header>
  );
}
