import React from "react"
import { useState, useEffect } from "react"
import { Spinner } from "@nextui-org/react"
import { getPlayers } from "../services/getTeams"

function Players() {

    const [players, setPlayers] = useState<any>()

    useEffect(() => {
        getPlayers()
            .then((players) => {
                console.log(players);
                setPlayers(players)
            })
    }, [])
    return (
        <div className="mt-3 grid justify-center">
            {
                players ? 
                (
                    players.map((player) => {
                        return (
                          <div key={player.id}>
                            <p>{player.name}</p>
                          </div>
                        )
                      })
                ) : (
                    <Spinner/>
                )
            }
        </div>
    )
}

export default Players;