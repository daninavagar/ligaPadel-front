import axios from 'axios'

export const getTeams = async () => {

    let result:any = []
    if (import.meta.env.VITE_ENVIROMENT === 'dev') {
        result = [
            {
                "EQUIPOS": "Mamen"
            },
            {
                "EQUIPOS": "Percutidores"
            },
            {
                "EQUIPOS": "Tetinhos"
            },
            {
                "EQUIPOS": "Maularen"
            },
            {
                "EQUIPOS": "Waffen-SS"
            },
            {
                "EQUIPOS": "Entrenadorrrr A"
            },
            {
                "EQUIPOS": "Ramoncin y Perroviejo"
            },
            {
                "EQUIPOS": "Tom Y Jerry"
            }
        ]
    } else {

        const url = `${import.meta.env.VITE_APP_URL_BACK}teams`
    
        const options = {
            method: 'GET',
            url: url
        }
    
        
        
        await axios.request(options)
            .then((response) => {
                console.log(response.data)
                result = response.data
            })
            .catch((error) => {
                result = error 
                console.error(error)
            })
    }

    
    return result
    

}

export const getPlayers = async () => {
    
    let result:any = []
    if (import.meta.env.VITE_ENVIROMENT === 'dev') {
        result = [
            {
                "JUGADORES": "Jesús Alberto",
                "EQUIPOS": "Maularen",
                "CAPITAN": "1"
            },
            {
                "JUGADORES": "Daniel Navarro",
                "EQUIPOS": "Maularen",
                "CAPITAN": "0"
            },
            {
                "JUGADORES": "Alberto Pérez Durán",
                "EQUIPOS": "Tetinhos",
                "CAPITAN": "1"
            },
            {
                "JUGADORES": "Alberto Pérez",
                "EQUIPOS": "Tetinhos",
                "CAPITAN": "0"
            },
            {
                "JUGADORES": "Óscar Vela",
                "EQUIPOS": "Mamen",
                "CAPITAN": "1"
            },
            {
                "JUGADORES": "Daniel Egido",
                "EQUIPOS": "Mamen",
                "CAPITAN": "0"
            },
            {
                "JUGADORES": "Rueda",
                "EQUIPOS": "Percutidores",
                "CAPITAN": "1"
            },
            {
                "JUGADORES": "Sergi",
                "EQUIPOS": "Percutidores",
                "CAPITAN": "0"
            },
            {
                "JUGADORES": "Nacho",
                "EQUIPOS": "Waffen SS",
                "CAPITAN": "1"
            },
            {
                "JUGADORES": "M. Navarro",
                "EQUIPOS": "Waffen SS",
                "CAPITAN": "0"
            },
            {
                "JUGADORES": "Antón",
                "EQUIPOS": "Tom y Jerry",
                "CAPITAN": "1"
            },
            {
                "JUGADORES": "Jorge",
                "EQUIPOS": "Tom y Jerry",
                "CAPITAN": "0"
            },
            {
                "JUGADORES": "Jaime",
                "EQUIPOS": "Ramoncin y Perroviejo",
                "CAPITAN": "1"
            },
            {
                "JUGADORES": "Tapia",
                "EQUIPOS": "",
                "CAPITAN": "0"
            },
            {
                "JUGADORES": "Icíar",
                "EQUIPOS": "Entrenadorrrr A 🫡\n",
                "CAPITAN": "1"
            },
            {
                "JUGADORES": "Jose Mari",
                "EQUIPOS": "Entrenadorrrr A 🫡\n",
                "CAPITAN": "0"
            }
        ]
    } else {

        const url = `${import.meta.env.VITE_APP_URL_BACK}players`
    
        const options = {
            method: 'GET',
            url: url
        }
    
        
        
        await axios.request(options)
            .then((response) => {
                result = response.data
            })
            .catch((error) => {
                result = error 
                console.error(error)
            })
    }
    
    return result
}

const resultsRound = [
    {
        "Partido 1": [
            {
                "EQUIPOS": "Entrenadorrrr A",
                "JUEGOS GANADOS": null,
                "PUNTOS": null
            },
            {
                "EQUIPOS": "Tom Y Jerry",
                "JUEGOS GANADOS": null,
                "PUNTOS": null
            }
        ]
    },
    {
        "Partido 2": [
            {
                "EQUIPOS": "Waffen-SS",
                "JUEGOS GANADOS": "0",
                "PUNTOS": "0"
            },
            {
                "EQUIPOS": "Mamen",
                "JUEGOS GANADOS": "3",
                "PUNTOS": "1"
            }
        ]
    },
    {
        "Partido 3": [
            {
                "EQUIPOS": "Maularen",
                "JUEGOS GANADOS": "3",
                "PUNTOS": "1"
            },
            {
                "EQUIPOS": "Ramoncin y Perroviejo",
                "JUEGOS GANADOS": "0",
                "PUNTOS": "0"
            }
        ]
    },
    {
        "Partido 4": [
            {
                "EQUIPOS": "Tetinhos",
                "JUEGOS GANADOS": "1",
                "PUNTOS": "0"
            },
            {
                "EQUIPOS": "Percutidores",
                "JUEGOS GANADOS": "2",
                "PUNTOS": "1"
            }
        ]
    }
]

export const getRound = async (numberRound:number) => {

    let result:any = []
    if (import.meta.env.VITE_ENVIROMENT === 'dev') {

        result = resultsRound
    } else {

        const url = `${import.meta.env.VITE_APP_URL_BACK}round`
        const params = { round: getNameRound(numberRound) || '' }
    
        try {
            const response = await axios.get(url, { params })
            result = response.data
        } catch (error) {
            result = error
            console.error('There was a problem with the axios request: ', error)
        }
    }


    return result
}

const getNameRound = (numberRound:number) => { 
    switch (numberRound) {
        case 1:
            return 'Jornada 1'
        case 2:
            return 'Jornada 2'
        case 3:
            return 'Jornada 3'
        case 4:
            return 'Jornada 4'
        case 5:
            return 'Jornada 5'
        case 6:
            return 'Jornada 6'
        case 7:
            return 'Jornada 7'
    }
}