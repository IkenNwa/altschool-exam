import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
}
export default Navigation;
