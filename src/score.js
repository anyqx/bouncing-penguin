class Score {
  constructor(score){
    this.score = score;
    this.currentScore = 0;
  }

  //draw on Canvas
  draw() {
    this.score.beginPath();
    this.score.font = '22px Itim cursive';
    this.score.fillStyle = 'rgb(255,107,107)';
    this.score.fillText("SCORE: "+this.currentScore, 50,20)
    
  }

}

export default Score;