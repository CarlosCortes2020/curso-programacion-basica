
        //SECCION DE DEFINICION DE FUNCIONES
        function aleatorio(min,max){
            return Math.floor(Math.random()*(max-min+1)+min)
        }

        function eleccion(jugada){
            let resultado = ""
            if(jugada == 1){
                resultado = "Piedra" 
            }else if(jugada == 2){
                resultado = "Papel"
            }else if(jugada == 3){
                resultado = "Tijera"
            }else {
                resultado = "NULO"
            }
            return resultado
        }


        //1 es piedra,  2 es papel y 3 es tijera
        let jugador = 0
        let min = 1
        let max = 3
        let pc = 0
        let triunfos = 0
        let perdidas = 0

        while (triunfos < 3 && perdidas < 3){
            pc = aleatorio(1,3)
            jugador =prompt("Elige: 1 Piedra, 2 Papel, 3 Tijera")
            
            //SELECCION DE JUGADOR
            alert("Tu eliges " + eleccion(jugador))

            // SELECCION DE PC
            alert("PC elige " + eleccion(pc))

            //COMBATE
            if(pc == jugador){
                alert("EMPATE")
            }else if (jugador == 1 && pc == 3){
                alert("GANASTE")
                triunfos = triunfos + 1
            }else if(jugador == 2 && pc == 1){
                alert("GANASTE")
                triunfos = triunfos + 1
            }else if(jugador == 3 && pc == 2){
                alert("GANASTE")
                triunfos = triunfos + 1
            }else {
                alert("PERDISTE")
                perdidas = perdidas + 1
            }
        }
        
        alert("GANASTE " + triunfos +" veces. Perdiste " + perdidas + " veces.")
        

    