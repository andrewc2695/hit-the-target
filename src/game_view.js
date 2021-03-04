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
        this.previewInterval = undefined
        this.scoreInterval = undefined
        this.score = 0
        this.prompts = [];
    }

    preview(){
        document.getElementById("game-canvas").removeEventListener("click", callPreview);
        this.game.addObject();
        this.previewInterval = setInterval(() => {
            this.drawScore();
            this.game.draw(this.ctx);
        }, 25)
    }

    start(){
        this.game.reset()
        if(this.scoreInterval) clearInterval(this.scoreInterval);
        if(this.previewInterval) clearInterval(this.previewInterval);
        this.score = 0;
        this.gameState = true;
        this.scoreInterval = setInterval(() => {
                this.score += 5
                this.drawScore();
        }, 100)
        this.game.reset(this.ctx);
        this.game.addObject();
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
        this.gameState = false;
        let ctx = this.ctx;
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = Game.BG_COLOR;
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        if(state === "won"){
            ctx.fillText("Level Completed!", Game.DIM_X / 2, Game.DIM_Y / 2);
        }else{
            clearInterval(this.scoreInterval)
            ctx.fillText("Level Failed!", Game.DIM_X / 2, Game.DIM_Y / 2);
        }
    }

    getUserInput(prompts){
        // var input = document.getElementById("user-input");
        // this.prompts = input.value.split(",")
        this.prompts = prompts;
        if(this.interval !== undefined){
            clearInterval(this.interval);
        }
        this.start();
    }

    drawTitle(){
        let ctx = this.ctx;
        that = this;
        document.getElementById("game-canvas").addEventListener("click", callPreview)
        ctx.clearRect(0, 0, 600, 1000);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 1000, 600);
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("Hit The Target click to start", 500, 300);
        this.drawScore()
    }

    drawScore(){
        let ctx = this.scoreCtx;
        ctx.clearRect(0, 0, 200, 150);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 200, 150);
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "#54FADB";
        ctx.textAlign = "center";
        ctx.fillText(this.score, 100, 62)
    }


}


module.exports = GameView;