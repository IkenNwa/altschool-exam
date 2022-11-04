import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import SEO from "./SEO";
import { UserContext } from "./UserContext";
import { userlogin } from "./UserLogin";

function Login() {
  const { user, setUser } = useContext(UserContext);

  async function handleLogin(e) {
    e.preventDefault();

    const user = await userlogin();
    setUser(user);
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
        <div className="home">
          {user ? (
            <>
              <Navigate replace to="/" />
            </>
          ) : (
            <div className="login">
              <button type="submit" className="button" onClick={handleLogin}>
                Login
              </button>
              <p>
                Don't Have an account <Link to="/register">Register</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Login;
