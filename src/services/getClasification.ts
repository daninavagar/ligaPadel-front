import axios from 'axios'

export const getClasification = async () => {

    let result:any = []
    if (import.meta.env.VITE_ENVIROMENT === 'dev') {
       result = result2
    } else {

        const url = `${import.meta.env.VITE_APP_URL_BACK}clasification`

        try {
            const response = await axios.get(url)
            result = response.data
            
        } catch (error) {
            result = error
            console.error('There was a problem with the axios request: ', error)
        }
    }


    
    // debugger
    const resultFormated = resultsFormated(result)
    const resultFormatedToTable = resultsFormatedToTable(resultFormated)
    return resultFormatedToTable;



}

export const resultsFormated = (format:[]) => {
    return format.map((item:any) => {
        const newItem = { ...item };
        delete newItem['3' as keyof typeof newItem];
        return newItem;
    });

}

export const resultsFormatedToTable = ((format:any) => {
    return format.map((item:any, index:any) => ({
        key: (index + 1).toString(),
        equipos: item.EQUIPOS,
        puntos: item.PUNTOS,
        ganados: item.GANADOS,
        "juegos ganados": item["JUEGOS GANADOS"]
      }));
})

const result2 = [
    {
        "3": "",
        "EQUIPOS": "Mamen",
        "PUNTOS": "2",
        "GANADOS": "2",
        "JUEGOS GANADOS": "6"
    },
    {
        "3": "",
        "EQUIPOS": "Percutidores",
        "PUNTOS": "3",
        "GANADOS": "3",
        "JUEGOS GANADOS": "6"
    },
    {
        "3": "",
        "EQUIPOS": "Tetinhos",
        "PUNTOS": "1",
        "GANADOS": "1",
        "JUEGOS GANADOS": "4"
    },
    {
        "3": "",
        "EQUIPOS": "Maularen",
        "PUNTOS": "1",
        "GANADOS": "1",
        "JUEGOS GANADOS": "4"
    },
    {
        "3": "",
        "EQUIPOS": "Waffen-SS",
        "PUNTOS": "1",
        "GANADOS": "1",
        "JUEGOS GANADOS": "2"
    },
    {
        "3": "",
        "EQUIPOS": "Entrenadorrrr A",
        "PUNTOS": "1",
        "GANADOS": "1",
        "JUEGOS GANADOS": "3"
    },
    {
        "3": "",
        "EQUIPOS": "Ramoncin y Perroviejo",
        "PUNTOS": "0",
        "GANADOS": "0",
        "JUEGOS GANADOS": "1"
    },
    {
        "3": "",
        "EQUIPOS": "Tom Y Jerry",
        "PUNTOS": "0",
        "GANADOS": "0",
        "JUEGOS GANADOS": "1"
    }
]
