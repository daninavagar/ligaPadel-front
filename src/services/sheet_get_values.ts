export async function getValues() {

    
    // const response = await fetch('https://sheetdb.io/api/v1/mgupcu6878cfj?sheet=Clasificación')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         return data;
    //     });

    // const transformedRowsResponse = response.map((item:any, index:any) => ({
    //     key: String(index + 1),
    //     equipos: item.EQUIPOS,
    //     puntos: item.PUNTOS,
    //     ganados: item.GANADOS,
    //     'juegos ganados': item['JUEGOS GANADOS'],
    //     }));

    const a = [
        {
            "key": "1",
            "equipos": "Mamen",
            "puntos": "2",
            "ganados": "2",
            "juegos ganados": "6"
        },
        {
            "key": "2",
            "equipos": "Percutidores",
            "puntos": "2",
            "ganados": "2",
            "juegos ganados": "4"
        },
        {
            "key": "3",
            "equipos": "Tetinhos",
            "puntos": "1",
            "ganados": "1",
            "juegos ganados": "4"
        },
        {
            "key": "4",
            "equipos": "Maularen",
            "puntos": "1",
            "ganados": "1",
            "juegos ganados": "3"
        },
        {
            "key": "5",
            "equipos": "Waffen-SS",
            "puntos": "1",
            "ganados": "1",
            "juegos ganados": "2"
        },
        {
            "key": "6",
            "equipos": "Entrenadorrrr A",
            "puntos": "0",
            "ganados": "0",
            "juegos ganados": "1"
        },
        {
            "key": "7",
            "equipos": "Ramoncin y Perroviejo",
            "puntos": "0",
            "ganados": "0",
            "juegos ganados": "1"
        },
        {
            "key": "8",
            "equipos": "Tom Y Jerry",
            "puntos": "0",
            "ganados": "0",
            "juegos ganados": "0"
        }
    ]

        const columnsResponse = [
            {
                key: "equipos",
                label: "EQUIPOS",
            },
            {
                key: "puntos",
                label: "PUNTOS",
            },
            {
                key: "ganados",
                label: "GANADOS",
            },
            {
                key: "juegos ganados",
                label: "JUEGOS GANADOS",
            }
          ];
    const transformedRowsResponse = a
        
    
    return { transformedRowsResponse, columnsResponse};
}