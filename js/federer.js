class Federer {

    constructor() {

        this.img = new Image()
        this.img.src = "./imagenes/federer.png"
        this.x = 200;
        this.y = 400;
        this.w = 50;
        this.h = 50;
        this.moveFederer = 20;
        this.speed = 3;
    }

    drawFederer = () => {

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    mueveteFedererDerecha = () => {
        if (this.x < 450) {
            this.x = this.x + this.moveFederer;
        }



    }

    mueveteIzquierda = () => {
        if (this.x > 0) {
            this.x = this.x - this.moveFederer;
        }
    }
    mueveteArriba = () => {
        if (this.y > 250) {
            this.y = this.y - this.moveFederer;
        }
    }


    mueveteAbajo = () => {
        if (this.y < 540) {
            this.y = this.y + this.moveFederer;
        }
    }

}
