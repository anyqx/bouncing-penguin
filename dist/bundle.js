/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BouncingPenguin)
/* harmony export */ });
/* harmony import */ var _penguin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penguin */ "./src/penguin.js");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ "./src/level.js");
//main class, logic, create the other classes, tell the other 
//classes when to render


class BouncingPenguin {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = {
      width: canvas.width,
      height: canvas.height
    };
    this.eventsHandler();
    this.restart();
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
      this.play();
    }

    this.penguin.jump();
  }

  play() {
    this.running = false;
    this.animate();
  }

  restart() {
    this.running = true;
    this.score = 0;
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
    this.ctx.fillText(`SCORE: ${this.score}`, 250, 30);
  }

}

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

    ctx.drawImage(gameboard, 10, 10, this.dimensions.width, this.dimensions.height);
  }

}

/***/ }),

/***/ "./src/penguin.js":
/*!************************!*\
  !*** ./src/penguin.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Penguin)
/* harmony export */ });
const CONSTANTS = {
  PENGUIN_HEIGHT: 40
};
class Penguin {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.x1 = this.dimensions.width / 3; //left top penguin

    this.y1 = this.dimensions.height / 4;
    this.x2 = this.dimensions.width / 3 * 2; // right bottom penguin

    this.y2 = this.dimensions.height / 4 * 3;
    this.velocity = 2;
  }

  animate(ctx) {
    this.drawPenguin(ctx);
    this.movePenguin();
  }

  movePenguin() {
    // this.x += this.velocity;
    // debugger
    this.y1 += this.velocity;
    this.y2 -= this.velocity; // this.y1 = this.y2;
    // this.width = 0;
  }

  stop() {
    this.width = 5;
  }

  drawPenguin(ctx) {
    const penguin_left = new Image();
    const penguin_right = new Image();
    penguin_left.src = 'src/assets/penguin_2.png';
    penguin_right.src = 'src/assets/penguin_1.png';
    ctx.drawImage(penguin_left, this.x1, this.y1, 100, 100); //position, size

    ctx.drawImage(penguin_right, this.x2, this.y2, 120, 120);
  }

}

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ (() => {



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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_1__);

 // // check to see if it's connected
// alert('connected!')

const canvas = document.getElementById('penguin-game');
new _game__WEBPACK_IMPORTED_MODULE_0__.default(canvas);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map