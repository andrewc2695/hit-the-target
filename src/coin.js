const MovingObject = require("./moving_object");

class Coin extends MovingObject{
    constructor(variables){
        super(variables)
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(this.pos[0], this.pos[1], this.width, this.height)
        ctx.fill();
    }
}

module.exports = Coin;