
class MovingObject {
    constructor(variables){
        this.pos = variables.pos;
        this.vel = variables.vel;
        this.radius = variables.radius;
        this.color = variables.color;
        this.prompts = variables.prompts;
    }

    readPrompts(n){
        console.log(n)
        let promptArr = this.prompts[n].split(" ");
        let newVel = [];
        if (promptArr[0] === "left") {
                newVel = [-5, 0];
            }else if(promptArr[0] === "right"){
                newVel = [5, 0];
            }else if(promptArr[0] === "up"){
                newVel = [0, -5];
            }else{
                newVel = [0, 5];
            }
        this.vel = newVel;
        if(n < this.prompts.length - 1){
            setTimeout(() => {
                this.readPrompts(n + 1)
            }, parseInt(promptArr[1]));
        };
        console.log(this.pos);
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        );
        ctx.fill();
    }

    move(){
        this.pos[0] = this.pos[0] + this.vel[0]
        this.pos[1] = this.pos[1] + this.vel[1]
    }


}

module.exports = MovingObject;
