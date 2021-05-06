import Trash from './trash.js';
import Food from './food.js';
import Penguin from './penguin.js';
import Home from './home';
import Score from './score';

const bgGame = new Image();
bgGame.src = "assets/images/backgrounds/background.jpg";
const win = new Image();
win.src = "assets/images/text/win.png"
const lose = new Image();
lose.src = "assets/images/text/lose.png"

class Game {
  constructor(ctx, eBar, endPos) {
    this.ctx = ctx;
    this.eBar = eBar;
    this.trashs = [];
    this.foods = [];
    this.home = new Home(ctx, endPos);
    this.penguin = new Penguin(ctx);
    this.score = new Score(eBar);
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


  // Trash

  addTrash() {
    const trashs = [
      "trash1", 
      "trash2"
    ];
    const positions = ["pos1", "pos2", "pos3"];
    const trash = trashs[Math.floor(Math.random() * Math.floor(2))] //random trash coming out
    const pos = positions[Math.floor(Math.random() * Math.floor(3))];
    this.trashs.push(new Trash(this.ctx, trash, pos));
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
    this.trashIntervalId = setInterval( () => {

      addTrash();

      setTimeout( () => {
        removeTrash();
      }, 15 * 1000)
    }, 800);
  };

  // Foods

  addFood() {
    const foods = [
      "food1",
      "food2",
      "food3",
      "food4",
      "food5"
    ];
    const positions = ["pos1", "pos2", "pos3", "pos4"];
    const food = foods[Math.floor(Math.random() * Math.floor(5))]
    const pos = positions[Math.floor(Math.random() * Math.floor(4))];
    this.foods.push(new Food(this.ctx, food, pos));
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
    this.foodIntervalId = setInterval(() => { 

      addFood();

      setTimeout( () => {
        removeFood();
      }, 6000)
    }, 250);
  };

  // Penguin

  movePenguin(moveLeft, moveRight) {
    this.penguin.moveLeft = moveLeft;
    this.penguin.moveRight = moveRight;
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

  checkTrashCollisions() {
    const penguin = this.penguin;
    const trashs = this.trashs;
    const loseConditionOne = this.loseConditionOne.bind(this);

    for (let i = 0; i < trashs.length; i++) {
      const trash = trashs[i]

      if (penguin.isCollidedWith(trash)) {
        trash.hit = true;
        penguin.hit = true;
        // clearInterval(this.starIntervalId);
        clearInterval(this.trashIntervalId);
        clearInterval(this.foodIntervalId);
        this.trashs = [trash];
        // this.stars = [];
        this.foods = [];
        setTimeout( () => {
          loseConditionOne();
        }, 3000)
      }
    }
  }

  checkFoodCollisions() {
    const penguin = this.penguin;
    const foods = this.foods;
    const score = this.score;

    for (let i = 0; i < foods.length; i++) {
      const food = foods[i]

      if (penguin.isCollidedWith(food)) {
        food.hit = true;
        if (score.scoreTop < 675) score.scoreTop += 5;
        if (score.scoreLevel > 0) score.scoreLevel -= 5;
      }
    }
  }


  checkHomeCollision() {
    const penguin = this.penguin;
    const score = this.score;
    const home = this.home;
    const winCondition = this.winCondition.bind(this);
    const loseConditionOne = this.loseConditionOne.bind(this);

    if (penguin.isCollidedWith(home)) {
      penguin.hit = true;
      if (score.scoreLevel > 0) {
        home.hit = true;
        setTimeout( () => {
          winCondition();
        }, 3000)
      } else {
        setTimeout( () => {
          loseConditionOne();
        }, 3000)
      }
    }
  }

  checkScoreLevel() {
    const score = this.score;
    const loseConditionOne = this.loseConditionOne.bind(this);

    if (score.scoreLevel < 1) {
      this.stopObjects();
      setTimeout( () => {
        loseConditionOne();
      }, 3000)
    }
  }

  // Animation

  stopObjects() {
    clearInterval(this.trashIntervalId);
    clearInterval(this.foodIntervalId);
  }

  draw(ctx, eBar) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    ctx.fillStyle = this.bg_color;
    ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    ctx.drawImage(this.bgGame, 0, 0, this.dim_x, this.dim_y);
    eBar.clearRect(0, 0, this.bar_x, this.bar_y);
    eBar.fillStyle = this.bg_color;
    eBar.fillRect(0, 0, this.bar_x, this.bar_y)
    this.score.draw();
    this.drawTrashs();
    this.drawFoods();

    if (this.gameStatus === "playing") {
      this.penguin.draw();
    } else if (this.gameStatus === "ending") {
      this.home.draw();
      this.penguin.draw();
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


    this.checkScoreLevel();
    this.checkTrashCollisions();
    this.checkFoodCollisions();

    if (this.gameStatus === "ending") {
      this.penguin.move();
      this.home.move();
      this.checkHomeCollision();
    }
  }

}

export default Game;