import React from 'react'
import { useState, useEffect } from 'react'
import { getTeams } from '../services/getTeams'

function Teams() {

    const [teams, setTeams] = useState<{ EQUIPOS: string }[]>([]);

    useEffect(() => {
        const fetchTeams = async () => {
            const newTeams = await getTeams();
            setTeams(newTeams);
            console.log(teams);
            
        };

        fetchTeams();
    }, []);
    return (
        <div className='mt-3 grid justify-center'>
        </div>
    );

}

export default Teams