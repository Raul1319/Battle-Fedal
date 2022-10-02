const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");






//FUNCIONES DE GESTION DE ESTADO.

const startGame = () => {
    console.log ("iniciando pantalla");


    // OCULTAR PANTALLA DE INICIO
    startScreen.style.display = "none"

    // MOATRAR CANVAS
    canvas.style.display = "block"

    // nueva version del juego

    let gameObj = new Game ()
    console.log(gameObj)

    // inicia el juego
    
    gameObj.gameLoop()

}













// ADDEVENTLITENERS
startBtn.addEventListener("click", startGame)