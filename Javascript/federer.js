class Federer {

    constructor(){

        this.img = new Image ()
        this.img.src = "./imagenes/Federer PNG.png"
        this.x = 200;
        this.y = 400;
        this.w = 50;
        this.h = 50;
        this.moveFederer = 20;
        this.speed = 3;
        this.movimiento = canvas.width
    }

    drawFederer = () =>{

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    mueveteFedererDerecha = () =>{
        this.x = this.x + this.moveFederer ;


    }

    mueveteIzquierda = () =>{
        this.x = this.x - this.moveFederer;

}
    mueveteArriba = () =>{
        this.y = this.y - this.moveFederer;
    }


    mueveteAbajo = () =>{
        this.y = this.y + this.moveFederer;
    }

    }
