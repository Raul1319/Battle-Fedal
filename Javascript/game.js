class Game {
    constructor() {
        // ELEMENTOS DEL JUEGO
        // FEDERER
        this.federerObj = new Federer()
        // NADAL 
        //this.nadalObj = new Nadal()
        this.nadalArray = []
        // FONDO CANCHA
        this.fondo = new Image()
        this.fondo.src = "./imagenes/Fondo PNG.png"
        // PELOTAS
        //this.pelotaObj = new Pelota()
        this.pelotaArray = []
        // TROFEOS
        //this.trofeoObj = new Trofeo ()
        this.trofeoArray = [];

        this.width = canvas.width;
        this.height = canvas.height;

        this.frames = 0;
    }


    addPelota = () =>{
        if(this.frames % 180 === 0){
            let nuevaPelota = new Pelota()
            this.pelotaArray.push(nuevaPelota)
        }
    }


    addTrofeo = () => {
        if(this.frames % 180 === 0){
            let nuevoTrofeo = new Trofeo()
        this.trofeoArray.push(nuevoTrofeo)

        }
        
    }



    addNadal = () =>{
        if(this.frames % 180 === 0){
            let nuevoNadal = new Nadal()
            this.nadalArray.push(nuevoNadal)

        }
        

    }

    drawFondo = () => {

        ctx.drawImage(this.fondo, 0, 0, this.width, this.height)
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
        this.frames = this.frames + 1
        //console.log("iniciando el juego")

        // LIMPIAR CANVAS
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        // ACCIONES Y MOVIMIENTOS DE LOS ELEMENTOS
        //this.pelotaObj.downPelota()
        this.pelotaArray.forEach((eachPelota) =>{
            eachPelota.downPelota()
        })
        //this.nadalArray.downNadal()
        this.nadalArray.forEach((eachNadal) =>{
            eachNadal.downNadal()
        })
        //this.trofeoObj.downTrofeo()
        this.trofeoArray.forEach((eachTrofeo) =>{
            eachTrofeo.downTrofeo()
        })
        this.addNadal()

        this.addTrofeo()

        this.addPelota()
        
        
        //DIBUJADO DE LOS ELEMNTOS
        this.drawFondo()
        this.federerObj.drawFederer()
        //this.nadalArray.drawNadal()
        this.nadalArray.forEach((eachNadal) => {
            eachNadal.drawNadal()
        })
        //this.pelotaObj.drawPelota()
        this.pelotaArray.forEach((eachPelota) =>{
            eachPelota.drawPelota()
        })
        //this.trofeoObj.drawTrofeo()
        this.trofeoArray.forEach((eachTrofeo) =>{
            eachTrofeo.drawTrofeo()
        })
        // CONTROL DE RECURSION

        
            requestAnimationFrame(this.gameLoop)
        }

    
    }






