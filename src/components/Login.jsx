import { useContext } from "react";
import Navigation from "./Navigation";
import { UserContext } from "./UserContext";
import { userlogin } from "./UserLogin";

function Login() {
  const { user, setUser } = useContext(UserContext);

  async function handleLogin() {
    const user = await userlogin();
    setUser(user);
  }
  function handleLogout() {
    setUser(null);
  }
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="wrapper">
      <div>
        {user ? (
          <div>
            <h1>You are Logged In</h1>
            <p>Go to the Dashboard</p>
          </div>
        ) : (
          <div>
            <h1>You are Logged Out</h1>
          </div>
        )}
      </div>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      {user ? (
        <button className="button" onClick={handleLogout}>Logout</button>
      ) : (
        <button className="button" onClick={handleLogin}>Login</button>
      )}
      </div>
      </div>
    </div>
  );
}
export default Login;
