const MovingObject = require("./moving_object.js")
const Util = require("./util.js");

class Wall extends MovingObject {
    constructor(variables) {
        super(variables)

    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(this.pos[0], this.pos[1], 20, 60)
        ctx.fill();
    }

}

module.exports = Wall;