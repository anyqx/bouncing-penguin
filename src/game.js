//main class, logic, create the other classes, tell the other 
//classes when to render
import Penguin from './penguin';
import Level from './level';

export default class BouncingPenguin {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.x = this.dimensions.width / 4 ;
        this.y = this.dimensions.height / 5 ;
        this.vel = 0;
    }

    animate() {
        this.movePenguin();
        this.drawPenguin(ctx);
    }

    movePenguin() {

    }

    drawPenguin(ctx){
        const penguin_left = new Image();
        const penguin_right = new Image();
        penguin_left.src = 'assets/penguin_1.png';
        penguin_right.src = 'assets/penguin_2.png';
        ctx.drawImage(penguin_left, this.x * 2, this.y * 4, this.width, this.height)
        ctx.drawImage(penguin_right, this.x * 3, this.y, this.width, this.height)

    }
}