const MovingObject = require("./moving_object");

class EnergyBall extends MovingObject{
    constructor(variables){
        super(variables)
        this.eng1 = new Image();
        this.eng1.src = "../img/energy1.png"
        this.eng2 = new Image();
        this.eng2.src = "../img/energy2.png"
        this.eng3 = new Image();
        this.eng3.src = "../img/energy3.png"
        this.eng4 = new Image();
        this.eng4.src = "../img/energy4.png"
        this.currentImg = this.eng1;
        setInterval(() => {
            if(this.currentImg === this.eng1){
                this.currentImg = this.eng2;
            }else if(this.currentImg === this.eng2){
                this.currentImg = this.eng3;
            }else if(this.currentImg === this.eng3){
                this.currentImg = this.eng4;
            }else{
                this.currentImg = this.eng1
            }
        },150)
    }

    draw(ctx) {
        // ctx.fillStyle = this.color;
        // ctx.beginPath();
        // ctx.arc(
        //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        // );
        // ctx.fill();
        ctx.drawImage(this.currentImg, this.pos[0], this.pos[1], this.width, this.height);
    }
}

module.exports = EnergyBall;