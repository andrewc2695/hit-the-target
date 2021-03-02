const MovingObject = require("./moving_object")
class Game {
    constructor(level){
        this.level = level
        this.movingObject = []
    }

    addObject(prompts){
        const mo = new MovingObject({
            pos: [30, 30],
            vel: [ 1, 0],
            radius: 5,
            color: "#FFFFFF",
            prompts: prompts,
        });
        this.movingObject = mo
        console.log("b4")
        this.movingObject.readPrompts(0);
        console.log("after")
        this.gameOver = false;
        return mo
    }

    moveObject(){
        this.movingObject.move();
        console.log(this.movingObject.pos)
    }

    outOfBounds(){
        let position = this.movingObject.pos;
        if(Math.abs(position[0]) >= Game.DIM_X || Math.abs(position[1]) >= Game.DIM_Y){
            return true;
        }
    }

    draw(ctx) {
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