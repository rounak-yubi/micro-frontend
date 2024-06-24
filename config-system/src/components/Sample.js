// src/components/Sample.js
import React from "react";
var add = require("add");

const Sample = () => {
  var numbers = [0.1, 0.2, 0.3];
  // console.log(add(numbers)); // Outputs a numerically stable sum
  return (
    <>
      <h5>Hello from Sample Component!</h5>
    </>
  );
};

export default Sample;
