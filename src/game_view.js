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
    setTimeout(function () {
      generateObjects();
      fireCrossbow();
    }, 14 * 10);
    setTimeout(function () {
      removeCrossbow();
    }, 16 * 10);
    setTimeout(function () {
      finalPhase();
    }, 93 * 1000);
    setTimeout(function () {
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