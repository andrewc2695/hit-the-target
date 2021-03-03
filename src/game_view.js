const Game = require('./game.js');
const Goal = require('./goal.js');
const Wall = require('./wall.js');
class GameView{
    constructor(ctx, game, prompts){
        this.ctx = ctx;
        this.game = game;
        this.prompts = prompts;
        // this.game = game;
    }

    start(){
        this.game.addObject(this.prompts);
        const interval = setInterval(() => {
            this.game.draw(this.ctx);
            this.game.moveObject();
            if(this.game.outOfBounds()){
                clearInterval(interval);
                this.gameWon("lost");

            };
            const collision = this.game.checkCollisions()
            if (collision){
                if(collision[1] === "goal"){
                    clearInterval(interval);
                    this.gameWon("won");
                }
            }
        }, 25);
    };

    gameWon(state){
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
            ctx.fillText("Level Failed!", Game.DIM_X / 2, Game.DIM_Y / 2);
        }
    }

    
}


module.exports = GameView;