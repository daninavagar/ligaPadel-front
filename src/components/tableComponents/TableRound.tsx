/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRound } from '../../services/getTeams'
import { Card, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner, useDisclosure } from "@nextui-org/react"
import { useState, useEffect, useCallback } from 'react'
import ModalComponent from '../Modal'
import { UserAppMetadata } from '@supabase/supabase-js'
import { UserAuth } from '../../context/AuthContext'


const TableRound = ({ roundParameter }: { roundParameter: number }) => {
    const [round, setRound] = useState<any>([])
    const [loading, setLoading] = useState(true)
    const [selectedMatch, setSelectedMatch] = useState(null)
    const {isOpen, onOpen, onOpenChange} = useDisclosure()
    const { user }:UserAppMetadata = UserAuth();

    const fetchRound = useCallback(async () => {
        const newRound = await getRound(roundParameter)
        setRound(newRound)
        setLoading(false)
    }, [roundParameter])

    const columns = [
        { key: "EQUIPOS", label: "Equipos" },
        { key: "JUEGOS GANADOS", label: "Juegos Ganados" },
        { key: "PUNTOS", label: "Puntos" },
    ]
    useEffect(() => {
        fetchRound()
    }, [fetchRound])

    const handleMatchClick = (match: any) => {
        setSelectedMatch(match)
        onOpen();
    }

    const handleCloseModal = () => {
        onOpenChange();
        setLoading(true)
        fetchRound();
    }

    if (loading) return <Spinner />

    // TODO add valids emails in bbdd? or enviroment variables
    const emailList = ['daninavagar@gmail.com', 'tetoperezduran@gmail.com'];



    return (
        <div>
        {
            round.map((roundObj:any, index:number) => {
                const partidoName = Object.keys(roundObj)[0]
                const equipos = roundObj[partidoName]
                
                return (
                    <div>
                        <Card key={index}>
                            {
                                emailList.includes(user.email) ?
                                <h2 onClick={() => handleMatchClick(roundObj)} className='text-2xl cursor-pointer'>{partidoName}</h2>
                                : <h2 className='text-2xl'>{partidoName}</h2>

                            }
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
                    </div>
                )
            })
        }
        {
            isOpen ?
                <ModalComponent
                    isOpen={isOpen}
                    onOpenChange={handleCloseModal}
                    match={selectedMatch}
                />
                : null
        }
        
        </div>
    )
}

export default TableRound