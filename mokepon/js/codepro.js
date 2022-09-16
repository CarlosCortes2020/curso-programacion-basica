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
    

    if (inputHipodoge.checked){
        alert("SELECCIONASTE A HIPODOGE !!!")
    }else if (inputCapipepo.checked){
        alert("SELECCIONASTE A CAPIPEPO !!!")
    }else if (inputRatigueya.checked){
        alert("SELECCIONASTE A RATIGUEYA !!!")
    }else if (inputLangostelvis.checked){
        alert("SELECCIONASTE A LANGOSTELVIS !!!")
    }else if (inputTucapalma.checked){
        alert("SELECCIONASTE A TUCAPALMA !!!")
    }else if (inputPydos.checked){
        alert("SELECCIONASTE A PYDOS !!!")
    }else{
        alert("NO SELECCIONASTE MASCOTA !!!")
    }
    
}

window.addEventListener('load',iniciarJuego)

