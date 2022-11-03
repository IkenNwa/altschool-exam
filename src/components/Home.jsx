import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import SEO from "./SEO";
import { UserContext } from "./UserContext";
import UserHome from "./UserHome";

function Home() {
  const { user, setUser } = useContext(UserContext);
  
  return (
    <div>
      <SEO
        title="Home"
        description="See your Stats and profile details here"
        type="page"
        name="Casual Page"
      />
      <Navigation />
      <div className="home">
        {user ? (
          <div className="wrapper">
            <UserHome />
          </div>
        ) : (
          <div>{
          alert("You are logged out")}
            <Navigate replace to="/login" />
            </div>
        )}
      </div>
    </div>
  );
}

export default Home;
