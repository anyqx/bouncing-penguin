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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const food1 = new Image();
food1.src = "assets/images/foods/fish_1.png";
const food2 = new Image();
food2.src = "assets/images/foods/fish_2.png";
const food3 = new Image();
food3.src = "assets/images/foods/fish_3.png";
const food4 = new Image();
food4.src = "assets/images/foods/shrimp.png";
const food5 = new Image();
food5.src = "assets/images/foods/squid.png";
const bubbleBurst = new Image();
bubbleBurst.src = "assets/images/game_over/bubble_burst.png";

class Food {
  constructor(ctx, type, startPos) {
    this.ctx = ctx;
    this.type = type;
    this.startPos = startPos;
    this.size = 5;
    this.angle = 0;
    this.hit = false;
    this.bubbleBurst = bubbleBurst;
    this.bubbleSize = 50;
    if (this.type === "food1") this.food = food1;
    if (this.type === "food2") this.food = food2;
    if (this.type === "food3") this.food = food3;
    if (this.type === "food4") this.food = food4;
    if (this.type === "food5") this.food = food5;
    if (this.startPos === "pos1") this.pos = [440, 50];
    if (this.startPos === "pos2") this.pos = [540, 50];
    if (this.startPos === "pos3") this.pos = [640, 50];
    if (this.startPos === "pos4") this.pos = [740, 50];
    this.centerPos = [this.pos[0] + this.size / 2, this.pos[1] + this.size / 2];
  }

  draw() {
    if (this.hit) {
      this.ctx.save();
      this.ctx.translate(this.pos[0], this.pos[1]); // this.ctx.rotate(Math.PI / 180 * (this.angle += 1));

      this.ctx.drawImage(this.bubbleBurst, -(this.bubbleSize / 2), -(this.bubbleSize / 2), this.bubbleSize, this.bubbleSize);
      this.ctx.translate(-this.pos[0], -this.pos[1]);
      this.ctx.restore();
    } else {
      const bubble = this.ctx.createRadialGradient(this.pos[0], this.pos[1], this.size * 0.3, this.pos[0], this.pos[1], this.size);
      bubble.addColorStop(0, "orange");
      bubble.addColorStop(1, "transparent");
      this.ctx.beginPath();
      this.ctx.arc(this.pos[0], this.pos[1], this.size / 2 * 1.5, 0, 2 * Math.PI);
      this.ctx.strokeStyle = "transparent";
      this.ctx.stroke();
      this.ctx.fillStyle = bubble;
      this.ctx.fill();
      this.ctx.save();
      this.ctx.translate(this.pos[0], this.pos[1]); // this.ctx.rotate(Math.PI / 180 * (this.angle += 3));

      this.ctx.drawImage(this.food, -(this.size / 2), -(this.size / 2), this.size, this.size);
      this.ctx.translate(-this.pos[0], -this.pos[1]);
      this.ctx.restore();
    }
  }

  move() {
    if (this.hit) {
      this.bubbleSize += 6;
      this.pos[1] += 7;

      if (this.startPos === "pos1") {
        this.pos[0] -= 1.0;
      } else if (this.startPos === "pos2") {
        this.pos[0] -= 0.3;
      } else if (this.startPos === "pos3") {
        this.pos[0] += 0.3;
      } else if (this.startPos === "pos4") {
        this.pos[0] += 1.0;
      }
    } else {
      this.size += 0.7;
      this.pos[1] += 7;

      if (this.startPos === "pos1") {
        this.pos[0] -= 2.4;
      } else if (this.startPos === "pos2") {
        this.pos[0] -= 0.6;
      } else if (this.startPos === "pos3") {
        this.pos[0] += 0.8;
      } else if (this.startPos === "pos4") {
        this.pos[0] += 2.4;
      }

      this.centerPos = [this.pos[0] - this.size / 3, this.pos[1] - this.size / 3];
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Food);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trash.js */ "./src/trash.js");
/* harmony import */ var _food_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.js */ "./src/food.js");
/* harmony import */ var _penguin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./penguin.js */ "./src/penguin.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score */ "./src/score.js");





const background = new Image();
background.src = "assets/images/backgrounds/background.jpg"; //not the canvas

const win = new Image();
win.src = "assets/images/text/win.png";
const lose = new Image();
lose.src = "assets/images/text/lose.png";

class Game {
  constructor(ctx, score, endPos) {
    this.ctx = ctx;
    this.score = score;
    this.trashs = [];
    this.foods = [];
    this.home = new _home__WEBPACK_IMPORTED_MODULE_3__.default(ctx, endPos);
    this.penguin = new _penguin_js__WEBPACK_IMPORTED_MODULE_2__.default(ctx);
    this.score = new _score__WEBPACK_IMPORTED_MODULE_4__.default(score);
    this.bg_color = "skyblue";
    this.dim_x = 1200;
    this.dim_y = 700;
    this.background = background;
    this.gameStatus = "playing";
    this.win = win;
    this.lose = lose;
    this.score_x = 800;
    this.score_y = 800;
  } // Trash


