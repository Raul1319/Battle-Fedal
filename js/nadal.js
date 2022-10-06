class Nadal {
    constructor() {

        this.img = new Image()
        this.img.src = "./imagenes/nadal.png"
        let randomNumber = Math.random() * canvas.width;
        let randomxInt = Math.floor(randomNumber);
        this.x = randomxInt;
        this.y = 0;
        this.w = 30;
        this.h = 30;
        this.speed = 1;

    }

    drawNadal = () => {

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

    }

    downNadal = () => {

        this.y = this.y + this.speed
    }


}