import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import MiniNav from "./MiniNav";
import Navigation from "./Navigation";
import { UserContext } from "./UserContext";

function DashBoard() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <Navigation />
          <div className="container">
            <h1>Dashboard here</h1>
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
  );
}
export default DashBoard;

{
  /* */
}
