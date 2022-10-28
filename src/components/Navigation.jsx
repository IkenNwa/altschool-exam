import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}
export default Navigation;
