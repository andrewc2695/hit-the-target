
class MovingObject {
    constructor(variables){
        this.pos = variables.pos;
        this.vel = variables.vel;
        this.radius = variables.radius;
        this.color = variables.color;
    }


    move(){
        this.pos[0] = this.pos[0] + this.vel[0]
        this.pos[1] = this.pos[1] + this.vel[1]
    }


}

module.exports = MovingObject;
