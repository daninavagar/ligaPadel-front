import React from 'react'
import { getRound } from '../../services/getTeams'
import { Card, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner } from "@nextui-org/react"
import { useState, useEffect } from 'react'

const TableRound = ({ roundParameter }: { roundParameter: number }) => {
    const [round, setRound] = useState<any>([])
    const [loading, setLoading] = useState(true)

    const columns = [
        { key: "EQUIPOS", label: "Equipos" },
        { key: "JUEGOS GANADOS", label: "Juegos Ganados" },
        { key: "PUNTOS", label: "Puntos" },
    ]

    useEffect(() => {
        const fetchRound = async () => {
            const newRound = await getRound(roundParameter)
            setRound(newRound)
            setLoading(false)
                    }

        fetchRound()
    },[])

    if (loading) {
        return <Spinner />
    }

    return (
        <div>
        {
            round.map((roundObj:any, index:number) => {
                const partidoName = Object.keys(roundObj)[0]
                const equipos = roundObj[partidoName]
                
                return (
                    <Card key={index}>
                        <h2 className='text-2xl'>{partidoName}</h2>
                        <Table aria-label='round table'>
                            <TableHeader columns={columns}>
                                {(column) => <TableColumn className="text-center" key={column.key}>{column.label}</TableColumn>}
                            </TableHeader>
                            <TableBody items={equipos}>
                            {(item: { EQUIPOS: string, 'JUEGOS GANADOS': number, PUNTOS: number }) => (
                                <TableRow key={item.EQUIPOS}>
                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                            </TableBody>
                        </Table>
                    </Card>
                )
            })
        }
        </div>
    )
}

export default TableRound