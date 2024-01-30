import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

interface TablePlayersProps {
  columns: any;
  rows: any;
}

export default function TablePlayers({columns,rows}: TablePlayersProps) {
  return (
    <Table aria-label="Example table with dynamic content">
    <TableHeader columns={columns}>
      {(column: any) => <TableColumn className="text-center" key={column.key}>{column.label}</TableColumn>}
    </TableHeader>
    <TableBody items={rows}>
      {(item: any) => (
        <TableRow key={item.key}>
          {(columnKey: any) => <TableCell className="text-black">{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>
  );
}
    
