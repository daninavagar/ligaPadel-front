import { Card, CardHeader, CardBody, Divider, Spinner } from '@nextui-org/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { getTeamsPlayers } from '../services/getTeams'

function Teams() {

    const [teams, setTeams] = useState<any>()

    useEffect(() => {
        getTeamsPlayers()
            .then((teams) => {
                setTeams(teams)
                
            })
    }, [])
    return (
        <div className='mt-3 grid justify-center'>

            {
                teams ? (
                    Object.keys(teams).map((teamName) => {
                        const team = teams[teamName];
                        return (
                            <Card key={teamName} className='mt-5 bg-gray-400' radius='md' fullWidth={true} shadow='sm'>
                                <CardHeader className=' justify-center text-3xl font-semibold'>{teamName}</CardHeader>
                                <Divider/>
                                <CardBody className='text-center'>
                                {
                                    team.jugadores.map((player: any) => <span key={player.nombre}>{player.nombre}</span>)
                                }
                                </CardBody>
                            </Card>
                        )
                    })
                ) : (
                    <Spinner/>
                )
            } 
        </div>
    );

}

export default Teams