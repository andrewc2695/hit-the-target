console.log("webpack is working")
//down 1000,right 1000,left 1000,up 1000,right 1000

const MovingObject = require("./moving_object.js")
const Game = require("./game.js")
const GameView = require("./game_view.js")

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas")
    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;
    const ctx = canvas.getContext("2d")
    const game = new Game();
    const scoreCanvas = document.getElementById("score")
    const scoreCtx = scoreCanvas.getContext("2d")
    scoreCanvas.width = 200;
    scoreCanvas.height = 100;
    // let prompts = window.prompt();
    // prompts = prompts.split(",")
    // let prompts = [""];
    const gv = new GameView(ctx, game, scoreCtx);
    document.getElementById("user-input-button").addEventListener("click", () => gv.getUserInput());
    // gv.start();
})