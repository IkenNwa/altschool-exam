import { useState } from "react";
import ErrorBoundaries from "./ErrorBoundary";

function NoFive() {
  const factors = (number) =>
    Array.from(Array(number + 1), (_, i) => i).filter((i) => number % i === 0);

  function Turn() {
    const [num1, setNum1] = useState("0");
    const [num2, setNum2] = useState("0");
    const [result, setResult] = useState(0);
    const [fresults, setFresults] = useState([]);

    function solve() {
      if (num1 === "" && num2 === "") {
        throw new ErrorBoundaries();
      }
      let results = parseFloat(num1) + parseFloat(num2);
      setResult(results);
      setFresults(factors(results));
    }
    if (fresults.indexOf(5) !== -1) {
      throw new ErrorBoundaries();
    }
    return (
      <div className="flex">
        <div className="inputs">
          <input type="number" onChange={(e) => setNum1(e.target.value)} />{" "} +
          <input type="number" onChange={(e) => setNum2(e.target.value)} />
        </div>
        <button onClick={solve} className="button2">
          Solve
        </button>
        <div>{result}</div>
      </div>
    );
  }

  return (
    <div className="user">
      <h4>No Five!</h4>
      <p>
        <em>NB: Your Result must not have five as its Factor</em>
      </p>
      <ErrorBoundaries>
        <Turn />
      </ErrorBoundaries>
    </div>
  );
}

export default NoFive;
