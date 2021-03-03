const MovingObject = require("./moving_object")
const UserObject = require("./user_object")
const Wall = require("./wall")
const levels = require("./level")
const Goal = require("./goal")
const EnergyBall = require("./energy_ball")

class Game {
    constructor(){
        this.walls = []
        this.userObject = []
        this.energyBalls = [];
        this.goal = []
        this.currentLevel = 1
        this.level = levels
    }
    
    reset(ctx){
        this.walls = [];
        this.userObject = [];
        this.energyBalls = [];
        this.goal = [];
    }

    addObject(prompts){
        // this.level.walls.forEach( wall => {
        //     this.walls.push(new Wall(wall))
        // });
        let a = new UserObject(this.level[this.currentLevel].userObject)
        this.userObject.push(a);
        this.level[this.currentLevel].walls.forEach(wall => {
            this.walls.push(new Wall(wall));
        });
        this.level[this.currentLevel].energyBalls.forEach(eb => {
            this.walls.push(new EnergyBall(eb));
        });
        this.goal.push(new Goal(this.level[this.currentLevel].goal));
        // const uo = new UserObject({
        //     pos: [30, 30],
        //     vel: [ 1, 0],
        //     radius: 5,
        //     color: "#FFFFFF",
        //     prompts: prompts,
        // });
        // this.userObject = uo
        this.userObject[0].readPrompts(0, prompts);
        // this.gameOver = false;
        // return uo
    }

    allObjects(){
        return [].concat(this.userObject, this.walls, this.goal, this.energyBalls);
    }

    moveObject(){
        this.allObjects().forEach(object => {
            object.move();
        })
    }

    checkCollisions(){
       const objects = this.allObjects().slice(1)
       let userPos = this.userObject[0].pos
       for(let i = 0; i < objects.length; i++){
           let obj = objects[i];
            if(objects[i] instanceof Wall){
                let objWidth = obj.width;
                let objHeight = obj.height;
                if(this.between(userPos[0], obj.pos[0], obj.pos[0] + objWidth) && 
                this.between(userPos[1], obj.pos[1],obj.pos[1] + objHeight)){
                    let vel = this.userObject[0].vel
                    if(vel[0] > 0){
                        this.userObject[0].pos[0] = userPos[0] - 1;
                    }else if(vel[0] < 0){
                        this.userObject[0].pos[0] = userPos[0] + 1;
                    }else if(vel[1] > 0){
                        this.userObject[0].pos[1] = userPos[1] - 1;
                    }else if(vel[1] < 0){
                        this.userObject[0].pos[1] = userPos[1] + 1;
                    }
                    this.userObject[0].vel = [0, 0];
                }
            }else if(objects[i] instanceof Goal){
                let objWidth = obj.width;
                let objHeight = obj.height;
                if (this.between(userPos[0], obj.pos[0], obj.pos[0] + objWidth) &&
                    this.between(userPos[1], obj.pos[1], obj.pos[1] + objHeight)) {
                        return[true, "won"];
                    }
            }else if(objects[i] instanceof EnergyBall){
                let userObj = this.userObject[0];
                let dist = Math.sqrt(Math.pow(userPos[0] - obj.pos[0], 2) + Math.pow(userPos[1] - obj.pos[1], 2));
                if (dist < (userObj.radius + obj.radius)){
                    return([true, "lost"]);
                }
            }
       };
       return false;
    }

    between(userPos, objectMin, objectMax){
        return(userPos >= (objectMin - 50) && userPos <= (objectMax + 50))
    }

    outOfBounds(){
        let position = this.userObject[0].pos;
        if(position[0] >= Game.DIM_X || position[1] >= Game.DIM_Y){
            return true;
        }
        if(position[0] <= 0 || position[1] <= 0){
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