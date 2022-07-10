import React from "react";
import {useTable} from "react-table";
import { useSortBy } from "react-table";

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
    },
    useSortBy
  );
  console.log(getTableProps())
  console.log(getTableBodyProps())

  function generateSortingIndicator(column) {
    return column.isSorted ? (column.isSortedDesc ? " ↑ " : " ↓ ") : "";
  }

  return (
    <table className="uppercase" {...getTableProps()}>
      <thead>
      {
        headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr className="bg-gray-400" {...headerGroup.getHeaderGroupProps()} >
              {
                headerGroup.headers.map((column) => (

                    // <th className="border-2 border-black p-2" {...column.getHeaderProps()}>{column.render("Header")}</th>
                    // eslint-disable-next-line react/jsx-key
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                      {generateSortingIndicator(column)}
                    </th>
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
        rows.map(row => {
          prepareRow(row)
          return (
            // eslint-disable-next-line react/jsx-key
            <tr className="bg-gray-200" {...row.getRowProps()}>
              {
                row.cells.map(cell => {
                  // eslint-disable-next-line react/jsx-key
                  return <td className="border-2 border-black p-2" {...cell.getCellProps()}> {cell.render("Cell")} </td>
                })
              }
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}