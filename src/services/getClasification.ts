import axios from 'axios'

const getClasification = async () => {

    const url = `${import.meta.env.VITE_APP_URL_BACK}clasification`

    const options = {
        method: 'GET',
        url: url
    }
    // let result
    // await axios.request(options)
    //     .then((response) => {
    //         debugger;
    //         console.log(response.data);
    //         result = response.data;
    //     })
    //     .catch((error) => {
    //         result = error 
    //         console.error(error)
    //     })
    
    const resultFormated = resultsFormated(result2)
    const resultFormatedToTable = resultsFormatedToTable(resultFormated)

    return resultFormatedToTable;

}

const resultsFormated =  (format:any) => {
    return format.map((item:any) => {
        const newItem = { ...item };
        delete newItem['3' as keyof typeof newItem];
        return newItem;
    });

}

const resultsFormatedToTable = ((format:any) => {
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
        "PUNTOS": "2",
        "GANADOS": "2",
        "JUEGOS GANADOS": "4"
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
        "JUEGOS GANADOS": "3"
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
        "PUNTOS": "0",
        "GANADOS": "0",
        "JUEGOS GANADOS": "1"
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
        "JUEGOS GANADOS": "0"
    }
]



export default getClasification;
