import React from 'react'
import { useState, useEffect } from 'react'
import { getTeams } from '../services/getTeams'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner } from "@nextui-org/react"

function Teams() {

    const [teams, setTeams] = useState<{ EQUIPOS: string }[]>([])
    const [loading, setLoading] = useState(true)


    const columns = [
        { key: "EQUIPOS", label: "Equipos" },
    ]

    useEffect(() => {
        const fetchTeams = async () => {
            const newTeams = await getTeams()
            setTeams(newTeams)
            setLoading(false)
        }

        fetchTeams()
    }, [])

    if (loading) {
        return <Spinner />
      }
    return (
        <div className='mt-3 grid justify-center'>
            <Table aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn className="text-center" key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={teams}>
                    {(item: { EQUIPOS: string }) => (
                        <TableRow key={item.EQUIPOS}>
                            {(columnKey) => <TableCell className="text-black">{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default Teams