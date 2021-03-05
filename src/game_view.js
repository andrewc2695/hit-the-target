const Game = require('./game.js');
const Goal = require('./goal.js');
const Wall = require('./wall.js');

let that = ""

function callPreview() {
    that.preview()
}

class GameView{
    constructor(ctx, game, scoreCtx){
        this.ctx = ctx;
        this.game = game;
        this.scoreCtx = scoreCtx;
        this.gameState = false;
        this.interval = undefined;
        this.previewInterval = undefined;
        this.scoreInterval = undefined;
        this.score = 0;
        this.prompts = [];
        this.currentLevel = 1;
        this.previousLevel = 0;
        document.getElementById("instructions").addEventListener("click", () => this.changeId())
        document.getElementsByClassName("modal")[0].addEventListener("click", () => this.changeId())
    }

    changeId(){
        if (document.getElementById("modal-hidden")){
            document.getElementById("modal-hidden").setAttribute("id", "modal-show");
        }else{
            document.getElementById("modal-show").setAttribute("id", "modal-hidden")
        }
    }

    preview(){
        this.game.currentLevel = this.currentLevel;
        document.getElementById("game-canvas").removeEventListener("click", callPreview);
        this.drawLevel();
        this.game.addObject();
        setTimeout(() => {
            this.ctx.clearRect(0, 0, 600, 1000);
            this.previewInterval = setInterval(() => {
                this.drawScore();
                this.game.draw(this.ctx);
                this.game.previewMove();
            }, 25)
        }, 1500);
    }

    start(){
        if(this.gameState){
            this.game.reset();
            this.game.addObject();
        }
        this.gameState = true;
        if(this.scoreInterval) clearInterval(this.scoreInterval);
        if(this.previewInterval) clearInterval(this.previewInterval);
        if(this.previousLevel < this.currentLevel){
            this.previousLevel += 1;
        }else{
            this.score = 0;
        }
        this.gameState = true;
        this.scoreInterval = setInterval(() => {
            if (this.game.userObject[0].vel[0] !== 0 || this.game.userObject[0].vel[1] !== 0)
                this.score += 5
                this.drawScore();
        }, 100)
        this.game.readPrompts(this.prompts);
        this.interval = setInterval(() => {
            this.game.draw(this.ctx);
            this.game.moveObject();
            if(this.game.outOfBounds()){
                clearInterval(this.interval);
                this.gameWon("lost");
            };
            const collision = this.game.checkCollisions()
            if (collision){
                    if(collision[1] === "coin"){
                        this.score += 1000
                    }else{
                        clearInterval(this.interval);
                        this.gameWon(collision[1]);
                    }
                }
        }, 25);
    };

    gameWon(state){
        let inputs = document.getElementById("inputs");
        while (inputs.firstChild) {
                inputs.removeChild(inputs.firstChild);
            }
        while(this.prompts.length > 0){
            this.prompts.pop();
        }
        this.game.reset();
        this.gameState = false;
        clearInterval(this.scoreInterval);
        let ctx = this.ctx;
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = Game.BG_COLOR;
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.font = "30px Copperplate";
        ctx.fillStyle = "#54FADB";
        ctx.textAlign = "center";
        if(state === "won"){
            this.currentLevel++;
            ctx.fillText("Level Completed!", Game.DIM_X / 2, Game.DIM_Y / 2);
        }else{
            this.score = 0;
            ctx.fillText("Level Failed!", Game.DIM_X / 2, Game.DIM_Y / 2);
            this.currentLevel = 1;
        }
        setTimeout(() => {
            this.ctx.clearRect(0, 0, 600, 1000);
            this.preview();
        }, 1500);
    }

    getUserInput(prompts){
        if(prompts.length !== 0){
            this.prompts = prompts;
            if(this.interval !== undefined){
                clearInterval(this.interval);
            }
            if (this.interval !== undefined || this.previewInterval !== undefined){
                this.start();
            }
        }
    }

    drawTitle(){
        let ctx = this.ctx;
        that = this;
        document.getElementById("game-canvas").addEventListener("click", callPreview);
        ctx.clearRect(0, 0, 600, 1000);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 1000, 600);
        ctx.font = "30px Copperplate";
        ctx.fillStyle = "#54FADB";
        ctx.textAlign = "center";
        ctx.fillText("Hit The Target", 500, 275);
        ctx.fillText("Click to Start", 500, 325);
        this.drawScore()
    }

    drawScore(){
        let ctx = this.scoreCtx;
        ctx.clearRect(0, 0, 200, 150);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 200, 150);
        ctx.font = "30px Copperplate";
        ctx.fillStyle = "#54FADB";
        ctx.textAlign = "center";
        ctx.fillText(this.score, 100, 62)
    }

    drawLevel(){
        let ctx = this.ctx;
        ctx.clearRect(0, 0, 600, 1000);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 1000, 600);
        ctx.font = "30px Comic Sans MS";
        ctx.font = "30px Copperplate";
        ctx.fillStyle = "#54FADB";
        ctx.fillText(`Level ${this.currentLevel}`, 500, 275);
        ctx.fillText(`${this.game.level[this.currentLevel].title}`, 500, 325);
    }


}


module.exports = GameView;