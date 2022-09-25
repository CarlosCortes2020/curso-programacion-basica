//*Variables globales*
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


//*Funciones de de juego*
//Funcion para inicio del juego, definicion de botones direccionamiento a HTML
function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra =document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//Funcion par ala seleccion de mascota por parte del jugador y generacion aleatoria de la mascota del enemigo
function seleccionarMascotaJugador(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

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
        reiniciarJuego()
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
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}

//*Funcion para revisar el conteo de vidas y enviar mensaje de ganador*/
function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("FELICIDADES GANASTE !!!")
    }else if (vidasJugador == 0){
        crearMensajeFinal("LO SIENTO, PERDISTE !!!")
    }
}

//*Funcion para la creacion de los mensajes de la partida */
//*Cambio de variable 'mensajes' por la variable 'resultado' proveniente de codigo html*/
//*Adicion de variables ataque-jugador y ataque-enemigo*/
function crearMensaje(resultadoCombate){
    //let sectionMensajes = document.getElementById('mensajes')
    let sectionMensajes = document.getElementById('resultado')
    let ataqueJugadorCSS = document.getElementById('ataque-jugador')
    let ataqueEnemigoCSS = document.getElementById('ataque-enemigo')

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultadoCombate
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    //Codigo comentado para dar paso a la creacion de los parrafos de las variables de ataque
    //let parrafo = document.createElement('p')
    //parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultadoCombate
    //sectionMensajes.appendChild(parrafo)

    ataqueJugadorCSS.appendChild(nuevoAtaqueJugador)
    ataqueEnemigoCSS.appendChild(nuevoAtaqueEnemigo)

}

//*Funcion para la creacion y envio del mensaje final del combate.*/
function crearMensajeFinal(resultadoCombateFinal){
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

    let sectionMensajes = document.getElementById('resultado')
    //let parrafo = document.createElement('p')
    sectionMensajes.innerHTML = resultadoCombateFinal
    
    //sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra =document.getElementById('boton-tierra')
    botonTierra.disabled = true

}

//*Funcion para realizar el reinicio del juego */
function reiniciarJuego(){
    location.reload()
}

//*Funcion para la generacion aleatoria de un numero dentro de un rango dado */
function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}


//Codigo principal de ejecución
window.addEventListener('load',iniciarJuego)

