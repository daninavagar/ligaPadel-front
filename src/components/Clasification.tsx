import React from "react";
import { Image } from "@nextui-org/image";
import clasificationImage from '../assets/img/clasification.png'
import { useState, useEffect } from "react";
import getClasification from "../services/getClasification";
import TableClasification from "./TableClasification";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";


function Clasification() {

  const columns = [
    {
      key: "equipos",
      label: "EQUIPOS",
    },
    {
      key: "puntos",
      label: "PUNTOS",
    },
    {
      key: "ganados",
      label: "GANADOS",
    },
    {
      key: "juegos ganados",
      label: "JUEGOS GANADOS",
    },
  ];

  const [rows, setRows] = useState<any>([]);



  useEffect(() => {

    const fetchClasification = async () => {

      const newClasification = await getClasification()
      console.log(newClasification);
      
      setRows(newClasification);
    }

    fetchClasification();
  }, []);

  return (
    <div className="mt-2 grid justify-center">
      <Image
        src={clasificationImage}
        alt='Clasification Image'
      />
      {/* {
        clasification && clasification.map((item:any, index:any) => {
          return (
            <div key={index} className="flex justify-between">
              <p className="text-white">{item.EQUIPOS}</p>
              <p className="text-white">{item.PUNTOS}</p>
              <p className="text-white">{item.GANADOS}</p>
              <p className="text-white">{item["JUEGOS GANADOS"]}</p>
            </div>
          )
        })
      } */}

      <br />
      <TableClasification columns={columns} rows={rows}/>

      



    </div>
  );
}

export default Clasification;
