import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import MiniNav from "./MiniNav";
import Navigation from "./Navigation";
import SEO from "./SEO";
import { UserContext } from "./UserContext";

function DashBoard() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <SEO
        title="Dasboard"
        description="This Page contains nested routes"
        type="page"
        name="Dashboard Page"
      />
      <Navigation />
      <div className="home">
        {user ? (
          <div>
            <h1>Welcome to your Dasboard</h1>
            <div className="dashboard">
              <MiniNav />
              <Outlet />
            </div>
          </div>
        ) : (
          <div>
            <h1>You are not Logged in</h1>
            <p>
              <Link to="/login">Login</Link> to see more.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default DashBoard;

{
  /* */
}
