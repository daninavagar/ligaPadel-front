import React from "react";
import { Image } from "@nextui-org/image";
import clasificationImage from '../assets/img/clasification.png'
// import { useState } from "react";
function Clasification() {

  // const [clasification, setClasification] = useState(null)
  return (
    <div className="mt-2 grid justify-center">
      <Image
        src={clasificationImage}
        alt='Clasification Image'
      />
    </div>
  )
}

export default Clasification