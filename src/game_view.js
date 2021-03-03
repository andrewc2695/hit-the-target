const Game = require('./game.js');
const Goal = require('./goal.js');
const Wall = require('./wall.js');

class GameView{
    constructor(ctx, game, scoreCtx){
        this.ctx = ctx;
        this.game = game;
        this.scoreCtx = scoreCtx;
        this.gameState = false;
        this.interval = undefined;
        this.scoreInterval = undefined
        this.score = 0
    }

    start(){
        this.score = 0;
        this.gameState = true;
        this.scoreInterval = setInterval(() => {
            if (this.gameState === true){
                this.score += 5
                this.drawScore();
            }else{
                clearInterval(this.scoreInterval);
            }
        }, 100)
        this.game.reset(this.ctx);
        this.game.addObject(this.prompts);
        // if(interval !== undefined) console.log(true);
        this.interval = setInterval(() => {
            console.log(this.score);
            this.game.draw(this.ctx);
            this.game.moveObject();
            if(this.game.outOfBounds()){
                clearInterval(this.interval);
                this.gameWon("lost");
            };
            const collision = this.game.checkCollisions()
            if (collision){
                    clearInterval(this.interval);
                    this.gameWon(collision[1]);
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

    getUserInput(){
        var input = document.getElementById("user-input");
        this.prompts = input.value.split(",")
        if(this.interval !== undefined){
            clearInterval(this.interval);
        }
        this.start();
    }

    drawScore(){
        let ctx = this.scoreCtx;
        ctx.clearRect(0, 0, 200, 150);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 200, 150);
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText(this.score, 100, 75)
    }
}


module.exports = GameView;