const MovingObject = require("./moving_object");

class EnergyBall extends MovingObject{
    constructor(variabkes){
        super(variabkes)
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        );
        ctx.fill();
    }
}

module.exports = EnergyBall;