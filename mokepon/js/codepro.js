//*Variables globales*
let ataqueJugador 
let ataqueEnemigo


//*Funciones de de juego*
//Funcion para inicio del juego, definicion de botones direccionamiento a HTML
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra =document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

//Funcion par ala seleccion de mascota por parte del jugador y generacion aleatoria de la mascota del enemigo
function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')

    let spanMascotaJugador = document.getElementById('mascota-jugador')
    

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'HIPODOGE'
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'CAPIPEPO'
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'RATIGUEYA'
    }else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = 'LANGOSTELVIS'
    }else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = 'TUCAPALMA'
    }else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = 'PYDOS'
    }else{
        alert("NO SELECCIONASTE MASCOTA !!!")
    }
    
    seleccionarMascotaEnemigo()
}

//Funcion para la generacion aleatoria de la mascota del enemigo
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo= document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'HIPODOGE'
    }else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'CAPIPEPO'
    }else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'RATIGUEYA'
    }else if (mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'LANGOSTELVIS'
    }else if (mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'TUCAPALMA'
    }else if (mascotaAleatorio == 6){
        spanMascotaEnemigo.innerHTML = 'PYDOS'
    }


}

//*Funciones par la seleccion del ataque del jugador*
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo () 
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo () 
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo () 
}

//*Funcion para la generacion aleatoria de ataque del enemigo */
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo ='FUEGO'
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo ='AGUA'
    }else if (ataqueAleatorio == 3){
        ataqueEnemigo ='TIERRA'
    }

    combate()
}

function combate(){
    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
    }else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE")
    }else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE")
    }else {
        crearMensaje("PERDISTE")
    }


}

//*Funcion para la creacion de los mensajes de la partida */
function crearMensaje(resultadoCombate){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultadoCombate
    
    sectionMensajes.appendChild(parrafo)
}

//*Funcion para la generacion aleatoria de un numero dentro de un rango dado */
function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}


//Codigo principal de ejecución
window.addEventListener('load',iniciarJuego)

