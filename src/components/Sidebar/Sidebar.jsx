import { useNavigate, useLocation } from 'react-router-dom';
import { SIDEBAR_ITEMS } from '../../data/workspace';
import './Sidebar.css';

const ROUTE_MAP = {image:'/image-to-3d', model:'/text-to-3d', remesh:'/text-to-3d', texture:'/text-to-3d', animate:'/text-to-3d'};

export default function Sidebar() {
  const navigate  = useNavigate();
  const {pathname}= useLocation();

  const isActive = id =>
    (id==='image' && pathname==='/image-to-3d') ||
    (id==='model' && pathname==='/text-to-3d');

  return (
    <aside className="sidebar">
      <div className="sidebar__group">
        {SIDEBAR_ITEMS.map(item=>(
          <button
            key={item.id}
            className={'sidebar__item'+(isActive(item.id)?' sidebar__item--active':'')}
            onClick={()=>navigate(ROUTE_MAP[item.id])}
            title={item.label}
          >
            <span className="sidebar__icon">{item.icon}</span>
            <span className="sidebar__label">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="sidebar__divider"/>
      <div className="sidebar__spacer"/>
      <button className="sidebar__item sidebar__item--vote" title="Vote Model">
        <span className="sidebar__icon">🗳️</span>
        <span className="sidebar__label">Vote</span>
      </button>
    </aside>
  );
}
