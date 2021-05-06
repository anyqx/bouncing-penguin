import Game from "./game.js";
import GameView from "./game_view.js";

document.addEventListener("DOMContentLoaded", function () {
  
  const gameCanvas = document.getElementsByClassName("game-canvas")[0];
  gameCanvas.width = 1200;
  gameCanvas.height = 700;
  const ctx = gameCanvas.getContext("2d");
  const energyBar = document.getElementsByClassName("energy-bar")[0];
  energyBar.width = 75;
  energyBar.height = 700;
  const eBar = energyBar.getContext("2d");
  const bgMusic = new Audio("assets/audio/bg_music.mp3")

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
    if (bgMusic.muted) {
      bgMusic.muted = false;
      mute.innerHTML = "&#x1f50a;"
    } else {
      bgMusic.muted = true;
      mute.innerHTML = "&#x1f507;"
    }
  });
  
  document.getElementById("play-btn").addEventListener("click", () => {

    const endPositions = ["endPos1", "endPos2"]
    const endPos = endPositions[Math.floor(Math.random() * Math.floor(2))];
    
    const game = new Game(ctx, eBar, endPos);
    new GameView(game, ctx, eBar).start();

    bgMusic.currentTime = 0;
    bgMusic.play();

    let moveLeft = false;
    let moveRight = false;

    document.addEventListener("keydown", event => {
      if (event.code === "ArrowLeft") {
        moveLeft = true;
        game. movePenguin(moveLeft, moveRight);
      } else if (event.code === "ArrowRight") {
        moveRight = true;
        game. movePenguin(moveLeft, moveRight);
      }
    });
  
    document.addEventListener("keyup", event => {
      if (event.code === "ArrowLeft") {
        moveLeft = false;
        game. movePenguin(moveLeft, moveRight);
      } else if (event.code === "ArrowRight") {
        moveRight = false;
        game. movePenguin(moveLeft, moveRight);
      }
    });
  });
});