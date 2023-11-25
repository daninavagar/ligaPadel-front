import React from "react";
// import { useState, useEffect } from "react";
// import { Image } from "@nextui-org/image";
import { Tabs, Tab } from "@nextui-org/tabs"
import TableRound from './tableComponents/TableRound'

function Round() {
  const nRounds = parseInt(import.meta.env.VITE_APP_N_ROUND)
  const rounds = Array.from({length: nRounds}, (_, i) => i + 1)

  // const [roundImages, setImages] = useState<string[]>([]);

  // useEffect(() => {
  //   setImages([round_1, round_2, round_3,round_1, round_2, round_3,round_1, round_2, round_3]);
  // }, []);

  return (
    <div className="mt-2 grid justify-center">
      <Tabs className="mt-2 grid justify-center">
        {
          rounds.map((round) => {
            return (
              <Tab key={round} title={`Jornada ${round}`}>
                <TableRound roundParameter={round} />
              </Tab>
            )
          })
        }
      </Tabs>
    </div>
  );
}

export default Round;