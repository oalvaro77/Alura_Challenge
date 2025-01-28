let listaAmigos = [];
let indiceAleatorio = 0;



function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo != ""){
        listaAmigos.push(amigo);
    }else{
        alert("No se deben ingresar valores vacios");
    }
    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i<listaAmigos.length; i++){
            let li = document.createElement('li');
            li.textContent = listaAmigos[i];
            li.setAttribute('data-index', i);
            lista.appendChild(li);
        
        }
    limpiarCaja();
    return;
}



function sortearAmigo(){
    
    if(listaAmigos.length == 0){
        alert("La lista esta vacia");
    }
    indiceAleatorio = Math.floor(Math.random()* listaAmigos.length);

    let amigoElegido = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoElegido;

    listaAmigos.splice(indiceAleatorio, 1);

    //Eliminar Amigo de lista DOM
    let lista = document.getElementById('listaAmigos');
    let liParaEliminar = lista.querySelector(`[data-index="${indiceAleatorio}"]`);
    if(liParaEliminar){
        liParaEliminar.remove();
    }
    
    let elementosLi = lista.querySelectorAll('li');
    elementosLi.forEach((li, nuevoIndice) => {
        li.setAttribute('data-index', nuevoIndice);
    });


}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = "";
}


