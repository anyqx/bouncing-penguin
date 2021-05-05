import Food from './food';
import Obstables from './obstables.js';
import Penguin from './penguin.js';
import ScoreBar from './scorebar';

const bgGame = new Image();
bgGame.src = "assets/images/backgrounds/game_bg.jpg";
const win = new Image();
win.src = "assets/images/text/win.png"
const lose = new Image();
lose.src = "assets/images/text/lose.png"

class Game {
  constructor(ctx, scoreBar, endPos) {
    this.ctx = ctx;
    this.scoreBar = scoreBar;
    this.foods = [];
    this.obstacles = [];
    this.penguin= new Penguin(ctx);
    this.scoreBar = new ScoreBar(scoreBar);
    this.bg_color = "#000000";
    this.dim_x = 1200;
    this.dim_y = 700;
    this.bgGame = bgGame;
    this.gameStatus = "playing";
    this.win = win;
    this.lose = lose;
    this.bar_x = 75;
    this.bar_y = 700;
  }


  // Food

  addFood() {
    const foods = [
      "food1", 
      "food2", 
      "food3",
      "food4",
      "food5"
    ];
    const positions = ["pos1", "pos2", "pos3"];
    const foods = foods[Math.floor(Math.random() * Math.floor(5))] //random planet coming out
    const pos = positions[Math.floor(Math.random() * Math.floor(3))];
    this.foods.push(new Food(this.ctx, food, pos));
  }

  removeFood() {
    this.food.shift();
  }

  drawFood() {
    this.foods.forEach(food => {
      food.draw();
    });
  }

  generateFood() {

    const addFood = this.addFood.bind(this);
    const removeFood = this.removeFood.bind(this);
    this.foodIntervalId = setInterval( () => {

      addFood();

      setTimeout(() => {
        removeFood();
      }, 15 * 1000)
    }, 800);
  };

  // Obstacles

  addAsteroid() {
    const asteroids = [
      "asteroid1",
      "asteroid2",
      "asteroid3",
      "asteroid4",
      "asteroid5",
      "asteroid6"
    ];
    const positions = ["pos1", "pos2", "pos3", "pos4"];
    const asteroid = asteroids[Math.floor(Math.random() * Math.floor(6))]
    const pos = positions[Math.floor(Math.random() * Math.floor(4))];
    this.asteroids.push(new Asteroid(this.ctx, asteroid, pos));
  }

  removeAsteroid() {
    this.asteroids.shift();
  }

  drawAsteroids() {
    this.asteroids.forEach(asteroid => {
      asteroid.draw();
    });
  }

  generateAsteroids() {

    const addAsteroid = this.addAsteroid.bind(this);
    const removeAsteroid = this.removeAsteroid.bind(this);
    this.asteroidIntervalId = setInterval(function () { 

      addAsteroid();

      setTimeout(function () {
        removeAsteroid();
      }, 6000)
    }, 250);
  };

  // Bolt

  moveBolt(moveLeft, moveRight) {
    this.bolt.moveLeft = moveLeft;
    this.bolt.moveRight = moveRight;
  }

  loseConditionOne() {
    this.gameStatus = "loseOne";
  }

  loseConditionTwo() {
    this.gameStatus = "loseTwo";
  }

  winCondition() {
    this.gameStatus = "victory";
  }

  // Collisions

  checkFoodCollisions() {
    const penguin = this.penguin;
    const foods = this.foods;
    const loseConditionOne = this.loseConditionOne.bind(this);

    for (let i = 0; i < foods.length; i++) {
      const food = foods[i]

      if (penguin.isCollidedWith(food)) {
        food.hit = true;
        penguin.hit = true;
        clearInterval(this.starIntervalId);
        clearInterval(this.planetIntervalId);
        clearInterval(this.asteroidIntervalId);
        this.planets = [planet];
        this.stars = [];
        this.asteroids = [];
        setTimeout(function () {
          loseConditionOne();
        }, 3000)
      }
    }
  }

  checkAsteroidCollisions() {
    const bolt = this.bolt;
    const asteroids = this.asteroids;
    const energy = this.energy;

    for (let i = 0; i < asteroids.length; i++) {
      const asteroid = asteroids[i]

      if (bolt.isCollidedWith(asteroid)) {
        asteroid.hit = true;
        if (energy.energyTop < 675) energy.energyTop += 5;
        if (energy.energyLevel > 0) energy.energyLevel -= 5;
      }
    }
  }

  checkEarthCollision() {
    const bolt = this.bolt;
    const earth = this.earth;
    const loseConditionTwo = this.loseConditionTwo.bind(this);

    if (bolt.isCollidedWith(earth)) {
      earth.hit = true;
      bolt.hit = true;
      setTimeout(function () {
        loseConditionTwo();
      }, 3000)
    }
  }

  checkMurderMoonCollision() {
    const bolt = this.bolt;
    const energy = this.energy;
    const murderMoon = this.murderMoon;
    const winCondition = this.winCondition.bind(this);
    const loseConditionOne = this.loseConditionOne.bind(this);

    if (bolt.isCollidedWith(murderMoon)) {
      bolt.hit = true;
      if (energy.energyLevel > 0) {
        murderMoon.hit = true;
        setTimeout(function () {
          winCondition();
        }, 3000)
      } else {
        setTimeout(function () {
          loseConditionOne();
        }, 3000)
      }
    }
  }

  checkEnergyLevel() {
    const energy = this.energy;
    const loseConditionOne = this.loseConditionOne.bind(this);

    if (energy.energyLevel < 1) {
      this.stopObjects();
      setTimeout(function () {
        loseConditionOne();
      }, 3000)
    }
  }

  // Animation

  stopObjects() {
    clearInterval(this.starIntervalId);
    clearInterval(this.planetIntervalId);
    clearInterval(this.asteroidIntervalId);
  }

  draw(ctx, eBar) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    ctx.fillStyle = this.bg_color;
    ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    ctx.drawImage(this.bgGame, 0, 0, this.dim_x, this.dim_y);
    eBar.clearRect(0, 0, this.bar_x, this.bar_y);
    eBar.fillStyle = this.bg_color;
    eBar.fillRect(0, 0, this.bar_x, this.bar_y)
    this.energy.draw();
    this.drawStars();
    this.drawPlanets();
    this.drawAsteroids();

    if (this.gameStatus === "playing") {
      this.bolt.draw();
    } else if (this.gameStatus === "ending") {
      this.earth.draw();
      this.murderMoon.draw();
      this.bolt.draw();
    } else if (this.gameStatus === "loseOne") {
      ctx.drawImage(
        this.lose,
        252,
        295.5
      )
    } else if (this.gameStatus === "loseTwo") {
      ctx.drawImage(
        this.lose,
        252,
        295.5
      )
    } else if (this.gameStatus === "victory") {
      ctx.drawImage(
        this.win,
        253.5,
        321
      )
    }
  };

  step() {
    this.bolt.move();

    this.asteroids.forEach(asteroid => {
      if (asteroid) {
        asteroid.move();
      }
    });

    this.planets.forEach(planet => {
      if (planet) {
        planet.move();
      }
    });

    this.stars.forEach(star => {
      if (star) {
        star.move();
      }
    });

    this.checkEnergyLevel();
    this.checkStarCollisions();
    this.checkPlanetCollisions();
    this.checkAsteroidCollisions();

    if (this.gameStatus === "ending") {
      this.bolt.move();
      this.murderMoon.move();
      this.earth.move();

      this.checkEarthCollision();
      this.checkMurderMoonCollision();
    }
  }

}

export default Game;