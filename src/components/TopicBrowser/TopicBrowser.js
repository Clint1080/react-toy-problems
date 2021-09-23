import React, { Component } from "react";

// From Topics
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";

function Hello() {
  return <p>Hello react</p>;
}

export default class TopicBrowser extends Component {
  render() {
    return (
      <div className="puzzleFeed">
        <Hello />
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    );
  }
}
