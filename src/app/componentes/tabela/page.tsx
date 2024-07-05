import React from 'react';

const Table = ({ data,onRowClick  }:any) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item:any, index:any) => (
          <tr key={index} onClick={(e)=>onRowClick(e) }>
            {Object.values(item).map((value:any, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
