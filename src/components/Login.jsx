import { useState } from "react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import SEO from "./SEO";
import { UserContext } from "./UserContext";
import { userlogin } from "./UserLogin";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const [pwd, setPwd] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    console.log(pwd);

    const user = await userlogin(pwd);
    if (pwd === "blank") {
      setUser(user);
    }
  }
  
  return (
    <div>
      <SEO
        title="Login"
        description="You will have to login before you will see any content"
        type="page"
        name="Login Page"
      />
      <Navigation />
      <div>
        <div>
            {user ? (
              <>
                <Navigate replace to="/" />
              </>
            ) : (
              <>
                <form onSubmit={handleLogin} className="form">
                  <label htmlFor="name">Username: </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Username"
                    required
                  />
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
          
        </div>
      </div>
    </div>
  );
}
export default Login;
