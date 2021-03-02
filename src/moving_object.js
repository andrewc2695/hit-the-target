class MovingObject {
    constructor(variables){
        this.pos = variables.pos;
        this.vel = variables.vel;
        this.radius = variables.radius;
        this.color = variables.color;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        );
        ctx.fill();
        console.log("hi")
    }

    move(){
        this.pos[0] = this.pos[0] + this.vel[0]
        this.pos[1] = this.pos[1] + this.vel[1]
    }


}

module.exports = MovingObject;
