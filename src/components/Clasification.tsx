import React from "react";
// import { Image } from "@nextui-org/image";
// import clasificationImage from '../assets/img/clasification.png'
import { useState, useEffect } from "react";
import getClasification from "../services/getClasification";
import TableClasification from "./TableClasification";


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
      <TableClasification columns={columns} rows={rows}/>
    </div>
  );
}

export default Clasification;
