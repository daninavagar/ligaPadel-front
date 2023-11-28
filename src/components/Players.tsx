import React from "react"
import { useState, useEffect } from "react"
// import { Spinner } from "@nextui-org/react"
import { getPlayers } from "../services/getTeams"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner} from "@nextui-org/react";


function Players() {

    const [players, setPlayers] = useState<any>([])
    const [loading, setLoading] = useState(true)


    const columns = [
        {
          key: "EQUIPOS",
          label: "EQUIPOS",
        },
        {
          key: "JUGADORES",
          label: "JUGADORES",
        },
        {
          key: "CAPITAN",
          label: "CAPITAN",
        }
      ];

    useEffect(() => {
        const fetchPlayers = async () => {
            const newPlayers = await getPlayers();
            setPlayers(newPlayers);
            setLoading(false)
        };

        fetchPlayers();
    }, [])

    if (loading) {
        return <Spinner />
      }
    return (
        <div className="mt-3 grid justify-center">
<Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
            {(column) => <TableColumn className="text-center" key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={players}>
            {(item: { EQUIPOS: string, 'JUGADORES': string, CAPITAN: Boolean }) => (
                <TableRow key={item.JUGADORES}>
                    {(columnKey) => <TableCell className="text-black">{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
            )}
        </TableBody>
    </Table>

        </div>
    )
}

export default Players;