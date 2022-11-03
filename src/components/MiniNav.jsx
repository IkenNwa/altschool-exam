import { NavLink } from "react-router-dom";

function MiniNav() {
  return (
    <div className="nest">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to="/dashboard/all"
      >
        All
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to="/dashboard/work"
      >
        Work
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to="/dashboard/casual"
      >
        Casual
      </NavLink>
    </div>
  );
}
export default MiniNav;
