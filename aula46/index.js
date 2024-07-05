function mostraHora (){
    let data = new Date;

    return data.toLocaleTimeString();
}

function funcaoDoInteval (){
    console.log(mostraHora)
}