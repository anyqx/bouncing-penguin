/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fish1": () => (/* binding */ Fish1),
/* harmony export */   "Fish2": () => (/* binding */ Fish2),
/* harmony export */   "Fish3": () => (/* binding */ Fish3),
/* harmony export */   "Shrimp": () => (/* binding */ Shrimp),
/* harmony export */   "Squid": () => (/* binding */ Squid)
/* harmony export */ });
class Food {
  // fish1, fish2, fish3, shrimp, squid
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.x = this.dimensions.width;
    this.y = this.dimensions.height;
  }

  move() {
    this.x -= this.velocity;
  }

}

class Fish1 extends Food {
  constructor(dimensions) {
    super(dimensions);
    this.height = 130;
    this.width = 130;
    this.velocity = 5;
  }

  drawFish1(ctx) {
    const fish1 = new Image();
    fish1.src = 'src/fish1.png';
    ctx.drawImage(fish1, this.x, this.y - 150, this.width, this.height);
  }

  animate(ctx) {
    this.move();
    this.drawFish1(ctx);
  }

}

class Fish2 extends Food {
  constructor(dimensions) {
    super(dimensions);
    this.height = 130;
    this.width = 130;
    this.velocity = 5;
  }

  drawFish2(ctx) {
    const fish2 = new Image();
    fish2.src = 'src/fish2.png';
    ctx.drawImage(fish2, this.x, this.y - 150, this.width, this.height);
  }

  animate(ctx) {
    this.move();
    this.drawFish2(ctx);
  }

}

class Fish3 extends Food {
  constructor(dimensions) {
    super(dimensions);
    this.height = 130;
    this.width = 130;
    this.velocity = 5;
  }

  drawFish3(ctx) {
    const fish3 = new Image();
    fish3.src = 'src/fish3.png';
    ctx.drawImage(fish3, this.x, this.y - 150, this.width, this.height);
  }

  animate(ctx) {
    this.move();
    this.drawFish3(ctx);
  }

}

class Shrimp extends Food {
  constructor(dimensions) {
    super(dimensions);
    this.height = 100;
    this.width = 100;
    this.velocity = 5;
  }

  drawShrimp(ctx) {
    const shrimp = new Image();
    shrimp.src = 'src/shrimp.png';
    ctx.drawImage(shrimp, this.x, this.y - 150, this.width, this.height);
  }

  animate(ctx) {
    this.move();
    this.drawShrimp(ctx);
  }

}

class Squid extends Food {
  constructor(dimensions) {
    super(dimensions);
    this.height = 100;
    this.width = 100;
    this.velocity = 5;
  }

  drawSquid(ctx) {
    const squid = new Image();
    squid.src = 'src/squid.png';
    ctx.drawImage(squid, this.x, this.y - 150, this.width, this.height);
  }

  animate(ctx) {
    this.move();
    this.drawSquid(ctx);
  }

}



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BouncingPenguin)
/* harmony export */ });
/* harmony import */ var _penguin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penguin */ "./src/penguin.js");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ "./src/level.js");
/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obstacles */ "./src/obstacles.js");
/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food */ "./src/food.js");
//main class, logic, create the other classes, tell the other 
//classes when to render




class BouncingPenguin {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = {
      width: canvas.width,
      height: canvas.height
    };
    this.frame = 0;
    this.eventsHandler(); // this.restart();

