const MovingObject = require("./moving_object");

class Goal extends MovingObject{
    constructor(variables){
        super(variables)
        this.height = variables.height;
        this.width = variables.width;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(this.pos[0], this.pos[1], this.width, this.height)
        ctx.fill();
    }
}

module.exports = Goal;
