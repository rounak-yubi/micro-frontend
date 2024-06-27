import React from "react";
import Button from "@yubi/yb-core-button";

const TableComponent = ({ tableData, onButtonClick, styleConnector }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Data</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.data}</td>
            <td>
              <Button
                disabled={false}
                size="m"
                onClick={() => {
                  onButtonClick(item.data);
                }}
                title={"Pass to App 2"}
                width="auto"
                variant="cta"
                styleConnector={styleConnector}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
