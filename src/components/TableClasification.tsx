import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";


export default function TableClasification({columns,rows}) {
  return (
    <Table aria-label="Example table with dynamic content">
    <TableHeader columns={columns}>
      {(column) => <TableColumn className="text-center" key={column.key}>{column.label}</TableColumn>}
    </TableHeader>
    <TableBody items={rows}>
      {(item) => (
        <TableRow key={item.key}>
          {(columnKey) => <TableCell className="text-black">{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>
  );
}