  addTrash() {
    const trashs = ["trash1", "trash2"];
    const positions = ["pos1", "pos2", "pos3"];
    const trash = trashs[Math.floor(Math.random() * Math.floor(2))]; //random trash coming out

    const pos = positions[Math.floor(Math.random() * Math.floor(3))];
    this.trashs.push(new _trash_js__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, trash, pos));
  }

  removeTrash() {
    this.trashs.shift();
  }

  drawTrashs() {
    this.trashs.forEach(trash => {
      trash.draw();
    });
  }

  generateTrashs() {
    const addTrash = this.addTrash.bind(this);
    const removeTrash = this.removeTrash.bind(this);
    this.trashInterval = setInterval(() => {
      addTrash();
      setTimeout(() => {
        removeTrash();
      }, 15 * 1000);
    }, 800);
  }

  // Foods
  addFood() {
    const foods = ["food1", "food2", "food3", "food4", "food5"];
    const positions = ["pos1", "pos2", "pos3", "pos4"];
    const food = foods[Math.floor(Math.random() * Math.floor(5))];
    const pos = positions[Math.floor(Math.random() * Math.floor(4))];
    this.foods.push(new _food_js__WEBPACK_IMPORTED_MODULE_1__.default(this.ctx, food, pos));
  }

  removeFood() {
    this.foods.shift();
  }

  drawFoods() {
    this.foods.forEach(food => {
      food.draw();
    });
  }

  generateFoods() {
    const addFood = this.addFood.bind(this);
    const removeFood = this.removeFood.bind(this);
    this.foodInterval = setInterval(() => {
      addFood();
      setTimeout(() => {
        removeFood();
      }, 6000);
    }, 250);
  }

  // Penguin
  movePenguin(moveLeft, moveRight) {
    this.penguin.moveLeft = moveLeft;
    this.penguin.moveRight = moveRight;
  }

  loseCondition() {
    this.gameStatus = "lose";
  }

  winCondition() {
    this.gameStatus = "win";
  }

  checkTrashCollisions() {
    const penguin = this.penguin;
    const trashs = this.trashs;
    const score = this.score;
    const loseCondition = this.loseCondition.bind(this);

    for (let i = 0; i < trashs.length; i++) {
      const trash = trashs[i];

      if (penguin.isCollidedWith(trash)) {
        trash.hit = true;

        if (score.currentScore > 0) {
          score.currentScore -= 5;
        } else {
          setTimeout(() => {
            loseCondition();
          }, 1000);
        }
      }
    }
  }

  checkFoodCollisions() {
    const penguin = this.penguin;
    const foods = this.foods;
    const score = this.score;

    for (let i = 0; i < foods.length; i++) {
      const food = foods[i];

      if (penguin.isCollidedWith(food)) {
        food.hit = true;

        if (score.currentScore < 2000) {
          score.currentScore += 5;
        } else {
          setTimeout(() => {
            winCondition();
          }, 3000);
        }
      }
    }
  }

  checkHomeCollision() {
    const penguin = this.penguin;
    const score = this.score;
    const home = this.home;
    const winCondition = this.winCondition.bind(this);
    const loseCondition = this.loseCondition.bind(this);

    if (penguin.isCollidedWith(home)) {
      penguin.hit = true;

      if (score.currentScore > 0) {
        home.hit = true;
        setTimeout(() => {
          winCondition();
        }, 3000);
      } else {
        setTimeout(() => {
          loseCondition();
        }, 3000);
      }
    }
  }

  checkCurrentScore() {
    const score = this.score;
    const loseCondition = this.loseCondition.bind(this);

    if (score.currentScore < 0) {
      this.clearObjects();
      setTimeout(() => {
        loseCondition();
      }, 3000);
    }
  } // Animation


  clearObjects() {
    clearInterval(this.trashInterval);
    clearInterval(this.foodInterval);
  }

  draw(ctx, score) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    ctx.fillStyle = this.bg_color;
    ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    ctx.drawImage(this.background, 0, 0, this.dim_x, this.dim_y);
    score.clearRect(0, 0, this.score_x, this.score_y);
    score.fillStyle = this.bg_color;
    score.fillRect(0, 0, this.score_x, this.score_y);
    this.score.draw();
    this.drawTrashs();
    this.drawFoods();

    if (this.gameStatus === "playing") {
      this.penguin.draw();
    } else if (this.gameStatus === "ending") {
      this.home.draw();
      this.penguin.draw();
    } else if (this.gameStatus === "lose") {
      ctx.drawImage(this.lose, 200, 100, 700, 500);
    } else if (this.gameStatus === "win") {
      ctx.drawImage(this.win, 200, 100, 700, 500);
    }
  }

  step() {
    this.penguin.move();
    this.foods.forEach(food => {
      if (food) {
        food.move();
      }
    });
    this.trashs.forEach(trash => {
      if (trash) {
        trash.move();
      }
    });
    this.checkCurrentScore();
    this.checkTrashCollisions();
    this.checkFoodCollisions();

    if (this.gameStatus === "ending") {
      this.penguin.move();
      this.home.move();
      this.checkHomeCollision();
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

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
  constructor(game, ctx, score) {
    this.ctx = ctx;
    this.game = game;
    this.score = score;
  }

  generateObjects() {
    this.game.generateTrashs(this.ctx);
    this.game.generateFoods(this.ctx);
  }

  finalPhase() {
    if (this.game.gameStatus === "playing") {
      this.game.clearObjects();
      this.game.gameStatus = "ending";
    }
  }

  checkMiss() {
    if (this.game.gameStatus === "ending") {
      this.game.gameStatus = "lose";
    }
  }

  start() {
    const generateObjects = this.generateObjects.bind(this);
    const finalPhase = this.finalPhase.bind(this);
    const checkMiss = this.checkMiss.bind(this);
    setTimeout(() => {
      generateObjects();
    }, 15 * 10);
    setTimeout(() => {
      finalPhase(); //win how long game lasts
    }, 15 * 1000);
    setTimeout(() => {
      checkMiss();
    }, 10 * 10);
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.game.step();
    this.game.draw(this.ctx, this.score);
    requestAnimationFrame(this.animate.bind(this));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const home = new Image();
home.src = "assets/images/home/ice_cave.png";
const bubbleBurst = new Image();
bubbleBurst.src = "assets/images/home/ice_cave.png";

class Home {
  constructor(ctx, endPos) {
    this.ctx = ctx;
    this.endPos = endPos;
    this.size = 5;
    this.hit = false;
    this.bubbleBurst = bubbleBurst;
    this.bubbleSize = 30;
    this.home = home;
    if (this.endPos === "endPos1") this.pos = [360, 100];
    if (this.endPos === "endPos2") this.pos = [360, 100];
  }

  draw() {
    if (this.hit) {
      this.ctx.drawImage(this.bubbleBurst, this.pos[0] + 30, this.pos[1] + 40, this.bubbleSize, this.bubbleSize);
    } else {
      this.ctx.drawImage(this.home, this.pos[0], this.pos[1], this.size, this.size);
    }
  }

  move() {
    if (this.hit) {
      this.bubbleSize += 10;
      this.pos[0] -= 10;
      this.pos[1] -= 10;
    } else {
      this.size += 1.0;
      this.pos[1] += 2;
      if (this.endPos === "endPos1") this.pos[0] += 1;
      if (this.endPos === "endPos2") this.pos[0] -= 1.2;
      this.centerPos = [this.pos[0] + this.size / 3, this.pos[1] + this.size / 3];
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/penguin.js":
/*!************************!*\
  !*** ./src/penguin.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const penguin = new Image();
penguin.src = "assets/images/penguin/penguin_1.png";

class Penguin {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = [550, 540];
    this.penguin = penguin;
    this.dim_x = 100; //penguin-size

    this.dim_y = 100;
    this.speed = 5;
    this.moveLeft = false;
    this.moveRight = false;
    this.radius = 5;
    this.centerPos = [573.5, 580];
    this.cbPos = [350, 550];
    this.cbDims = [500, 500];
    this.hit = false;
  }

  draw() {
    if (!this.hit) {
      this.ctx.drawImage(this.penguin, this.pos[0], this.pos[1], this.dim_x, this.dim_y);
    }
  }

  move() {
    if (this.moveLeft && this.pos[0] > -35) {
      this.pos[0] -= this.speed;
      this.centerPos[0] -= this.speed;
      this.cbPos[0] -= this.speed;
    } else if (this.moveRight && this.pos[0] < 1140) {
      this.pos[0] += this.speed;
      this.centerPos[0] += this.speed;
      this.cbPos[0] += this.speed;
    }
  }

  dist(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
  }

  isCollidedWith(otherObject) {
    const centerDist = this.dist(this.centerPos, otherObject.centerPos);
    return centerDist < this.radius + otherObject.size / 2 * 0.8;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Penguin);

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Score {
  constructor(score) {
    this.score = score;
    this.currentScore = 0;
  } //draw on Canvas


  draw() {
    this.score.beginPath();
    this.score.font = '22px Itim cursive';
    this.score.fillStyle = 'rgb(255,107,107)';
    this.score.fillText("SCORE: " + this.currentScore, 50, 20);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);

/***/ }),

/***/ "./src/trash.js":
/*!**********************!*\
  !*** ./src/trash.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const trash1 = new Image();
trash1.src = "assets/images/trash/plastic_bag.png";
const trash2 = new Image();
trash2.src = "assets/images/trash/pop.png";
const bubbleBurst = new Image();
bubbleBurst.src = "assets/images/game_over/bubble_burst.png";

class Trash {
  constructor(ctx, type, startPos) {
    this.ctx = ctx;
    this.type = type;
    this.startPos = startPos;
    this.size = 5;
    this.hit = false;
    this.bubbleBurst = bubbleBurst;
    this.bubbleSize = 20;
    if (this.type === "trash1") this.trash = trash1;
    if (this.type === "trash2") this.trash = trash2;
    if (this.startPos === "pos1") this.pos = [200, 50];
    if (this.startPos === "pos2") this.pos = [400, 50];
    if (this.startPos === "pos3") this.pos = [800, 50];
    this.centerPos = [this.pos[0] + this.size / 2, this.pos[1] + this.size / 2];
  }

  draw() {
    if (this.hit) {
      this.ctx.drawImage(this.bubbleBurst, this.pos[0] + 5, this.pos[1] + 5, this.bubbleSize, this.bubbleSize);
    } else {
      const bubble = this.ctx.createRadialGradient(this.pos[0] + this.size / 2, this.pos[1] + this.size / 2, this.size * 0.3, this.pos[0] + this.size / 2, this.pos[1] + this.size / 2, this.size * 1.0);
      bubble.addColorStop(0, "lightblue");
      bubble.addColorStop(1, "transparent");
      this.ctx.beginPath();
      this.ctx.arc(this.pos[0] + this.size / 2, this.pos[1] + this.size / 2, this.size / 2 * 1.3, 0, 2 * Math.PI);
      this.ctx.strokeStyle = "transparent";
      this.ctx.stroke();
      this.ctx.fillStyle = bubble;
      this.ctx.fill();
      this.ctx.drawImage(this.trash, this.pos[0], this.pos[1], this.size, this.size);
    }
  }

  move() {
    if (this.hit) {
      this.bubbleSize += 6;
      this.pos[0] -= 5;
      this.pos[1] -= 5;
    } else {
      this.size += 1.2;
      this.pos[1] += 4.5;

      if (this.startPos === "pos1") {
        this.pos[0] -= 1.;
      } else if (this.startPos === "pos2") {
        this.pos[0] -= 0.3;
      } else if (this.startPos === "pos3") {
        this.pos[0] += 0.4;
      }

      this.centerPos = [this.pos[0] + this.size / 3, this.pos[1] + this.size / 3];
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trash);

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
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view.js */ "./src/game_view.js");


document.addEventListener("DOMContentLoaded", () => {
  const scoreCanvas = document.getElementById("score-canvas");
  const score = scoreCanvas.getContext("2d");
  const gameCanvas = document.getElementById("game-canvas");
  const ctx = gameCanvas.getContext("2d");
  const music = new Audio("assets/audio/music.mp3");
  const directions = document.getElementById("directions-modal");
  const directionsBtn = document.getElementById("directions-btn");
  const close = document.getElementById("close-modal");
  const mute = document.getElementById("mute-symbol");
  directionsBtn.addEventListener("click", () => {
    if (directions.style.display !== "block") {
      directions.style.display = "block";
    } else {
      directions.style.display = "none";
    }
  });
  close.addEventListener("click", () => {
    directions.style.display = "none";
  });
  document.getElementById("audio-btn").addEventListener("click", () => {
    if (music.muted) {
      music.muted = false;
      mute.innerHTML = "&#x1f50a;";
    } else {
      music.muted = true;
      mute.innerHTML = "&#x1f507;";
    }
  });
  document.getElementById("play-btn").addEventListener("click", () => {
    const endPositions = ["endPos1", "endPos2"];
    const endPos = endPositions[Math.floor(Math.random() * Math.floor(2))];
    const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__.default(ctx, score, endPos);
    new _game_view_js__WEBPACK_IMPORTED_MODULE_1__.default(game, ctx, score).start();
    music.currentTime = 0;
    music.play();
    let moveLeft = false;
    let moveRight = false;
    document.addEventListener("keydown", event => {
      if (event.code === "ArrowLeft") {
        moveLeft = true;
        game.movePenguin(moveLeft, moveRight);
      } else if (event.code === "ArrowRight") {
        moveRight = true;
        game.movePenguin(moveLeft, moveRight);
      }
    });
    document.addEventListener("keyup", event => {
      if (event.code === "ArrowLeft") {
        moveLeft = false;
        game.movePenguin(moveLeft, moveRight);
      } else if (event.code === "ArrowRight") {
        moveRight = false;
        game.movePenguin(moveLeft, moveRight);
      }
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map