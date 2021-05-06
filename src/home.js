const home = new Image();
home.src = "assets/images/home/ice_cave.png";
const explosion = new Image();
explosion.src = "assets/images/home/ice_cave.png";

class Home {
  constructor(ctx, endPos) {
    this.ctx = ctx;
    this.endPos = endPos;
    this.size = 5;
    this.hit = false;
    this.explosion = explosion;
    this.explosionSize = 30;
    this.home = home;
    if (this.endPos === "endPos1") this.pos = [690, 50];
    if (this.endPos === "endPos2") this.pos = [490, 50];
  }

  draw() {
    if (this.hit) {
      this.ctx.drawImage(
        this.explosion,
        this.pos[0] + 50,
        this.pos[1] + 30,
        this.explosionSize,
        this.explosionSize
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
      this.explosionSize += 10;
      this.pos[0] -= 5;
      this.pos[1] -= 5;
    } else {
      this.size += 1.0;
      this.pos[1] += 2;
      if (this.endPos === "endPos1") this.pos[0] += 0.3;
      if (this.endPos === "endPos2") this.pos[0] -= 1.2;

      this.centerPos = [
        (this.pos[0] + (this.size / 3)),
        (this.pos[1] + (this.size / 3))
      ];
    }
  }

}

export default Home;