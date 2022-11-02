import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import { UserContext } from "./UserContext";
import UserHome from "./UserHome";

function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <Navigation />
      <div className="container">
        {user ? (
          <div className="wrapper">
            <UserHome />
          </div>
        ) : (
          <Navigate replace to="/login" />
        )}
      </div>
    </div>
  );
}

export default Home;
