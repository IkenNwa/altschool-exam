import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { UserContext } from "./UserContext";
import { userlogin } from "./UserLogin";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const [pwd, setPwd] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    console.log(pwd);

    const user = await userlogin(pwd);
    if (pwd === "1007") {
      setUser(user);
    }
  }
  function handleLogout() {
    setUser(null);
  }
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="wrapper">
          <>
            {user ? (
              <>
                <h1>Logged In</h1>
                <p><Link to="/">Go back Home</Link></p>
                <button className="button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <form onSubmit={handleLogin}>
                  <label htmlFor="name">Username: </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Username"
                    required
                  />
                  <br />
                  <label htmlFor="pwd">Password: </label>
                  <input
                    type="password"
                    id="pwd"
                    placeholder="Password"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                  />
                  <button type="submit" className="button">
                    Login
                  </button>
                </form>
                <p>
                  Don't Have an account <Link to="/register">Register</Link>
                </p>
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
}
export default Login;
