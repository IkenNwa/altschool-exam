import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserHome() {
  const { user, setUser } = useContext(UserContext);
  function handleLogout() {
    setUser(null);
  }

  return (
    <div>
      <div className="user">
        <img className="user-image" src={user.profile} alt={user.username} />
        <h1 className="user-title">Welcome {user.name}</h1>
        <p className="user-email">This is your E-Mail: {user.email}</p>
    <button className="button" onClick={handleLogout}>LogOut</button>
      </div>
      <div className="container">
      </div>
    </div>
  );
}

export default UserHome;
