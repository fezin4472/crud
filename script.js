/*
C = create
R = read
U = update
D = delete
*/

let i = 0;

let veiculos = [];

function savedata(){
    localStorage.setItem('carros', JSON.stringify(carros));
}

function loaddata(){
    carros = JSON.parse(localStorage.getItem('carros'));
}

function register(){
    loaddata()

    const newcar = {
        id: Date.now(),
        marcaemodelo: document.getElementById('input-marca-modelo').value,
        potencia: Number(document.getElementById('input-potencia').value),
        cor: document.getElementById('input-cor').value,
        ano: Number(document.getElementById('input-ano').value),
        fipe: document.getElementById('input-fipe').value,
        media: document.getElementById('input-media').value
    }
    carros.push(newcar);

    console.log(carros);
    

}

function clearform(){
    document.getElementById('input-marca-modelo').value = ''
    document.getElementById('input-potencia').value = ''
    document.getElementById('input-cor').value = ''
    document.getElementById('input-ano').value = ''
    document.getElementById('input-fipe').value = ''
    document.getElementById('input-media').value = ''

    document.getElementById('input-marca-modelo').focus();
}

function showform(){
    document.getElementById('panel').innerHTML = ''

    for(i = 0; i < carros.length; i++){
        document.getElementById('panel').innerHTML +=
        `<div class="card-carros">
            <h2>${carros[i].marcaemodelo}</h2>
            <p>potência em cavalos: ${carros[i].potencia}</p>
            <p>cor: ${carros[i].cor}</p>
            <p>ano: ${carros[i].ano}</p>
            <p>tabela fipe: ${carros[i].fipe}</p>
            <p>preço médio na olx: ${carros[i].media}</p>
        </div>
        `
    }
}

function search(){
    let procurado = document.getElementById('input-marca-modelo').value

    for(i = 0; i < carros.length; i++){
        if(procurado == carros[i].marcaemodelo){}
    }
}