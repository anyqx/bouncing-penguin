const trash1 = new Image();
trash1.src = "assets/images/trash/plastic_bag.png";
const trash2 = new Image();
trash2.src = "assets/images/trash/pop.png";

const bubbleBurst = new Image();
bubbleBurst.src = "assets/images/game_over/bubble_burst.png";

class Trash {
  constructor(ctx, type, startPos) {
    this.ctx = ctx;
    this.type = type;
    this.startPos = startPos;
    this.size = 5;
    this.hit = false;
    this.bubbleBurst = bubbleBurst;
    this.bubbleSize = 20;
    if (this.type === "trash1") this.trash = trash1;
    if (this.type === "trash2") this.trash = trash2;


    if (this.startPos === "pos1") this.pos = [200, 50];
    if (this.startPos === "pos2") this.pos = [400, 50];
    if (this.startPos === "pos3") this.pos = [800, 50];

    this.centerPos = [
      (this.pos[0] + (this.size / 2)), 
      (this.pos[1] + (this.size / 2))
    ];
  }

  draw() {
    if (this.hit) {
      this.ctx.drawImage(
        this.bubbleBurst,
        this.pos[0] + 10, 
        this.pos[1] + 30,
        this.bubbleSize,
        this.bubbleSize
      );
    } else {
      const bubble = this.ctx.createRadialGradient(
        (this.pos[0] + (this.size / 2)), 
        (this.pos[1] + (this.size / 2)), 
        this.size * 0.3, 
        (this.pos[0] + (this.size / 2)), 
        (this.pos[1] + (this.size / 2)), 
        this.size * 1.0
      );
      bubble.addColorStop(0, "lightblue");
      bubble.addColorStop(1, "transparent");
  
      this.ctx.beginPath();
      this.ctx.arc(
        (this.pos[0] + (this.size / 2)),
        (this.pos[1] + (this.size / 2)),
        (this.size / 2) * 1.3,
        0,
        2 * Math.PI
      );
      this.ctx.strokeStyle = "transparent";
      this.ctx.stroke();
      this.ctx.fillStyle = bubble;
      this.ctx.fill();
  
  
      this.ctx.drawImage(
        this.trash, 
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
      this.pos[0] -= 5;
      this.pos[1] -= 5;
    } else {
      this.size += 1.2;
      this.pos[1] += 4.5;
  
      if (this.startPos === "pos1") {
        this.pos[0] -= 1.7;
      } else if (this.startPos === "pos2") {
        this.pos[0] -= 0.55;
      } else if (this.startPos === "pos3") {
        this.pos[0] += 0.4;
      }
  
      this.centerPos = [
        (this.pos[0] + (this.size / 3)),
        (this.pos[1] + (this.size / 3))
      ];
    }
  }
}


export default Trash;
