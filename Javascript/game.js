class Game {
    constructor(){
        // ELEMENTOS DEL JUEGO
        // FEDERER
        this.federerObj = new Federer ()
        // NADAL 
        this.nadalObj = new Nadal()
        // FONDO CANCHA
        this.fondo = new Image()
        this.fondo.src = "./imagenes/Fondo PNG.png"
        // PELOTAS
        // TROFEOS
    }





drawFondo = () =>{

    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height)
}
    // ACCIONES DEL JUEGO
    // EFECTO DE SONIDO CUANDO FEDERER AGARRA LA BOLA
    // FEDERER SE MUEVE HASTA LA MITAD.
    // PELOTAS CAEN
    // TROFEOS CAEN
    // NADAL CAE
    // COLISION NADAL FEDERAR
    // COLISION PELOTAS FEDERER
    // COLISION TROFEOS FEDERER
    // COLISION NADAL FEDERER
    //FEDERER AGARRA TROFEO DESAPRACE UN NADAL
    // SCORE

    gameLoop = () => {
        //console.log("iniciando el juego")

        // LIMPIAR CANVAS
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        // ACCIONES Y MOVIMIENTOS DE LOS ELEMENTOS
        //DIBUJADO DE LOS ELEMNTOS
        this.drawFondo()
        this.federerObj.drawFederer()
        this.nadalObj.drawNadal()
        // CONTROL DE RECURSION

        requestAnimationFrame(this.gameLoop)
    }
}





