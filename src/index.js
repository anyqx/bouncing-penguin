import Game from "./game.js";
import GameView from "./game_view.js";

document.addEventListener("DOMContentLoaded",  () => {
  
  const scoreCanvas = document.getElementById("score-canvas");
  const score = scoreCanvas.getContext("2d");
  const gameCanvas = document.getElementById("game-canvas");
  const ctx = gameCanvas.getContext("2d");
  const music = new Audio("assets/audio/music.mp3")

  const instructions = document.getElementById("instructions-modal");
  const instructionsBtn = document.getElementById("instructions-btn");
  const close = document.getElementById("close-modal");
  const mute = document.getElementById("mute-symbol");

  instructionsBtn.addEventListener("click", () => {
    if (instructions.style.display !== "block") {
      instructions.style.display = "block";
    } else {
      instructions.style.display = "none";
    }
  });

  close.addEventListener("click", () => {
    instructions.style.display = "none";
  });

  document.getElementById("audio-btn").addEventListener("click", () => {
    if (music.muted) {
      music.muted = false;
      mute.innerHTML = "&#x1f50a;"
    } else {
      music.muted = true;
      mute.innerHTML = "&#x1f507;"
    }
  });
  
  document.getElementById("play-btn").addEventListener("click", () => {

    const endPositions = ["endPos1", "endPos2"]
    const endPos = endPositions[Math.floor(Math.random() * Math.floor(2))];
    
    const game = new Game(ctx, score, endPos);
    new GameView(game, ctx, score).start();

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