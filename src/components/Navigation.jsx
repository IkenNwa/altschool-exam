import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Link
        className="nav-item"
        to="/"
      >
        Profile
      </Link>
      <Link
        className="nav-item"
        to="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className="nav-item"
        to="/login"
      >
        Login
      </Link>
    </div>
  );
}
export default Navigation;
