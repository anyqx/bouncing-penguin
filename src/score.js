class Score {
  constructor(score){
    this.score = score;
    this.scoreTop = 0;
    this.scoreLevel = 650;
  }

  // Orange // draw on Canvas
  draw() {
    this.score.beginPath();
    //use bar to show
    // this.score.rect(25, this.scoreTop, 25, this.scoreLevel); 
    // this.score.strokeStyle = '#FCD390';
    // this.score.lineWidth = 2;
    // this.score.shadowColor = '#F08240';
    // this.score.shadowBlur = 50;
    // this.score.shadowOffsetX = 0;
    // this.score.shadowOffsetY = 0;
    // this.score.stroke();
    // this.score.fill();

    //use score to show
    this.score.font = '25px Arial';
    this.score.fillStyle = '#FBFED1';
    // this.score.fillText(this.scoreLevel, 8,20)
    this.score.fillText(this.scoreTop, 8,20)

    
  }

}

export default Score;