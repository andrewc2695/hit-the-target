console.log("webpack is working")

const MovingObject = require("./moving_object.js")

window.MovingObject = MovingObject;



document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas")
    canvas.width = 1000;
    canvas.height = 600;
    const ctx = canvas.getContext("2d")
    window.ctx = ctx;
})