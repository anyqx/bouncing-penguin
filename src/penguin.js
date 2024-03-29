const penguin = new Image();
penguin.src = "assets/images/penguin/penguin_1.png";

class Penguin {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = [550, 540];
    this.penguin = penguin;
    this.dim_x = 100; //penguin-size
    this.dim_y = 100;
    this.speed = 5;
    this.moveLeft = false;
    this.moveRight = false;
    this.radius = 5;
    this.centerPos = [573.5, 580];
    this.cbPos = [350, 550];
    this.cbDims = [500, 500];
    this.hit = false;
  }

  draw() {
    if (!this.hit) {
      this.ctx.drawImage(
        this.penguin,
        this.pos[0],
        this.pos[1],
        this.dim_x,
        this.dim_y
      );
    }
  }

  move() {
    if (this.moveLeft && this.pos[0] > -34) {
      this.pos[0] -= this.speed;
      this.centerPos[0] -= this.speed;
      this.cbPos[0] -= this.speed;
    } else if (this.moveRight && this.pos[0] < 1140) {
      this.pos[0] += this.speed;
      this.centerPos[0] += this.speed;
      this.cbPos[0] += this.speed;
    }
  }

  dist(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  }

  isCollidedWith(otherObject) {
    const centerDist = this.dist(this.centerPos, (otherObject.centerPos));
    return centerDist < (this.radius + (otherObject.size/2*0.8));
  };

}

export default Penguin;