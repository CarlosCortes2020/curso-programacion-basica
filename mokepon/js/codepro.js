function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
}

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

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo= document.getElementById('mascota-enemigo')
    
    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'HIPODOGE'
    }else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'CAPIPEPO'
    }else if (ataqueAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'RATIGUEYA'
    }else if (ataqueAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'LANGOSTELVIS'
    }else if (ataqueAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'TUCAPALMA'
    }else if (ataqueAleatorio == 6){
        spanMascotaEnemigo.innerHTML = 'PYDOS'
    }


}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

window.addEventListener('load',iniciarJuego)

