import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <NavLink to={Home}>Home</NavLink>
      <NavLink to={Dashboard}>Dashboard</NavLink>
      <NavLink to={Login}>Login</NavLink>
    </div>
  );
}
