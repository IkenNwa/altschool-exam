import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
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
      <div>
        {user ? (
          <div>
            <Navigation />
            <h1>Welcome to your Dasboard</h1>
            <div className="dashboard">
              <MiniNav />
              <Outlet />
            </div>
          </div>
        ) : (
          <div>
            {alert("Login First!!")}
            <Navigate replace to="/login" />
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
