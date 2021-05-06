class Score {
  constructor(eBar){
    this.eBar = eBar;
    this.scoreTop = 25;
    this.scoreLevel = 650;
  }

  // Orange
  draw() {
    this.eBar.beginPath();
    //use bar to show
    // this.eBar.rect(25, this.scoreTop, 25, this.scoreLevel); 

    //use score to show
    this.eBar.font = '25px Arial';
    this.eBar.fillStyle = '#FBFED1';
    this.eBar.fillText(this.scoreLevel, 8,20)

    this.eBar.strokeStyle = '#FCD390';
    this.eBar.lineWidth = 2;
    this.eBar.shadowColor = '#F08240';
    this.eBar.shadowBlur = 50;
    this.eBar.shadowOffsetX = 0;
    this.eBar.shadowOffsetY = 0;
    this.eBar.stroke();
    this.eBar.fill();
    
  }

}

export default Score;