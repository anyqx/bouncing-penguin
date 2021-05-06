const food1 = new Image();
food1.src = "assets/images/foods/fish_1.png";
const food2 = new Image();
food2.src = "assets/images/foods/fish_2.png";
const food3 = new Image();
food3.src = "assets/images/foods/fish_3.png";
const food4 = new Image();
food4.src = "assets/images/foods/shrimp.png";
const food5 = new Image();
food5.src = "assets/images/foods/squid.png";


const explosion = new Image();
explosion.src = "assets/images/game_over/explosion.png";

class Food {
  constructor(ctx, type, startPos) {
    this.ctx = ctx;
    this.type = type;
    this.startPos = startPos;
    this.size = 5;
    this.angle = 0;
    this.hit = false;
    this.explosion = explosion;
    this.explosionSize = 50;
    if (this.type === "food1") this.food = food1;
    if (this.type === "food2") this.food = food2;
    if (this.type === "food3") this.food = food3;
    if (this.type === "food4") this.food = food4;
    if (this.type === "food5") this.food = food5;

    if (this.startPos === "pos1") this.pos = [440, 50];
    if (this.startPos === "pos2") this.pos = [540, 50];
    if (this.startPos === "pos3") this.pos = [640, 50];
    if (this.startPos === "pos4") this.pos = [740, 50];

    this.centerPos = [
      (this.pos[0] + (this.size / 2)),
      (this.pos[1] + (this.size / 2))
    ];
  }

  draw() {
    if (this.hit) {
      this.ctx.save();
      this.ctx.translate(this.pos[0], this.pos[1]);
      this.ctx.rotate(Math.PI / 180 * (this.angle += 1));
      this.ctx.drawImage(
        this.explosion,
        -(this.explosionSize / 2),
        -(this.explosionSize / 2),
        this.explosionSize,
        this.explosionSize
      )
      this.ctx.translate(-this.pos[0], -this.pos[1]);
      this.ctx.restore();
    } else {
      const grd = this.ctx.createRadialGradient(
        (this.pos[0]),
        (this.pos[1]),
        this.size * 0.3,
        (this.pos[0]),
        (this.pos[1]),
        this.size
      );
      grd.addColorStop(0, "red");
      grd.addColorStop(1, "transparent");
  
      this.ctx.beginPath();
      this.ctx.arc(
        (this.pos[0]),
        (this.pos[1]),
        (this.size / 2) * 1.5,
        0,
        2 * Math.PI
      );
      this.ctx.strokeStyle = "transparent";
      this.ctx.stroke();
      this.ctx.fillStyle = grd;
      this.ctx.fill();
  
  
      this.ctx.save();
      this.ctx.translate(this.pos[0], this.pos[1]);
      this.ctx.rotate(Math.PI / 180 * (this.angle += 3));
  
      this.ctx.drawImage(
        this.food,
        -(this.size / 2),
        -(this.size / 2),
        this.size,
        this.size
      )
      this.ctx.translate(-this.pos[0], -this.pos[1]);
      this.ctx.restore();
    }

  }

  move() {
    if (this.hit) {
      this.explosionSize += 6;
      this.pos[1] += 7;

      if (this.startPos === "pos1") {
        this.pos[0] -= 1.0;
      } else if (this.startPos === "pos2") {
        this.pos[0] -= 0.3;
      } else if (this.startPos === "pos3") {
        this.pos[0] += 0.3;
      } else if (this.startPos === "pos4") {
        this.pos[0] += 1.0;
      }
    } else {
      this.size += 0.7;
      this.pos[1] += 7;
  
      if (this.startPos === "pos1") {
        this.pos[0] -= 2.4;
      } else if (this.startPos === "pos2") {
        this.pos[0] -= 0.6;
      } else if (this.startPos === "pos3") {
        this.pos[0] += 0.8;
      } else if (this.startPos === "pos4") {
        this.pos[0] += 2.4;
      }
  
      this.centerPos = [
        (this.pos[0] - (this.size / 3)),
        (this.pos[1] - (this.size / 3))
      ];
    }
  }
}

export default Food;