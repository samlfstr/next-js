import React from "react";
import {useTable} from "react-table";
import TableData from "./TableData";

export default function TableContainer({columns, data}) {

  // Use deconstructing to get the data and columns from useTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    }
  );
  console.log(getTableProps())
  console.log(getTableBodyProps())
  return (
    <table {...getTableProps()}>
      <thead>
      {
        headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr {...headerGroup.getHeaderGroupProps()} >
              {
                headerGroup.headers.map((column) => (
                    // eslint-disable-next-line react/jsx-key
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                  )
                )
              }
            </tr>
          )
        )
      }
      </thead>
      <tbody {...getTableBodyProps()}>
      {
        rows.map(row => { prepareRow(row)
        return (
          // eslint-disable-next-line react/jsx-key
          <tr {...row.getRowProps()}>
            {
              row.cells.map(cell => {
                // eslint-disable-next-line react/jsx-key
                return <td {...cell.getCellProps()}> {cell.render("Cell")} </td>})
            }
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}