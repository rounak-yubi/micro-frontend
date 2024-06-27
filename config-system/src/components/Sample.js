import React, { useState, Suspense } from "react";
import TableComponent from "./TableComponent";

import "./Sample.css";

const Assessment = React.lazy(() => import("computed_assesment/Assesment"));

const Sample = ({ sharedData, updateData, styleConnector }) => {
  const [app2Data, setApp2Data] = useState([]);

  // Define table data as a constant
  const tableData = [
    { id: 1, data: "Row 1 Content" },
    { id: 2, data: "Row 2 Content" },
    { id: 3, data: "Row 3 Content" },
  ];

  const handleButtonClick = (value) => {
    if (value) {
      setApp2Data(value);
    }
  };

  return (
    <div className="sample-container">
      <h2>Remote App 1</h2>
      <TableComponent
        tableData={tableData}
        onButtonClick={handleButtonClick}
        styleConnector={styleConnector}
      />
      <Suspense fallback={<div>Loading Assessment...</div>}>
        <Assessment sharedData={app2Data} />
      </Suspense>
    </div>
  );
};

export default Sample;
