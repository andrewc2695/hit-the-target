/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/energy_ball.js":
/*!****************************!*\
  !*** ./src/energy_ball.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass EnergyBall extends MovingObject{\n    constructor(variabkes){\n        super(variabkes)\n        this.eng1 = new Image();\n        this.eng1.src = \"../img/energy1.png\"\n        this.eng2 = new Image();\n        this.eng2.src = \"../img/energy2.png\"\n        this.eng3 = new Image();\n        this.eng3.src = \"../img/energy3.png\"\n        this.eng4 = new Image();\n        this.eng4.src = \"../img/energy4.png\"\n        this.currentImg = this.eng1;\n        setInterval(() => {\n            if(this.currentImg === this.eng1){\n                this.currentImg = this.eng2;\n            }else if(this.currentImg === this.eng2){\n                this.currentImg = this.eng3;\n            }else if(this.currentImg === this.eng3){\n                this.currentImg = this.eng4;\n            }else{\n                this.currentImg = this.eng1\n            }\n        },150)\n    }\n\n    draw(ctx) {\n        // ctx.fillStyle = this.color;\n        // ctx.beginPath();\n        // ctx.arc(\n        //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n        // );\n        // ctx.fill();\n        ctx.drawImage(this.currentImg, this.pos[0], this.pos[1], 60, 60)\n    }\n}\n\nmodule.exports = EnergyBall;\n\n//# sourceURL=webpack:///./src/energy_ball.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\nconst UserObject = __webpack_require__(/*! ./user_object */ \"./src/user_object.js\")\nconst Wall = __webpack_require__(/*! ./wall */ \"./src/wall.js\")\nconst levels = __webpack_require__(/*! ./level */ \"./src/level.js\")\nconst Goal = __webpack_require__(/*! ./goal */ \"./src/goal.js\")\nconst EnergyBall = __webpack_require__(/*! ./energy_ball */ \"./src/energy_ball.js\")\n\nclass Game {\n    constructor(){\n        this.walls = []\n        this.userObject = []\n        this.energyBalls = [];\n        this.goal = []\n        this.currentLevel = 1\n        this.level = levels\n    }\n    \n    reset(ctx){\n        this.walls = [];\n        this.userObject = [];\n        this.energyBalls = [];\n        this.goal = [];\n    }\n\n    addObject(prompts){\n        // this.level.walls.forEach( wall => {\n        //     this.walls.push(new Wall(wall))\n        // });\n        let a = new UserObject(this.level[this.currentLevel].userObject)\n        this.userObject.push(a);\n        this.level[this.currentLevel].walls.forEach(wall => {\n            this.walls.push(new Wall(wall));\n        });\n        this.level[this.currentLevel].energyBalls.forEach(eb => {\n            this.walls.push(new EnergyBall(eb));\n        });\n        this.goal.push(new Goal(this.level[this.currentLevel].goal));\n        // const uo = new UserObject({\n        //     pos: [30, 30],\n        //     vel: [ 1, 0],\n        //     radius: 5,\n        //     color: \"#FFFFFF\",\n        //     prompts: prompts,\n        // });\n        // this.userObject = uo\n        this.userObject[0].readPrompts(0, prompts);\n        // this.gameOver = false;\n        // return uo\n    }\n\n    allObjects(){\n        return [].concat(this.userObject, this.walls, this.goal, this.energyBalls);\n    }\n\n    moveObject(){\n        this.allObjects().forEach(object => {\n            object.move();\n        })\n    }\n\n    checkCollisions(){\n       const objects = this.allObjects().slice(1)\n       let userPos = this.userObject[0].pos\n       for(let i = 0; i < objects.length; i++){\n           let obj = objects[i];\n            if(objects[i] instanceof Wall){\n                let objWidth = obj.width;\n                let objHeight = obj.height;\n                if(this.between(userPos[0], obj.pos[0], obj.pos[0] + objWidth) && \n                this.between(userPos[1], obj.pos[1],obj.pos[1] + objHeight)){\n                    let vel = this.userObject[0].vel\n                    if(vel[0] > 0){\n                        this.userObject[0].pos[0] = userPos[0] - 1;\n                    }else if(vel[0] < 0){\n                        this.userObject[0].pos[0] = userPos[0] + 1;\n                    }else if(vel[1] > 0){\n                        this.userObject[0].pos[1] = userPos[1] - 1;\n                    }else if(vel[1] < 0){\n                        this.userObject[0].pos[1] = userPos[1] + 1;\n                    }\n                    this.userObject[0].vel = [0, 0];\n                }\n            }else if(objects[i] instanceof Goal){\n                let objWidth = obj.width;\n                let objHeight = obj.height;\n                if (this.between(userPos[0], obj.pos[0], obj.pos[0] + objWidth) &&\n                    this.between(userPos[1], obj.pos[1], obj.pos[1] + objHeight)) {\n                        return[true, \"won\"];\n                    }\n            }else if(objects[i] instanceof EnergyBall){\n                let userObj = this.userObject[0];\n                let dist = Math.sqrt(Math.pow(userPos[0] - obj.pos[0], 2) + Math.pow(userPos[1] - obj.pos[1], 2));\n                if (dist < (userObj.radius + obj.radius)){\n                    return([true, \"lost\"]);\n                }\n            }\n       };\n       return false;\n    }\n\n    between(userPos, objectMin, objectMax){\n        return(userPos >= (objectMin - 5) && userPos <= (objectMax + 5))\n    }\n\n    outOfBounds(){\n        let position = this.userObject[0].pos;\n        if(position[0] >= Game.DIM_X || position[1] >= Game.DIM_Y){\n            return true;\n        }\n        if(position[0] <= 0 || position[1] <= 0){\n            return true;\n        }\n    }\n\n    draw(ctx) {\n        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n        ctx.fillStyle = Game.BG_COLOR;\n        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n        this.allObjects().forEach((object) => {\n            object.draw(ctx);\n        });\n    };\n}\n\nGame.BG_COLOR = \"#000000\";\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.FPS = 32;\n\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst Goal = __webpack_require__(/*! ./goal.js */ \"./src/goal.js\");\nconst Wall = __webpack_require__(/*! ./wall.js */ \"./src/wall.js\");\n\nclass GameView{\n    constructor(ctx, game, scoreCtx){\n        this.ctx = ctx;\n        this.game = game;\n        this.scoreCtx = scoreCtx;\n        this.gameState = false;\n        this.interval = undefined;\n        this.scoreInterval = undefined\n        this.score = 0\n    }\n\n    start(){\n        this.score = 0;\n        this.gameState = true;\n        this.scoreInterval = setInterval(() => {\n            if (this.gameState === true){\n                this.score += 5\n                this.drawScore();\n            }else{\n                clearInterval(this.scoreInterval);\n            }\n        }, 100)\n        this.game.reset(this.ctx);\n        this.game.addObject(this.prompts);\n        // if(interval !== undefined) console.log(true);\n        this.interval = setInterval(() => {\n            console.log(this.score);\n            this.game.draw(this.ctx);\n            this.game.moveObject();\n            if(this.game.outOfBounds()){\n                clearInterval(this.interval);\n                this.gameWon(\"lost\");\n            };\n            const collision = this.game.checkCollisions()\n            if (collision){\n                    clearInterval(this.interval);\n                    this.gameWon(collision[1]);\n                }\n        }, 25);\n    };\n\n    gameWon(state){\n        this.gameState = false;\n        let ctx = this.ctx;\n        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n        ctx.fillStyle = Game.BG_COLOR;\n        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n        ctx.font = \"30px Comic Sans MS\";\n        ctx.fillStyle = \"red\";\n        ctx.textAlign = \"center\";\n        if(state === \"won\"){\n            ctx.fillText(\"Level Completed!\", Game.DIM_X / 2, Game.DIM_Y / 2);\n        }else{\n            clearInterval(this.scoreInterval)\n            ctx.fillText(\"Level Failed!\", Game.DIM_X / 2, Game.DIM_Y / 2);\n        }\n    }\n\n    getUserInput(){\n        var input = document.getElementById(\"user-input\");\n        this.prompts = input.value.split(\",\")\n        if(this.interval !== undefined){\n            clearInterval(this.interval);\n        }\n        this.start();\n    }\n\n    drawScore(){\n        let ctx = this.scoreCtx;\n        ctx.clearRect(0, 0, 200, 150);\n        ctx.fillStyle = \"#000000\";\n        ctx.fillRect(0, 0, 200, 150);\n        ctx.font = \"30px Comic Sans MS\";\n        ctx.fillStyle = \"red\";\n        ctx.textAlign = \"center\";\n        ctx.fillText(this.score, 100, 75)\n    }\n}\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/goal.js":
