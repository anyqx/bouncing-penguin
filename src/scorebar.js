class ScoreBar {
  constructor(sBar){
    this.scoreBar = scoreBar;
    this.scoreTop = 25;
    this.scoreLevel = 650;
  }

  draw() {
    this.scoreBar.beginPath();
    this.scoreBar.rect(25, this.energyTop, 25, this.energyLevel);
    this.scoreBar.fillStyle = '#FBFED1';
    this.scoreBar.strokeStyle = '#FCD390';
    this.scoreBar.lineWidth = 2;
    this.scoreBar.shadowColor = '#F08240';
    this.scoreBar.shadowBlur = 50;
    this.scoreBar.shadowOffsetX = 0;
    this.scoreBar.shadowOffsetY = 0;
    this.scoreBar.stroke();
    this.scoreBar.fill();
  }

}

export default ScoreBar;