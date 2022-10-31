import { useContext } from "react";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import MiniNav from "./MiniNav";
import Navigation from "./Navigation";
import { UserContext } from "./UserContext";

function DashBoard() {
    const { user, setUser } = useContext(UserContext);
    if(!user) {
        throw new ErrorBoundary
    }else{
        return
    }

  return (
    <div>
      <Navigation />
        <ErrorBoundary>
          <h1>Dashboard here</h1>
          <MiniNav />
          <Outlet />
        </ErrorBoundary>
    </div>
  );
}
export default DashBoard;
