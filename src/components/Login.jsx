import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Navigation from "./Navigation";

function Login() {
    function Counter() {
        const [count, setCount]= useState(0)
        function handleClick() {
          setCount(count + 1)
        }
        if (count === 5) {
          throw new ErrorBoundary()
        }
        return(
        <h1 onClick={handleClick} >{count}</h1>
        );
      }
    
      return (
        <div>
          <h1>This is the Home page</h1>
          <p>I can't see my house here.</p>
          <Navigation />
          <ErrorBoundary>
            <Counter />
          </ErrorBoundary>
        </div>
      );
    };
export default Login;