/*!*********************!*\
  !*** ./src/goal.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Goal extends MovingObject{\n    constructor(variables){\n        super(variables)\n        this.height = variables.height;\n        this.width = variables.width;\n    }\n\n    draw(ctx) {\n        ctx.fillStyle = this.color;\n        ctx.beginPath();\n        ctx.rect(this.pos[0], this.pos[1], this.width, this.height)\n        ctx.fill();\n    }\n}\n\nmodule.exports = Goal;\n\n\n//# sourceURL=webpack:///./src/goal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"webpack is working\")\n//down 1000,right 1000,left 1000,up 1000,right 1000\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\nwindow.MovingObject = MovingObject;\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\")\n    canvas.width = Game.DIM_X;\n    canvas.height = Game.DIM_Y;\n    const ctx = canvas.getContext(\"2d\")\n    const game = new Game();\n    const scoreCanvas = document.getElementById(\"score\")\n    const scoreCtx = scoreCanvas.getContext(\"2d\")\n    scoreCanvas.width = 200;\n    scoreCanvas.height = 100;\n    // let prompts = window.prompt();\n    // prompts = prompts.split(\",\")\n    // let prompts = [\"\"];\n    const gv = new GameView(ctx, game, scoreCtx);\n    document.getElementById(\"user-input-button\").addEventListener(\"click\", () => gv.getUserInput());\n    // gv.start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((module) => {

eval("const level = {\n    1: {\n        userObject: {\n            pos: [30, 30],\n            vel: [ 1, 0],\n            radius: 5,\n            color: \"#FFFFFF\",\n        },\n        walls: [{ pos: [200, 200], vel: [0, 0], color: \"#964B00\", height: 60, width: 20}],\n        goal: { pos: [970, 30], vel: [0, 0], color:'#ff0000', height: 30, width: 30},\n        energyBalls: [{ pos: [600, 30], vel: [0, 0], color: '#0000FF', radius: 10}]\n    },\n}\n\n\n\n\n\nmodule.exports = level;\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\nclass MovingObject {\n    constructor(variables){\n        this.pos = [];\n        this.pos.push(variables.pos[0]);\n        this.pos.push(variables.pos[1]);\n        this.vel = [];\n        this.vel.push(variables.vel[0])\n        this.vel.push(variables.vel[1])\n        this.radius = variables.radius;\n        this.color = variables.color;\n    }\n\n\n    move(){\n        this.pos[0] = this.pos[0] + this.vel[0]\n        this.pos[1] = this.pos[1] + this.vel[1]\n    }\n}\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/user_object.js":
/*!****************************!*\
  !*** ./src/user_object.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nclass UserObject extends MovingObject{\n    constructor(variables){\n        super(variables);\n        this.img1 = new Image();\n        this.img1.src = \"../img/robot1.png\";\n        this.img2 = new Image();\n        this.img2.src = \"../img/robot2.png\";\n        this.currentImg = this.img1;\n        setInterval(() => {\n            this.currentImg === this.img1 ? this.currentImg = this.img2 : this.currentImg = this.img1\n        }, 200)\n    }\n\n    draw(ctx) {\n        // ctx.fillStyle = this.color;\n        // ctx.beginPath();\n        // ctx.arc(\n        //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n        // );\n        // let img = new Image();\n        // img.src = \"../img/robot1.png\";\n        // img.onload = function(){\n        ctx.drawImage(this.currentImg, this.pos[0], this.pos[1], 55, 70)\n        // }\n    }\n\n    readPrompts(n, prompts) {\n        let promptArr = prompts[n].split(\" \");\n        let newVel = [];\n        if (promptArr[0] === \"left\") {\n            newVel = [-5, 0];\n        } else if (promptArr[0] === \"right\") {\n            newVel = [5, 0];\n        } else if (promptArr[0] === \"up\") {\n            newVel = [0, -5];\n        } else {\n            newVel = [0, 5];\n        }\n        this.vel = newVel;\n        if (n < prompts.length - 1) {\n            setTimeout(() => {\n                this.readPrompts(n + 1, prompts)\n            }, parseInt(promptArr[1]));\n        };\n    }\n\n}\n\nmodule.exports = UserObject;\n\n//# sourceURL=webpack:///./src/user_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(ChildClass, ParentClass) {\n        ChildClass.prototype = Object.create(ParentClass.prototype);\n        ChildClass.prototype.constructor = ChildClass;\n    }\n}\n\nmodule.exports = Util\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ }),

/***/ "./src/wall.js":
/*!*********************!*\
  !*** ./src/wall.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nclass Wall extends MovingObject {\n    constructor(variables) {\n        super(variables)\n        this.height = variables.height;\n        this.width = variables.width;\n    }\n\n    draw(ctx) {\n        ctx.fillStyle = this.color;\n        ctx.beginPath();\n        ctx.rect(this.pos[0], this.pos[1], this.width, this.height)\n        ctx.fill();\n    }\n\n}\n\nmodule.exports = Wall;\n\n//# sourceURL=webpack:///./src/wall.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;