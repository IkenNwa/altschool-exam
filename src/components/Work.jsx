import { useState } from "react";

function Work() {
  const [low, setLow] = useState(null);
  const [high, setHigh] = useState(null);
  const [odd, setOdd] = useState(null);
  const [length, setLength] = useState(null)

  let odds;
  function countOdds() {
    let arr = [low, high];
    function loop() {
      let newLow;
      for (newLow = low; newLow < high; newLow++) {
        arr.splice(1, 0, newLow);
      }
    }
    loop();
    odds = arr.filter((num) => num % 2 === 1);
    setOdd(odds.toString());
    setLength(odds.length)
  }
  return (
    <div className="wrapper">
      <h1>Work here!</h1>
      <div>
      <input
        type="number"
        onChange={(e) => setLow(e.target.value)}
        required
      />{" "}
      ,{" "}
      <input type="number" onChange={(e) => setHigh(e.target.value)} maxLength="2" required />
      </div>
      <button onClick={countOdds} className="button">Count Odds</button>
      <p>{odd}  {odd ? (`and is ${length - 1} in Length.`): (" ")}</p>
    </div>
  );
}
export default Work;
