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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\nclass Game {\n    constructor(){\n        this.movingObject = []\n    }\n\n    addObject(prompts){\n        const mo = new MovingObject({\n            pos: [30, 30],\n            vel: [ 1, 0],\n            radius: 5,\n            color: \"#FFFFFF\",\n            prompts: prompts,\n        });\n        this.movingObject = mo\n        console.log(\"b4\")\n        this.movingObject.readPrompts(0);\n        console.log(\"after\")\n        return mo\n    }\n\n    moveObject(){\n        this.movingObject.move()\n    }\n\n    draw(ctx) {\n        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n        ctx.fillStyle = Game.BG_COLOR;\n        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n        this.movingObject.draw(ctx);\n    };\n}\n\nGame.BG_COLOR = \"#000000\";\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.FPS = 32;\n\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nclass GameView{\n    constructor(ctx, game, prompts){\n        this.ctx = ctx;\n        this.game = game;\n        this.prompts = prompts;\n        // this.game = game;\n    }\n\n    start(){\n        this.game.addObject(this.prompts);\n        setInterval(() => {\n            this.game.draw(this.ctx);\n            this.game.moveObject();\n        }, 25)\n    }\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"webpack is working\")\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\nwindow.MovingObject = MovingObject;\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\")\n    canvas.width = Game.DIM_X;\n    canvas.height = Game.DIM_Y;\n    const ctx = canvas.getContext(\"2d\")\n    const game = new Game();\n    let prompts = window.prompt();\n    prompts = prompts.split(\",\")\n    new GameView(ctx, game, prompts).start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\nclass MovingObject {\n    constructor(variables){\n        this.pos = variables.pos;\n        this.vel = variables.vel;\n        this.radius = variables.radius;\n        this.color = variables.color;\n        this.prompts = variables.prompts;\n    }\n\n    readPrompts(n){\n        console.log(n)\n        let promptArr = this.prompts[n].split(\" \");\n        let newVel = [];\n        if (promptArr[0] === \"left\") {\n                newVel = [-5, 0];\n            }else if(promptArr[0] === \"right\"){\n                newVel = [5, 0];\n            }else if(promptArr[0] === \"up\"){\n                newVel = [0, -5];\n            }else{\n                newVel = [0, 5];\n            }\n        console.log(newVel);\n        this.vel = newVel;\n        if(n < this.prompts.length - 1){\n            setTimeout(() => {\n                this.readPrompts(n + 1)\n            }, parseInt(promptArr[1]));\n        }''\n        //     this.vel = newVel\n        // while( i < this.prompts.length){\n        //     let promptArr = this.prompts[i].split(\" \");\n        //     let newVel = this.vel;\n        //     if(promptArr[0] === \"left\"){\n        //         newVel = [-1, 0];\n        //     }else if(promptArr[0] === \"right\"){\n        //         newVel = [1, 0];\n        //     }else if(promptArr[0] === \"up\"){\n        //         newVel = [0, 1];\n        //     }else{\n        //         newVel = [0, -1];\n        //     }\n        //     this.vel = newVel\n        //     setTimeout(() => {\n        //         i++\n        //     }, parseInt(promptArr[1]))   \n        // }\n    }\n\n    draw(ctx){\n        ctx.fillStyle = this.color;\n        ctx.beginPath();\n        ctx.arc(\n            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n        );\n        ctx.fill();\n    }\n\n    move(){\n        this.pos[0] = this.pos[0] + this.vel[0]\n        this.pos[1] = this.pos[1] + this.vel[1]\n    }\n\n\n}\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

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