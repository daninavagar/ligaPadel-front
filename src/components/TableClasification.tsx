import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

interface TableClasificationProps {
  columns: any;
  rows: any;
}

export default function TableClasification({columns,rows}: TableClasificationProps) {
  return (
    <Table aria-label="Example table with dynamic content">
    <TableHeader columns={columns}>
      {(column: any) => <TableColumn className="text-center" key={column.key}>{column.label}</TableColumn>}
    </TableHeader>
    <TableBody items={rows}>
      {(item: any) => (
        <TableRow key={item.key}>
          {(column: any) => <TableCell className="text-black">{getKeyValue(item, column)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>
  );
}
         

