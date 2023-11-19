import { Image, Spinner, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import clasificationImage from '../assets/img/clasification.png'
import { useState, useEffect } from 'react'
import { getValues } from "../services/sheet_get_values";

// interface Column {
//   key: string;
//   label: string;
// }

// interface Row {
//   key: string;
//   PUNTOS: string;
//   GANADOS: string;
//   'JUEGOS GANADOS': string;
// }


function Clasification() {

  const [rows, setRows] = useState<any[]>();
  const [columna, setColumns] = useState<any[]>();

  useEffect(() => {
    console.log('obteniendo información');
    const getSheets = async () => {
      const { transformedRowsResponse, columnsResponse } = await getValues();

      setRows(transformedRowsResponse);
      console.log(transformedRowsResponse);
      
      setColumns(columnsResponse);
      console.log(columnsResponse);
     
    };
    getSheets();
  }, []);



  return (

      

      

        
    <div>
      <Image
        src={clasificationImage}
        alt='Clasification'
      />

      {
        !rows ? (
          <Spinner />
        ) : (
          <Table className="text-black bg-red" shadow="md" aria-label="Example table with dynamic content">
      <TableHeader columns={columna}>
        {(column) => <TableColumn align="end" key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody isLoading items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
        )
      }



{/* <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table> */}
      
    </div>
        
      

      
      

  )
}

export default Clasification