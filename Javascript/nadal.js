class Nadal {
constructor (){

    this.img = new Image ()
    this.img.src = "./imagenes/Nadal(1).png"
    this.x = -200;
    this.y = 300;
    this.w = 50;
    this.y = 50;

}

drawNadal = () =>{

ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

}


}