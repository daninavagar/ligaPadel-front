import React from "react"
import { useState, useEffect } from "react"
// import { Spinner } from "@nextui-org/react"
import { getPlayers } from "../services/getTeams"

function Players() {

    const [players, setPlayers] = useState<any>()

    // const columns = [
    //     {
    //       key: "EQUIPOS",
    //       label: "EQUIPOS",
    //     },
    //     {
    //       key: "JUGADORES",
    //       label: "JUGADORES",
    //     },
    //     {
    //       key: "CAPITAN",
    //       label: "CAPITAN",
    //     }
    //   ];

    useEffect(() => {
        const fetchPlayers = async () => {
            const newPlayers = await getPlayers();
            setPlayers(newPlayers);
            console.log(players);
            
        };

        fetchPlayers();
    }, [])
    return (
        <div className="mt-3 grid justify-center">
        </div>
    )
}

export default Players;