const MovingObject = require("./moving_object")
class Game {
    constructor(){
        this.movingObject = []
    }

    addObject(){
        const mo = new MovingObject({
            pos: [30, 30],
            vel: [ 1, 0],
            radius: 5,
            color: "#FFFFFF"
        });
        this.movingObject = mo
        return mo
    }

    moveObject(){
        this.movingObject.move()
    }

    draw(ctx) {
        console.log(this.movingObject);
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = Game.BG_COLOR;
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.movingObject.draw(ctx);
    };
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;



module.exports = Game;