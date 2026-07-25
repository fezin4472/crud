/*
C = create
R = read
U = update
D = delete
*/

let i = 0;

let carros = [];

function savedata(){
    localStorage.setItem('carros', JSON.stringify(carros));

    /* let text = JSON.stringify(carros)
    localStorage.setItem('carros', text) */
}

function loaddata(){
    carros = JSON.parse(localStorage.getItem('carros')) || [];

    /* let readedtext = localStorage.getItem('carros')
    carros = JSON.parse(readedtext) || []; */
}

function register(){
    loaddata()

    const newvehicle = {
        id: Date.now(),
        marca: document.getElementById('input-marca').value,
        modelo: document.getElementById('input-modelo').value,
        ano: Number(document.getElementById('input-ano').value),
        tipo: document.getElementById('input-tipo').value,
        economia: Number(document.getElementById('input-economia').value)
    }

    carros.push(newvehicle)

    console.log(carros);

    clearform();
    showform();

    savedata();
}

function clearform(){
    document.getElementById('input-marca').value = ''
    document.getElementById('input-modelo').value = ''
    document.getElementById('input-ano').value = ''
    document.getElementById('input-tipo').value = ''
    document.getElementById('input-economia').value = ''

    document.getElementById('input-marca').focus();
}

function showform(){
    document.getElementById('panel').innerHTML = ''

    for(i = 0; i < carros.length; i++){
        document.getElementById('panel').innerHTML +=
        `<div class="card-carros">
            <h2>${carros[i].marca} <br> ${carros[i].modelo}</h2>
            <p>ano: ${carros[i].ano}</p>
            <p>tipo: ${carros[i].tipo}</p>
            <p>ecônomia: ${carros[i].economia} km/l</p>
            <p>id: ${carros[i].id}</p>
        </div>
        `
    }
}

function search(){
    let procurado = document.getElementById('input-modelo').value

    for(i = 0; i < carros.length; i++){
        if(procurado == carros[i].modelo){
            console.log(carros[i]);
            document.getElementById('input-ano').value = carros[i].ano
            document.getElementById('input-tipo').value = carros[i].tipo
            document.getElementById('input-economia').value = carros[i].economia
            console.log(i);
        }
    }
}

function savecar(){
    let id = carros.id

    for(i = 0; i < carros.length; i++){
        console.log(carros[i]);
        carros[i].ano = document.getElementById('input-ano').value
        carros[i].tipo = document.getElementById('input-tipo').value
        carros[i].economia = Number(document.getElementById('input-economia').value)
    }
    showform()
    clearform()
}

function deletecar(){
    let id = carros.id

    for(i = 0; i < carros.length; i++){
        console.log(carros[i]);
        carros.splice(i, 1)
        console.log(i);
    }
    showform()
    clearform()
}