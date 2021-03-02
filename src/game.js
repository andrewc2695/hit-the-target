const MovingObject = require("./moving_object")
const UserObject = require("./user_object")
const Wall = require("./wall")
const levels = require("./level")

class Game {
    constructor(){
        this.walls = []
        this.userObject = []
        this.level = levels
        this.currentLevel = 1
    }
    
    addObject(prompts){
        // this.level.walls.forEach( wall => {
        //     this.walls.push(new Wall(wall))
        // });
        this.userObject.push(new UserObject(this.level[this.currentLevel].userObject));
        debugger
        this.level[this.currentLevel].walls.forEach(wall => {
            this.walls.push(new Wall(wall))
        });
        // const uo = new UserObject({
        //     pos: [30, 30],
        //     vel: [ 1, 0],
        //     radius: 5,
        //     color: "#FFFFFF",
        //     prompts: prompts,
        // });
        // this.userObject = uo
        // console.log("b4")
        // debugger
        this.userObject[0].readPrompts(0, prompts);
        // console.log("after")
        // this.gameOver = false;
        // return uo
    }

    allObjects(){
        return [].concat(this.userObject, this.walls)
    }

    moveObject(){
        this.allObjects().forEach(object => {
            object.move();
        })
    }

    outOfBounds(){
        let position = this.userObject[0].pos;
        if(Math.abs(position[0]) >= Game.DIM_X || Math.abs(position[1]) >= Game.DIM_Y){
            return true;
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = Game.BG_COLOR;
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.allObjects().forEach((object) => {
            object.draw(ctx);
        });
    };
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;



module.exports = Game;