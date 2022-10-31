import { useContext } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { UserContext } from "./UserContext";

function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <Navigation />
      <div className="container">
        {user ? (
          <div className="wrapper">
            <img className="user-image" src={user.profile} alt={user.username} />
            <h1>Welcome {user.username}</h1>
            <p>This is your E-Mail: {user.email}</p>
            <p>Hello</p>
          </div>
        ) : (
          <div className="wrapper">
            <h1>Please Login to see details</h1>
            <Link to="/login">Go to Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
