import { useNavigate, useLocation } from 'react-router-dom';
import { SIDEBAR_ITEMS } from '../../data/workspace';
import './Sidebar.css';
export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const routeMap = { image:'/image-to-3d', model:'/text-to-3d', remesh:'/text-to-3d', texture:'/text-to-3d', animate:'/text-to-3d' };
  return (
    <aside className="sidebar">
      {SIDEBAR_ITEMS.map(item => {
        const active = (item.id==='image' && pathname==='/image-to-3d') || (item.id!=='image' && pathname==='/text-to-3d' && item.id==='model');
        return (
          <button key={item.id} className={'sidebar__item' + (active ? ' sidebar__item--active' : '')} onClick={() => navigate(routeMap[item.id])}>
            <span className="sidebar__icon">{item.icon}</span>
            <span className="sidebar__label">{item.label}</span>
          </button>
        );
      })}
      <div className="sidebar__spacer" />
      <button className="sidebar__item sidebar__item--vote">
        <span className="sidebar__icon">🗳️</span>
        <span className="sidebar__label">Vote Model</span>
      </button>
    </aside>
  );
}
