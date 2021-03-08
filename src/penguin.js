const CONSTANTS = {
    PENGUIN_HEIGHT: 40
}

export default class Penguin {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width / 4;
        this.y = this.dimensions.height;
        this.velocity = 1;
    }

    animate(ctx) {
        this.movePenguin();
        this.drawPenguin(ctx);
    }

    movePenguin() {
        this.x += this.velocity;
        this.y -= this.height;
        this.height = 0;
    }

    jump() {
        this.height = 5;
    }

    drawPenguin(ctx){
        const penguin_left = new Image();
        const penguin_right = new Image();
        debugger
        penguin_left.src = 'src/assets/penguin_2.png'; 
        penguin_right.src = 'src/assets/penguin_1.png';
        // ctx.drawImage(penguin_left, 50, 30, 100, 100)
        ctx.drawImage(penguin_left,this.x/2, 30, 100, 100)
        ctx.drawImage(penguin_right, 370, 300, 120, 120)
    }
}