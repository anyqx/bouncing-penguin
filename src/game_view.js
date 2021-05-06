class GameView {
  constructor(game, ctx, eBar) {
    this.ctx = ctx;
    this.game = game;
    this.eBar = eBar;
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
      this.game.gameStatus = "loseOne";
    }
  }

  start() {
    const generateObjects = this.generateObjects.bind(this);
    const finalPhase = this.finalPhase.bind(this);
    const checkMiss = this.checkMiss.bind(this);
    setTimeout( () => {
      generateObjects();
    }, 14 * 10);
    setTimeout( () => {
      finalPhase(); //win
    }, 10 * 1000);
    setTimeout( () => {
      checkMiss();
    }, 100 * 1000);
    requestAnimationFrame(this.animate.bind(this));
  };
  
  animate() {
    this.game.step();
    this.game.draw(this.ctx, this.eBar);
  
    requestAnimationFrame(this.animate.bind(this));
  };
}


export default GameView;