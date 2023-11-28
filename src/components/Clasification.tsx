import React from "react";
// import { Image } from "@nextui-org/image";
// import clasificationImage from '../assets/img/clasification.png'
import { useState, useEffect } from "react";
import { getClasification } from "../services/getClasification";
import TableClasification from "./TableClasification";
import { Spinner } from "@nextui-org/react";


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
  const [loading, setLoading] = useState(true)



  useEffect(() => {

    const fetchClasification = async () => {

      try {
        const newClasification = await getClasification()
        setRows(newClasification)
        
    } catch (error) {
        console.error('Error fetching classification:', error)
    } finally {
        setLoading(false)
    }
    }

    fetchClasification();
  }, []);

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="mt-2 grid justify-center">
      <TableClasification columns={columns} rows={rows}/>
    </div>
  );
}

export default Clasification;
