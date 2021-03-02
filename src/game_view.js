const Game = require('./game.js')
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
        }, 25);
    };

}

module.exports = GameView;