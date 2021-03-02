console.log("webpack is working")

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
    let prompts = window.prompt();
    prompts = prompts.split(",")
    new GameView(ctx, game, prompts).start();
})