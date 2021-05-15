import Trash from './trash.js';
import Food from './food.js';
import Penguin from './penguin.js';
import Home from './home';
import Score from './score';

const background = new Image();
background.src = "assets/images/backgrounds/background.jpg"; //not the canvas
const win = new Image();
win.src = "assets/images/text/win.png"
const lose = new Image();
lose.src = "assets/images/text/lose.png"

class Game {
  constructor(ctx, score, endPos) {
    this.ctx = ctx;
    this.score = score;
    this.trashs = [];
    this.foods = [];
    this.home = new Home(ctx, endPos);
    this.penguin = new Penguin(ctx);
    this.score = new Score(score);
    this.bg_color = "skyblue";
    this.dim_x = 1200;
    this.dim_y = 700;
    this.background = background;
    this.gameStatus = "playing";
    this.win = win;
    this.lose = lose;
    this.score_x = 800;
    this.score_y = 800;
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
    this.trashInterval = setInterval( () => {

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

    this.foodInterval = setInterval(() => { 
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

  loseCondition() {
    this.gameStatus = "lose";
  }


  winCondition() {
    this.gameStatus = "win";
  }

  checkTrashCollisions() {
    const penguin = this.penguin;
    const trashs = this.trashs;
    const score = this.score
    const loseCondition = this.loseCondition.bind(this);

    for (let i = 0; i < trashs.length; i++) {
      const trash = trashs[i]

      if (penguin.isCollidedWith(trash)) {
        trash.hit = true;
        if (score.currentScore > 0) {
          score.currentScore -= 5;
        } else {
          setTimeout( () => {
            loseCondition();
          }, 1000)
        }
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
        if (score.currentScore < 3000) {
          score.currentScore += 5;
        } else {
          setTimeout( () => {
            winCondition();
        }, 3000)
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
        setTimeout( () => {
          winCondition();
        }, 3000)
      } else {
        setTimeout( () => {
          loseCondition();
        }, 3000)
      }
    }
  }

  checkCurrentScore() {
    const score = this.score;
    const loseCondition = this.loseCondition.bind(this);
    const winCondition = this.winCondition.bind(this);

    if (score.currentScore < 0) {
      this.clearObjects();
      setTimeout( () => {
        loseCondition();
      }, 3000)
    }
    if (score.currentScore >= 3000) {
      this.clearObjects();
      setTimeout( () => {
        winCondition();
      }, 2000)
    }
  }

  // Animation

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
    score.fillRect(0, 0, this.score_x, this.score_y)
    this.score.draw();
    this.drawTrashs();
    this.drawFoods();

    if (this.gameStatus === "playing") {
      this.penguin.draw();
    } else if (this.gameStatus === "ending") {
      this.home.draw();
      this.penguin.draw();
    } else if (this.gameStatus === "lose") {
      ctx.drawImage(
        this.lose, 200,100,700,500)
    } else if (this.gameStatus === "win") {
      ctx.drawImage( this.win, 200,100, 700, 500)
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

export default Game;