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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId = null
let enemigoId = null
let mokepon 
let mokepones =  []
let mokeponesEnemigos = []
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
let mascotaJugadorObjeto
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

let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'


//*Seccion para creacion de clases
class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 80
        this.alto = 80
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)        
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

//* Creacion de objetos basados en las clases
let hipodoge = new Mokepon('Hipodoge','./assets/hipodoge.png', 5,'./assets/hipodoge.png')
let capipepo = new Mokepon('Capipepo','./assets/capipepo.png', 5,'./assets/capipepo.png')
let ratigueya = new Mokepon('Ratigueya','./assets/ratigueya.png', 5,'./assets/ratigueya.png')
let langostelvis = new Mokepon('Langostelvis','./assets/langostelvis.png', 5,'./assets/langostelvis.png')
let tucapalma = new Mokepon('Tucapalma','./assets/tucapalma.png', 5,'./assets/tucapalma.png')
let pydos = new Mokepon('Pydos','./assets/pydos.png', 5,'./assets/pydos.png')

//*Creacion de enemigos
/* let hipodogeEnemigo = new Mokepon('Hipodoge','./assets/hipodoge.png', 5,'./assets/hipodoge.png',130,200)
let capipepoEnemigo = new Mokepon('Capipepo','./assets/capipepo.png', 5,'./assets/capipepo.png',350,10)
let ratigueyaEnemigo = new Mokepon('Ratigueya','./assets/ratigueya.png', 5,'./assets/ratigueya.png',300,300)
let langostelvisEnemigo = new Mokepon('Langostelvis','./assets/langostelvis.png', 5,'./assets/langostelvis.png',50,400)
let tucapalmaEnemigo = new Mokepon('Tucapalma','./assets/tucapalma.png', 5,'./assets/tucapalma.png',530,150)
let pydosEnemigo = new Mokepon('Pydos','./assets/pydos.png', 5,'./assets/pydos.png',500,420) */

//* Creacion de ataques para los pokemon
//* Creacion de ataques usando una lista

const MOKEPONES_ATAQUES = [
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
]

hipodoge.ataques.push(...MOKEPONES_ATAQUES)

capipepo.ataques.push(...MOKEPONES_ATAQUES)

ratigueya.ataques.push(...MOKEPONES_ATAQUES)

langostelvis.ataques.push(...MOKEPONES_ATAQUES)

tucapalma.ataques.push(...MOKEPONES_ATAQUES)

pydos.ataques.push(...MOKEPONES_ATAQUES)

//* Creacion de ataques para los pokemon enemigo
/* 
hipodogeEnemigo.ataques.push(
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
)

capipepoEnemigo.ataques.push(
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
)

ratigueyaEnemigo.ataques.push(
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
)

langostelvisEnemigo.ataques.push(
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
)

tucapalmaEnemigo.ataques.push(
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
)

pydosEnemigo.ataques.push(
    {nombre: '💥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌪️', id: 'boton-tierra'},
)
 */
//*Seccion para definicion y llenado del arreglo de los mokepon
mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)


//*Funciones de de juego*
//Funcion para inicio del juego, definicion de botones direccionamiento a HTML
function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    //* Estructura para inyectar a HTML los datos de js
    mokepones.forEach((mokepon) => {
        //console.log(mokepon.nombre)
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
    //*Funcion para enlazart con rutina para conexion a servidor
    unirseAlJuego()
}

//*Funcion para enlazart con rutina para conexion a servidor y mostrar en console el id enviado por servidor
function unirseAlJuego() {
    fetch("http://192.168.0.19:8080/unirse")
        .then(function (res) {
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })    
}

//Funcion par ala seleccion de mascota por parte del jugador y generacion aleatoria de la mascota del enemigo
function seleccionarMascotaJugador(){
    
    

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
        //reiniciarJuego()
        return
    }
    
    sectionSeleccionarMascota.style.display = 'none'

    //Funcion para enviar a backend el nombre mascota
    seleccionarMokepon(mascotaJugador)
    console.log(mokepon)


    extraerAtaques(mascotaJugador)
    
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
    
}

