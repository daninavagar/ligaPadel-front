import { useState, useEffect } from "react";
import { Image } from "@nextui-org/image";
import { Tabs, Tab } from "@nextui-org/tabs";
import round_1 from "../assets/img/round_1.png";
import round_2 from "../assets/img/round_2.png";
import round_3 from "../assets/img/round_3.png";
import round_4 from "../assets/img/round_4.png";
function Round() {

  
  const [roundImages, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages([round_1, round_2, round_3, round_4]);
  }, []);

  return (
    <div>
      <Tabs>
        {
          roundImages.map((image, index) => {
            return (
              <Tab key={index} title={`Jornada ${index + 1}`}>
                <Image
                  src={image}
                  alt={`Jornada ${index + 1}`}
                />
              </Tab>
            )
          })  
        }
      </Tabs>
    </div>
  )
}

export default Round