import React, { useState } from "react";

function EvenAndOdd() {
  const [evenArray, setEvenArray] = useState([]);
  const [oddArray, setOddArray] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };

  const numSplitter = (userInput) => {
    let evenArr = [];
    let oddArr = [];
    userInput
      .split(",")
      .map((userInput) =>
        userInput % 2 === 0 ? evenArr.push(userInput) : oddArr.push(userInput)
      );
    setEvenArray(evenArr);
    setOddArray(oddArr);
    console.log("hit");
  };

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input type="text" className="inputLine" onChange={handleChange} />
      <button
        className="confirmationButton"
        onClick={() => {
          numSplitter(userInput);
        }}
      >
        Run
      </button>
      <span className="resultsBox">{evenArray}</span>
      <span className="resultsBox">{oddArray}</span>
      {/* {console.log(arraySplitter([]))} */}
    </div>
  );
}

export default EvenAndOdd;
