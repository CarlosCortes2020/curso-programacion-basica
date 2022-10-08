//*Variables globales*
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')

const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo= document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataqueJugadorCSS = document.getElementById('ataque-jugador')
const ataqueEnemigoCSS = document.getElementById('ataque-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones =  []
//let ataqueJugador 
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos  
let mascotaJugador
let opcionAtaques
let opcionAtaquesEnemigo
let botonFuego 
let botonAgua 
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

//*Seccion para creacion de clases
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

//* Creacion de objetos basados en las clases
let hipodoge = new Mokepon('Hipodoge','./assets/hipodoge.png', 5)
let capipepo = new Mokepon('Capipepo','./assets/capipepo.png', 5)
let ratigueya = new Mokepon('Ratigueya','./assets/ratigueya.png', 5)
let langostelvis = new Mokepon('Langostelvis','./assets/langostelvis.png', 5)
let tucapalma = new Mokepon('Tucapalma','./assets/tucapalma.png', 5)
let pydos = new Mokepon('Pydos','./assets/pydos.png', 5)

//* Creacion de ataques para los pokemon

hipodoge.ataques.push(
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
)

ratigueya.ataques.push(
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
)

langostelvis.ataques.push(
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
)

tucapalma.ataques.push(
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
)

pydos.ataques.push(
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
)


//*Seccion para definicion y llenado del arreglo de los mokepon
mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)


//*Funciones de de juego*
//Funcion para inicio del juego, definicion de botones direccionamiento a HTML
function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'

    //* Estructura para inyectar a HTML los datos de js
    mokepones.forEach((mokepon) => {
        console.log(mokepon.nombre)
        opcionDeMokepones = `
        <input type="radio" name="mascota" id = ${mokepon.nombre} />           
        <label class="tarjeta-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones 

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
        inputLangostelvis = document.getElementById('Langostelvis')
        inputTucapalma = document.getElementById('Tucapalma')
        inputPydos = document.getElementById('Pydos')
    })
    //sectionReiniciar.style.display = 'none'

    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//Funcion par ala seleccion de mascota por parte del jugador y generacion aleatoria de la mascota del enemigo
function seleccionarMascotaJugador(){
    
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionSeleccionarMascota.style.display = 'none'

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    }else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    }else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    }else{
        reiniciarJuego()
    }

    extraerAtaques(mascotaJugador)
   
    seleccionarMascotaEnemigo()
}

//*Funcion para extraer los ataques de cada mokepon
function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
                
    }
    
    mostrarAtaques(ataques)
    
}

//*Funcion para inyectar en HTML los botones
function mostrarAtaques(ataques) {
    ataques.forEach(ataque => {
        opcionAtaques = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += opcionAtaques
    })    
    //*Ligar boton creado con el objeto    
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra =document.getElementById('boton-tierra')
    
    //*Variable tipo arreglo para manejar la clase BAtaque
    botones = document.querySelectorAll('.BAtaque')
    
    //*Generar el linnk al evento click
    //botonFuego.addEventListener('click', ataqueFuego)
    //botonAgua.addEventListener('click', ataqueAgua)
    //botonTierra.addEventListener('click', ataqueTierra)
    
}

//*Funcion para agregar el evento de click a cada boton, la e significa mostrar el evento realizado, base para verificar la secuencia de ataques que nosotros como 
//*jugador seleccionamos
function secuenciaAtaque() {
    botones.forEach(boton => {
        boton.addEventListener('click',(e) => {
            if (e.target.textContent == '💥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent == '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
            ataqueAleatorioEnemigo()
        })
    })
}
//Funcion para la generacion aleatoria de la mascota del enemigo
function seleccionarMascotaEnemigo(){

    let mascotaAleatorio = aleatorio(0,mokepones.length-1)
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    opcionAtaquesEnemigo = mokepones[mascotaAleatorio].ataques

    secuenciaAtaque()
   
}

//*Funciones par la seleccion del ataque del jugador*
//function ataqueFuego(){
//    ataqueJugador = 'FUEGO'
//    ataqueAleatorioEnemigo () 
//}

//function ataqueAgua(){
//    ataqueJugador = 'AGUA'
//    ataqueAleatorioEnemigo () 
//}

//function ataqueTierra(){
//   ataqueJugador = 'TIERRA'
//    ataqueAleatorioEnemigo () 
//}

//*Funcion para la generacion aleatoria de ataque del enemigo */
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,opcionAtaquesEnemigo.length - 1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
        console.log(ataqueEnemigo)
    }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
        console.log(ataqueEnemigo)
    }else {
        ataqueEnemigo.push('TIERRA')
        console.log(ataqueEnemigo)
    }
    
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length == 5) {
        combate()        
    }
}

function indexAmbosOponentes(jugador,enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate(){
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] == ataqueEnemigo[index]){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE")
        }else if (ataqueJugador[index] == 'FUEGO' && ataqueEnemigo[index] == 'TIERRA'){
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            
        }else if (ataqueJugador[index] == 'AGUA' && ataqueEnemigo[index] == 'FUEGO'){
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index] == 'TIERRA' && ataqueEnemigo[index] == 'AGUA'){
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else {
            indexAmbosOponentes(index,index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }        

//    if (ataqueEnemigo == ataqueJugador){
//        crearMensaje("EMPATE")
//    }else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
//        crearMensaje("GANASTE")
//        vidasEnemigo--
//        spanVidasEnemigo.innerHTML = vidasEnemigo
//    }else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
//        crearMensaje("GANASTE")
//        vidasEnemigo--
//        spanVidasEnemigo.innerHTML = vidasEnemigo
//    }else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
//        crearMensaje("GANASTE")
//        vidasEnemigo--
//        spanVidasEnemigo.innerHTML = vidasEnemigo
//    }else {
//        crearMensaje("PERDISTE")
//        vidasJugador--
//        spanVidasJugador.innerHTML = vidasJugador
//    }

    revisarVidas()

}

//*Funcion para revisar el conteo de vidas y enviar mensaje de ganador*/
function revisarVidas(){
    if (victoriasJugador == victoriasEnemigo){
        crearMensajeFinal("EMPATE !!!")
    }else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("MUY BIEN, GANASTE !!!")
    }else {
        crearMensajeFinal("LO SIENTO, PERDISTE !!!")
    }
}

//*Funcion para la creacion de los mensajes de la partida */
//*Cambio de variable 'mensajes' por la variable 'resultado' proveniente de codigo html*/
//*Adicion de variables ataque-jugador y ataque-enemigo*/
function crearMensaje(resultadoCombate){
    
    sectionMensajes.innerHTML = resultadoCombate
    ataqueJugadorCSS.innerHTML = indexAtaqueJugador
    ataqueEnemigoCSS.innerHTML = indexAtaqueEnemigo
}

//*Funcion para la creacion y envio del mensaje final del combate.*/
function crearMensajeFinal(resultadoCombateFinal){
    
    sectionReiniciar.style.display = 'block'
    sectionMensajes.innerHTML = resultadoCombateFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
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