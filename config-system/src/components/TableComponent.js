import React from "react";

const TableComponent = ({ tableData, onButtonClick }) => {
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
              <button onClick={() => onButtonClick(item.data)}>
                Pass to App 2
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
