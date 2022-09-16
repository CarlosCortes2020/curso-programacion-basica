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
    
}

window.addEventListener('load',iniciarJuego)

