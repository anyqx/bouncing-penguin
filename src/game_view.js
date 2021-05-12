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
      this.game.stopObjects();
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
    setTimeout( () => {
      generateObjects();
    }, 15 * 10);
    setTimeout( () => {
      finalPhase(); //win how long game lasts
    }, 15 * 1000);
    setTimeout( () => {
      checkMiss();
    }, 10 * 10);
    requestAnimationFrame(this.animate.bind(this));
  };
  
  animate() {
    this.game.step();
    this.game.draw(this.ctx, this.score);
  
    requestAnimationFrame(this.animate.bind(this));
  };
}


export default GameView;