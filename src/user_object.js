const MovingObject = require("./moving_object.js")
const Util = require("./util.js");

class UserObject extends MovingObject{
    constructor(variables){
        super(variables);
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        );
        ctx.fill();
    }

    readPrompts(n, prompts) {
        console.log(n)
        let promptArr = prompts[n].split(" ");
        let newVel = [];
        if (promptArr[0] === "left") {
            newVel = [-5, 0];
        } else if (promptArr[0] === "right") {
            newVel = [5, 0];
        } else if (promptArr[0] === "up") {
            newVel = [0, -5];
        } else {
            newVel = [0, 5];
        }
        this.vel = newVel;
        if (n < prompts.length - 1) {
            setTimeout(() => {
                this.readPrompts(n + 1, prompts)
            }, parseInt(promptArr[1]));
        };
        console.log(this.pos);
    }

}

module.exports = UserObject;