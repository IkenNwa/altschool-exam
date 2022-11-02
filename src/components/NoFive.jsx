import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

function NoFive() {
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");
  const [result, setResult] = useState(0);

  const factors = (number) =>
    Array.from(Array(number + 1), (_, i) => i).filter((i) => number % i === 0);

  function solve() {
    let results = parseFloat(num1) + parseFloat(num2);
    setResult(results);
    let resultss = factors(results);
    if (resultss.indexOf(5) !== -1) {
      throw new ErrorBoundary("Has Five as its Factor");
    }
  }

  return (
    <div>
      <h4>No Five!</h4>
      <p>
        <em>NB: Your Result must not have five as its Factor</em>
      </p>
      <div className="wrapper">
        <div>
          <input type="number" onChange={(e) => setNum1(e.target.value)} /> +{" "}
          <input type="number" onChange={(e) => setNum2(e.target.value)} />{" "}
        </div>
        <div>{result}</div>
        <button onClick={solve} className="button">
          Solve
        </button>
      </div>
    </div>
  );
}

export default NoFive;
