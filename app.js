
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//creo una función generica para asignar texto al html.
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){
    //con parseInt hacemos que el valor sea numérico
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
     if(numeroDeUsuario === numeroSecreto){// uso el operador ternario para evaluar si es vez o veces.
        asignarTextoElemento('p', `Acertaste el numero  en ${intentos}  ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
     }
    return;
}
//para limpiar luego de cada intento.
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = "";
}

//para generar un numero random entre 1 y 10
function generarNumeroSecreto() {
  
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //Si ya sorteamos todos los números.
   if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
   }else{
        //si el número generado esta en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto()

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
//reiniciar juego
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el número de intentos.
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
}
 condicionesIniciales();