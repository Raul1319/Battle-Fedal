class Trofeo {

    constructor() {
        this.img = new Image()
        this.img.src = "./imagenes/trofeo.png"
        let randomNumber = Math.random() * canvas.width;
        let randomxInt = Math.floor(randomNumber);
        this.x = randomxInt;
        this.y = 0;
        this.w = 40;
        this.h = 40;
        this.speed = 1;
    }

    drawTrofeo = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    downTrofeo = () => {

        this.y = this.y + this.speed
    }
}