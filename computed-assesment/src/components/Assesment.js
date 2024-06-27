import React from "react";

const Assessment = ({ sharedData }) => {
  console.log("sharedData from App1: ", sharedData);
  return (
    <div>
      <h2>Remote App 2</h2>
      <div>Data from App1: {sharedData}</div>
    </div>
  );
};

export default Assessment;
