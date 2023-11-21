const getClasification = async () => {

    const url = 'https://sheet.best/api/sheets/b2fe4122-5548-41c5-8ce4-d25d08220ae3?raw=Clasificación'
    const headers = {
        'X-Api-Key': 's_FqokQ2xLeFyauGdFJ#TmwBhN_Li#FRa%IcA%rDosp@4nmWQ_23v-3xzK1%w0Bw'
    }

    const result = await fetch(url,{headers: headers})
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((error) => {
            console.error(error);
        });

    const resultFormated = resultsFormated(result)
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


const results = [
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