function seleccionarMokepon(mascotaJugador) {
    fetch(`http://192.168.0.19:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
            
        })
    })
    
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
                ataqueJugadorCSS.innerHTML = 'FUEGO'
                //*boton.style.background = '#112f58' - varColor
            } else if (e.target.textContent == '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                ataqueJugadorCSS.innerHTML = 'AGUA'
                //*boton.style.background = '#112f58'
            }else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                ataqueJugadorCSS.innerHTML = 'TIERRA'
                //*boton.style.background = '#112f58'
            }

            if (ataqueJugador.length == 5){
                enviarAtaques()
            }
            
        })
    })
}

function enviarAtaques() {
    fetch(`http://192.168.0.19:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch(`http://192.168.0.19:8080/mokepon/${enemigoId}/ataques`)
       .then(function (res) {
           if (res.ok) {
              res.json()
                 .then(function ({ ataques }) {
                    if (ataques.length == 5) {
                        ataqueEnemigo = ataques
                        combate()
                    }
                 })
           }
       })
}


//Funcion para la generacion aleatoria de la mascota del enemigo
function seleccionarMascotaEnemigo(enemigo){

    //*let mascotaAleatorio = aleatorio(0,mokepones.length-1)
    //*spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    //*opcionAtaquesEnemigo = mokepones[mascotaAleatorio].ataques

    spanMascotaEnemigo.innerHTML = enemigo.nombre
    opcionAtaquesEnemigo = enemigo.ataques

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
        ataqueEnemigoCSS.innerHTML = 'FUEGO'
    }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
        console.log(ataqueEnemigo)
        ataqueEnemigoCSS.innerHTML = 'AGUA'
    }else {
        ataqueEnemigo.push('TIERRA')
        console.log(ataqueEnemigo)
        ataqueEnemigoCSS.innerHTML = 'TIERRA'
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
    clearInterval(intervalo)

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

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    //*Pintar mokepones para evitar parpadeo
    mokeponesEnemigos.forEach(function (mokepon) {
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })

    /* hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
 */
    /* if (mascotaJugadorObjeto.velocidadX != 0 || mascotaJugadorObjeto.velocidadY != 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(tucapalmaEnemigo)
        revisarColision(pydosEnemigo)

    } */

}

//*Funcion para enviar posicion hacia backend
function enviarPosicion(x, y) {
    fetch(`http://192.168.0.19:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })

    .then(function (res) {
        if (res.ok) {
            res.json()
               .then(function ({ enemigos }) {
                   console.log(enemigos)
                   mokeponesEnemigos = enemigos.map(function (enemigo) {
                       let mokeponEnemigo =null
                       const mokeponNombre = enemigo.mokepon.nombre || ""
                       if ( mokeponNombre == "Hipodoge") {
                        mokeponEnemigo = new Mokepon('Hipodoge','./assets/hipodoge.png', 5,'./assets/hipodoge.png',enemigo.id)
                       } else if (mokeponNombre == "Capipepo") {
                        mokeponEnemigo = new Mokepon('Capipepo','./assets/capipepo.png', 5,'./assets/capipepo.png',enemigo.id)
                       }
                       else if (mokeponNombre == "Ratigueya") {
                        mokeponEnemigo = new Mokepon('Ratigueya','./assets/ratigueya.png', 5,'./assets/ratigueya.png',enemigo.id)
                       }
                       else if (mokeponNombre == "Langostelvis") {
                        mokeponEnemigo = new Mokepon('Langostelvis','./assets/langostelvis.png', 5,'./assets/langostelvis.png',enemigo.id)
                       }
                       else if (mokeponNombre == "Tucapalma") {
                        mokeponEnemigo = new Mokepon('Tucapalma','./assets/tucapalma.png', 5,'./assets/tucapalma.png',enemigo.id)
                       }
                       else if (mokeponNombre == "Pydos") {
                        mokeponEnemigo = new Mokepon('Pydos','./assets/pydos.png', 5,'./assets/pydos.png',enemigo.id)
                       }   
                       
                       mokeponEnemigo.x = enemigo.x
                       mokeponEnemigo.y = enemigo.y
                       
                       return mokeponEnemigo

                   })
                   
               })            
        }
    })
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = - 5    
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY =  5
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break      
        default:
            break
    }
}

function iniciarMapa() {
    mapa.width = 800
    mapa.height = 600
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas,50)

    //Seccion para hacer uso del teclado para el movimiento del mokepon
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup',detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            return mokepones[i]
        }
                
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x +enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x +mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    } 
    
    detenerMovimiento()
    clearInterval(intervalo)

    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
    //*alert("Hay colision con " + enemigo.nombre)
    
}

//Codigo principal de ejecución
window.addEventListener('load',iniciarJuego)