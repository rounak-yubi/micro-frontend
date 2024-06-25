import React, { useState, Suspense } from "react";
import TableComponent from "./TableComponent";

const Assessment = React.lazy(() => import("computed_assesment/Assesment"));

const Sample = ({ sharedData, updateData }) => {
  const [app2Data, setApp2Data] = useState([]);

  // Define table data as a constant
  const tableData = [
    { id: 1, data: "Row 1 Data" },
    { id: 2, data: "Row 2 Data" },
    { id: 3, data: "Row 3 Data" },
  ];

  const handleButtonClick = (value) => {
    if (value) {
      console.log("Button clicked in App 1 with value: ", value);
      setApp2Data(value);
      // Update sharedData with app2Data
    }
  };

  return (
    <div>
      <h2>Remote App 1</h2>
      <TableComponent tableData={tableData} onButtonClick={handleButtonClick} />
      <Suspense fallback={<div>Loading Assessment...</div>}>
        <Assessment sharedData={app2Data} />
      </Suspense>
      <div>Data: {sharedData.app1Data}</div>
    </div>
  );
};

export default Sample;
