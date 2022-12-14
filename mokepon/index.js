const express = require("express")
//*Para eliminar mensaje de control de acceso
const cors = require("cors")

const app = express()

//Para poder dar alojamiento
app.use(express.static('public'))
app.use(cors())
//*Capacidad de recibir peticiones post con formato json
app.use(express.json())


//*Lista de Jugadores
const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id
    }
    asignarMokepon(mokepon) {
        this.mokepon = mokepon
    }

    actualizarPosicion(x, y) {
        this.x = x
        this.y = y
    }

    asignarAtaques(ataques) {
        this.ataques = ataques
    }

}

//*Creacion de clase en backend para los mokepones
class Mokepon {
    constructor(nombre) {
        this.nombre = nombre
    }
}
//*Generar ID y enviarlo a codepro.js
app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`
    const jugador = new Jugador(id)
    jugadores.push(jugador)
    res.send(id)
})

//*Logica para atender peticion desde frontend y mostrar el mokepon seleccionado
app.post("/mokepon/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || "Ohh Ohh"
    const nombre = req.body.mokepon || "Ohh no Ohh"
    const mokepon = new Mokepon(nombre)
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId == jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

//*configuracion de endpint para recibir las coordenadas
app.post("/mokepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || "Ohh"
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId == jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    const enemigos = jugadores.filter((jugador) => jugadorId != jugador.id)

    res.send({
        enemigos
    })
})

//*Logica para atender peticion desde frontend y mostrar el mokepon seleccionado
app.post("/mokepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || "Ohh Ohh"
    const ataques = req.body.ataques || []
        
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId == jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarAtaques(ataques)
    }
    res.end()
})

app.get("/mokepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id == jugadorId)
    res.send({
        ataques: jugador.ataques|| []
    })
})

app.listen(8080, () => {
    console.log("Servidor en operacion")
})

