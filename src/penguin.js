const CONSTANTS = {
    PENGUIN_HEIGHT: 40
}

export default class Penguin {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width / 4;
        this.y = this.dimensions.height / 5;
        this.velocity = 0;
    }

    animate(ctx) {
        this.movePenguin();
        this.drawPenguin(ctx);
    }

    movePenguin() {
        this.x += this.velocity;
        this.y -= this.height;
        //need to finish
    }

    drawPenguin(ctx){
        const penguin_left = new Image();
        const penguin_right = new Image();
        penguin_left.src = 'src/assets/penguin_2.png';
        penguin_right.src = 'src/assets/penguin_1.png';
        ctx.drawImage(penguin_left, 100,0, 100, 100)
        ctx.drawImage(penguin_right, 400,0, 100, 100)
    }
}