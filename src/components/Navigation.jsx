import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Link
        className="active"
        to="/"
      >
        Profile
      </Link>
      <Link
        className="active"
        to="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className="active"
        to="/login"
      >
        Login
      </Link>
    </div>
  );
}
export default Navigation;
