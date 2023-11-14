import { Image } from "@nextui-org/image";
import clasificationImage from '../assets/img/clasification.png'
import { useState, useEffect } from 'react'
import { getValues } from "../services/sheet_get_values";



function Clasification() {



  const [clasification, setClasification] = useState()

  useEffect(() => {

    console.log('obteniendo información');
    const spreadsheetId = '1r3uP2mEJuUwHVewI-FkR8J1fNe3UGE4A'
    const range = 'Clasificación!A1:B10'
    const rows = getValues(spreadsheetId, range)
    
    // console.log(rows);
        

  },[])
  return (
    <Image
      src={clasificationImage}
      alt='Clasification Image'
    />
  )
}

export default Clasification