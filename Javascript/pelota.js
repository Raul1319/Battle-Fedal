class Pelota {
    constructor() {
        this.img = new Image()
        this.img.src = "./imagenes/Pelota recortada.png"
        let randomNumber = Math.random() * canvas.width;
        let randomxInt = Math.floor(randomNumber);
        this.x = randomxInt;
        this.y = 0;
        this.w = 20;
        this.h = 20;
        this.speed = 1;
        this.pelotaDirectionY = 1

    }

    drawPelota = () => {

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    downPelota = () =>{
        this.y = this.y + this.speed
    }

    upPelota = () =>{
        if(this.y === this.federerObj){
            this.pelotaDirectionY = -1
        }
    }

   
}