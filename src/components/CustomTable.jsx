/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const getColorClassFromStyle = (style) => {
    let classToReturn = 'text-gray-500 bg-white';
    const {fill : {fgColor : {rgb = '00ff80'}}} = style;
    if(rgb === '00ff80'){
        classToReturn = 'text-white bg-green-500'
    }
    if(rgb === 'ff0000'){
        classToReturn = 'text-white bg-red-500'
    }
    if(rgb === 'ff8000'){
        classToReturn = 'text-white bg-orange-500'
    }
    console.log(style);
    return classToReturn;
}

const CustomTable = ({ columns, data }) => {
  console.log(columns, data);
  return (
    <div className="container flex  mx-auto my-4">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table>
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((col, index) => (
                    <th key={index} className="px-6 py-2 text-xs text-gray-500">
                      {col.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.map((row, indexRow) => {
                  return (
                    <tr key={indexRow} className="whitespace-nowrap">
                      {row.map((col, indexCol) => (
                        <td
                          key={indexCol}
                          className={`px-6 py-4 text-sm ${getColorClassFromStyle(col.style)}`}
                        >
                          {col.value}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
