import React, { useState } from "react";

function EvenAndOdd() {
  const [evenArray, setEvenArray] = useState([]);
  return (
    <div className="puzzleBox evenAndOddPB">
      <input type="text" className="inputLine" />
      <button className="confirmationButton"></button>
      <span className="resultsBox"></span>
      <span className="resultsBox"></span>
    </div>
  );
}

export default EvenAndOdd;
