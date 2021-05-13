const home = new Image();
home.src = "assets/images/home/ice_cave.png";
const bubbleBurst = new Image();
bubbleBurst.src = "assets/images/home/ice_cave.png";

class Home {
  constructor(ctx, endPos) {
    this.ctx = ctx;
    this.endPos = endPos;
    this.size = 5;
    this.hit = false;
    this.bubbleBurst = bubbleBurst;
    this.bubbleSize = 30;
    this.home = home;
    if (this.endPos === "endPos1") this.pos = [360, 100];
    if (this.endPos === "endPos2") this.pos = [360, 100];
  }

  draw() {
    if (this.hit) {
      this.ctx.drawImage(
        this.bubbleBurst,
        this.pos[0] + 30,
        this.pos[1] + 40,
        this.bubbleSize,
        this.bubbleSize
      );
    } else {
      this.ctx.drawImage(
        this.home,
        this.pos[0],
        this.pos[1],
        this.size,
        this.size
      );
    }
  }

  move() {
    if (this.hit) {
      this.bubbleSize += 10;
      this.pos[0] -= 10;
      this.pos[1] -= 10;
    } else {
      this.size += 1.0;
      this.pos[1] += 2;
      if (this.endPos === "endPos1") this.pos[0] += 1;
      if (this.endPos === "endPos2") this.pos[0] -= 1.2;

      this.centerPos = [
        (this.pos[0] + (this.size / 3)),
        (this.pos[1] + (this.size / 3))
      ];
    }
  }

}

export default Home;