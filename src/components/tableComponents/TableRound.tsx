import React from 'react'
import { useState, useEffect } from 'react'
import { getRound } from '../../services/getTeams';



const TableRound = ({ roundParameter }: { roundParameter: number }) => {

    const [round, setRound] = useState<any>([]);

    useEffect(() => {

        const fetchRound = async () => {
            const newRound = await getRound(roundParameter);
            setRound(newRound);
            console.log(round);
        }

        fetchRound()
    },[])
    return (
        <div>
        {/* <h2>{round}</h2> */}
        </div>
    );
}

export default TableRound;