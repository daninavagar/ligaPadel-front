import { Card, CardHeader, CardBody, Divider, Spinner } from '@nextui-org/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { getTeams } from '../services/getTeams'

function Teams() {

    const [teams, setTeams] = useState<{ EQUIPOS: string }[]>([]);

    useEffect(() => {
        const fetchTeams = async () => {
            const newTeams = await getTeams();
            setTeams(newTeams);
            console.log(newTeams);
            
        };

        fetchTeams();
    }, []);
    return (
        <div className='mt-3 grid justify-center'>
        </div>
    );

}

export default Teams