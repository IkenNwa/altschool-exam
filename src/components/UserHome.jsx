import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserHome() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <div>
        <img className="user-image" src={user.profile} alt={user.username} />
        <h1>Welcome {user.name}</h1>
        <p>This is your E-Mail: {user.email}</p>
      </div>
      <div>
        <div className="grid">
          <div>
            <h3>Stats</h3>
            <p>{user.stats}</p>
          </div>
          <div>
            <h3>Stats</h3>
            <p>{user.stats}</p>
          </div>
          <div>
            <h3>Stats</h3>
            <p>{user.stats}</p>
          </div>
          <div>
            <h3>Stats</h3>
            <p>{user.stats}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
