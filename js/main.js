const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");
const restartbtn = document.querySelector("#restart-btn")
const endGame = document.querySelector("#gameover-screen")


let gameObj;



//FUNCIONES DE GESTION DE ESTADO.

const startGame = () => {
    //console.log("iniciando pantalla");


    // OCULTAR PANTALLA DE INICIO
    endGame.style.display = "none"
    startScreen.style.display = "none"

    // MOATRAR CANVAS
    canvas.style.display = "block"

    // nueva version del juego

    gameObj = new Game()
    //console.log(gameObj)

    // inicia el juego

    gameObj.gameLoop()

}













// ADDEVENTLITENERS
startBtn.addEventListener("click", startGame)

window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        gameObj.federerObj.mueveteFedererDerecha();

    } if (event.code === "ArrowLeft") {
        gameObj.federerObj.mueveteIzquierda()

    } if (event.code === "ArrowUp") {
        gameObj.federerObj.mueveteArriba()

    } else if (event.code === "ArrowDown") {
        gameObj.federerObj.mueveteAbajo()
    }


})