    this.score = 0;
  }

  eventsHandler() {
    this.spaceBarHandler = this.spaceDown.bind(this);
    window.addEventListener('keydown', e => {
      if (e.code === 'Space') {
        this.spaceBarHandler();
      }
    });
  }

  spaceDown() {
    if (!this.running) {
      this.restart();
    }

    this.penguin.hasJumped = false;
    this.penguin.animate(this.ctx);
  }

  play() {
    // this.running = true;
    this.penguin.drawPenguin();
  }

  restart() {
    this.running = true;
    this.score = 0; // this.frame = 0;

    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions);
    this.penguin = new _penguin__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions);
    this.animate();
  }

  animate() {
    this.level.animate(this.ctx);
    this.penguin.animate(this.ctx);
    this.drawScore();
    requestAnimationFrame(this.animate.bind(this));
  }

  drawScore() {
    // const location = {x: this.dimensions.width / 2, y: this.dimensions.height / 5}
    // this.ctx.fillText(this.score, location.x, location.y); 
    this.ctx.fillText(`SCORE: ${this.score}`, this.dimensions.height / 2, this.dimensions.width / 10);
  }

}

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Level)
/* harmony export */ });
//draw background and moving penguin food and letters(if time allows)
class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  animate(ctx) {
    this.drawBackground(ctx);
  }

  drawBackground(ctx) {
    const gameboard = new Image();
    gameboard.src = 'src/assets/sea_background.jpg'; // gameboard.onload = () => ctx.drawImage(gameboard, 10, 10, this.dimensions.width, this.dimensions.height)

    ctx.drawImage(gameboard, 0, 0, this.dimensions.width, this.dimensions.height);
  }

}

/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plastic": () => (/* binding */ Plastic),
/* harmony export */   "Pop": () => (/* binding */ Pop)
/* harmony export */ });
class Obstacles {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.x = this.dimensions.width;
    this.y = this.dimensions.height;
  }

  move() {
    this.x -= this.velocity;
  }

}

class Plastic extends Obstacles {
  constructor(dimensions) {
    super(dimensions);
    this.height = 100;
    this.width = 110;
    this.velocity = Math.floor(Math.random() * 3) + 1;
  }

  drawPlastic(ctx) {
    const plastic = new Image();
    plastic.src = 'src/plastic_bag.png';
    ctx.drawImage(plastic, this.x, this.y - 150, this.width, this.height);
  }

  animate(ctx) {
    this.move();
    this.drawPlastic(ctx);
  }

}

class Pop extends Obstacles {
  constructor(dimensions) {
    super(dimensions);
    this.height = 130;
    this.width = 130;
    this.velocity = 5;
  }

  drawPop(ctx) {
    const pop = new Image();
    pop.src = 'src/pop.png';
    ctx.drawImage(pop, this.x, this.y - 150, this.width, this.height);
  }

  animate(ctx) {
    this.move();
    this.drawPop(ctx);
  }

}



/***/ }),

/***/ "./src/penguin.js":
/*!************************!*\
  !*** ./src/penguin.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Penguin)
/* harmony export */ });
const CONSTANTS = {
  PENGUIN_UPPER_HEIGHT: 40,
  PENGUIN_LOWER_HEIGHT: 20
};
class Penguin {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.x1 = this.dimensions.width / 3; //left top penguin

    this.y1 = this.dimensions.height / 4;
    this.x2 = this.dimensions.width / 3 * 2; //right bottom penguin

    this.y2 = this.dimensions.height / 4 * 3;
    this.velocity = 2;
    this.isAtBottom = false;
    this.hasJumped = false;
  }

  animate(ctx) {
    if (this.hasJumped === false) {
      this.move();
    } // ((this.y1 < this.dimensions.height / 4) ||  (this.y1 < this.dimensions.height / 4 * 3)) {
    //     this.move();
    // } 


    this.drawPenguin(ctx);
  }

  move() {
    if (this.isAtBottom) {
      if (this.y1 < 139) {
        this.hasJumped = true;
        this.isAtBottom = false;
      }

      this.y1 -= this.velocity;
      this.y2 += this.velocity;
    } else {
      if (this.y1 > 409) {
        this.isAtBottom = true;
      }

      console.log('y1:' + this.y1, 'y2:' + this.y2, 'velocity' + this.velocity);
      this.y1 += this.velocity;
      this.y2 -= this.velocity;
    }
  }

  drawPenguin(ctx) {
    const penguin_left = new Image();
    const penguin_right = new Image();
    penguin_left.src = 'src/assets/penguin_2.png';
    penguin_right.src = 'src/assets/penguin_1.png';
    ctx.drawImage(penguin_left, this.x1, this.y1, 100, 100); //position, penguin size

    ctx.drawImage(penguin_right, this.x2, this.y2, 130, 110);
  }

}

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
 // // check to see if it's connected
// alert('connected!')

const canvas = document.getElementById('penguin-game');
new _game__WEBPACK_IMPORTED_MODULE_0__.default(canvas);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map