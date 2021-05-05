/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class GameView {
  constructor(game, ctx, eBar) {
    this.ctx = ctx;
    this.game = game;
    this.eBar = eBar;
  }

  generateObjects() {
    this.game.generateStars(this.ctx);
    this.game.generatePlanets(this.ctx);
    this.game.generateAsteroids(this.ctx);
  }

  fireCrossbow() {
    this.game.bolt.crossbowStatus = "shooting";
  }

  removeCrossbow() {
    this.game.bolt.crossbowStatus = "fired";
  }

  finalPhase() {
    if (this.game.gameStatus === "playing") {
      this.game.stopObjects();
      this.game.gameStatus = "ending";
    }
  }

  checkMiss() {
    if (this.game.gameStatus === "ending") {
      this.game.gameStatus = "loseOne";
    }
  }

  start() {
    const generateObjects = this.generateObjects.bind(this);
    const finalPhase = this.finalPhase.bind(this);
    const fireCrossbow = this.fireCrossbow.bind(this);
    const removeCrossbow = this.removeCrossbow.bind(this);
    const checkMiss = this.checkMiss.bind(this);
    setTimeout(() => {
      generateObjects();
      fireCrossbow();
    }, 14 * 10);
    setTimeout(() => {
      removeCrossbow();
    }, 16 * 10);
    setTimeout(() => {
      finalPhase();
    }, 93 * 1000);
    setTimeout(() => {
      checkMiss();
    }, 100 * 1000);
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.game.step();
    this.game.draw(this.ctx, this.eBar);
    requestAnimationFrame(this.animate.bind(this));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);

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
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view.js */ "./src/game_view.js");
// import Game from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementsByClassName("game-canvas")[0];
  gameCanvas.width = 1200;
  gameCanvas.height = 700;
  const ctx = gameCanvas.getContext("2d");
  const scoreCanvas = document.getElementsByClassName("score-canvas")[0];
  scoreCanvas.width = 75;
  scoreCanvas.height = 700;
  const scoreBar = scoreCanvas.getContext("2d"); //   const wto = new Audio("assets/audio/")
  //   const directions = document.getElementById("directions-modal");
  //   const directionsBtn = document.getElementById("directions-btn");
  //   const close = document.getElementById("close-modal");
  //   const mute = document.getElementById("mute-symbol");
  //   directionsBtn.addEventListener("click", () => {
  //     if (directions.style.display !== "block") {
  //       directions.style.display = "block";
  //     } else {
  //       directions.style.display = "none";
  //     }
  //   });
  //   close.addEventListener("click", () => {
  //     directions.style.display = "none";
  //   });
  //   document.getElementById("audio-btn").addEventListener("click", () => {
  //     if (wto.muted) {
  //       wto.muted = false;
  //       mute.innerHTML = "&#x1f50a;"
  //     } else {
  //       wto.muted = true;
  //       mute.innerHTML = "&#x1f507;"
  //     }
  //   });
  //   document.getElementById("play-btn").addEventListener("click", () => {
  //     const endPositions = ["endPos1", "endPos2"]
  //     const endPos = endPositions[Math.floor(Math.random() * Math.floor(2))];
  //     const game = new Game(ctx, eBar, endPos);
  //     new GameView(game, ctx, eBar).start();
  //     wto.currentTime = 0;
  //     wto.play();
  //     let moveLeft = false;
  //     let moveRight = false;
  //     document.addEventListener("keydown", event => {
  //       if (event.code === "ArrowLeft") {
  //         moveLeft = true;
  //         game.moveBolt(moveLeft, moveRight);
  //       } else if (event.code === "ArrowRight") {
  //         moveRight = true;
  //         game.moveBolt(moveLeft, moveRight);
  //       }
  //     });
  //     document.addEventListener("keyup", event => {
  //       if (event.code === "ArrowLeft") {
  //         moveLeft = false;
  //         game.moveBolt(moveLeft, moveRight);
  //       } else if (event.code === "ArrowRight") {
  //         moveRight = false;
  //         game.moveBolt(moveLeft, moveRight);
  //       }
  //     });
  //   });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map