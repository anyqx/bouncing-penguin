class Score {
  constructor(score){
    this.score = score;
    this.scoreTop = 0;
    this.scoreLevel = 650;
  }

  // Orange // draw on Canvas
  draw() {
    this.score.beginPath();
    this.score.font = '25px Arial';
    this.score.fillStyle = 'red';
    this.score.fillText(this.scoreTop, 100,20)
    
  }

}

export default Score;