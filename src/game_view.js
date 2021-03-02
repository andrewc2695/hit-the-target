const Game = require('./game.js')
class GameView{
    constructor(ctx, game){
        this.ctx = ctx;
        this.game = game
        // this.game = game;
    }

    start(){
        this.game.addObject();
        setInterval(() => {
            this.game.draw(this.ctx);
            this.game.moveObject();
        }, 25)
    }
}

module.exports = GameView;