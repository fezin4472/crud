/*
C = create
R = read
U = update
D = delete
*/

let i = 0;

let veiculos = [];

function savedata(){
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
}

function loaddata(){
    veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
}

function register(){
    loaddata()

    const newvehicle = {
        id: Date.now(),
        marca: document.getElementById('input-marca').value,
        modelo: document.getElementById('input-modelo').value,
        tipo: document.getElementById('input-tipo').value,
        potencia: Number(document.getElementById('input-potencia').value),
        cor: document.getElementById('input-cor').value,
        ano: Number(document.getElementById('input-ano').value),
        fipe: document.getElementById('input-fipe').value
    }

    veiculos.push(newvehicle)

    console.log(veiculos);

    clearform();
    showform();

    savedata();
}

function clearform(){
    document.getElementById('input-marca').value = ''
    document.getElementById('input-modelo').value = ''
    document.getElementById('input-tipo').value = ''
    document.getElementById('input-potencia').value = ''
    document.getElementById('input-cor').value = ''
    document.getElementById('input-ano').value = ''
    document.getElementById('input-fipe').value = ''

    document.getElementById('input-marca').focus();
}

function showform(){
    document.getElementById('panel').innerHTML = ''

    for(i = 0; i < veiculos.length; i++){
        document.getElementById('panel').innerHTML +=
        `<div class="card-carros">
            <h2>${veiculos[i].marca} ${veiculos[i].modelo}</h2>
            <p>tipo: ${veiculos[i].tipo}</p>
            <p>potênica em cavalos: ${veiculos[i].potencia}</p>
            <p>cor: ${veiculos[i].cor}</p>
            <p>ano: ${veiculos[i].ano}</p>
            <p>tabela fipe: ${veiculos[i].fipe}</p>
            <p>id: ${veiculos[i].id}</p>
        </div>
        `
    }
}

function search(){
    let procurado = document.getElementById('input-modelo').value

    for(i = 0; i < veiculos.length; i++){
        if(procurado == veiculos[i].modelo){
            console.log(carros[i]);
            document.getElementById('input-tipo').value = veiculos[i].tipo
            document.getElementById('input-potencia').value = veiculos[i].potencia
            document.getElementById('input-cor').value = veiculos[i].cor
            document.getElementById('input-ano').value = veiculos[i].ano
            document.getElementById('input-fipe').value = veiculos[i].fipe
            console.log(i);
        }
    }
}

function savecar(){
    let id = veiculos.id

    for(i = 0; i < veiculos.length; i++){
        console.log(veiculos[i]);
        veiculos[i].tipo = document.getElementById('input-tipo').value
        veiculos[i].potencia = document.getElementById('input-potencia').value
        veiculos[i].cor = document.getElementById('input-cor').value
        veiculos[i].ano = document.getElementById('input-ano').value
        veiculos[i].fipe = document.getElementById('input-fipe').value
    }
    showform()
    clearform()
}

function deletecar(){
    let id = veiculos.id

    for(i = 0; i < veiculos.length; i++){
        console.log(veiculos[i]);
        veiculos.splice(i, 1)
        console.log(i);
    }
    showform()
    clearform()
}