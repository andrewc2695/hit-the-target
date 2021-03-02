const Game = require('./game.js');
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
            };
            const collision = this.game.checkCollisions()
            if (collision){
                if(collision[1] instanceof Wall){
                    this.game.userObject[0].vel = [0, 0]
                }
            }
        }, 25);
    };

}

module.exports = GameView;