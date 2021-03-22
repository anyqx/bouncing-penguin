const CONSTANTS = {
    PENGUIN_UPPER_HEIGHT: 40,
    PENGUIN_LOWER_HEIGHT: 20,
}

export default class Penguin {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x1 = this.dimensions.width / 3; //left top penguin
        this.y1 = this.dimensions.height /4;
        this.x2 = this.dimensions.width / 3 * 2; //right bottom penguin
        this.y2 = this.dimensions.height /4 * 3;
        this.velocity = 2;
    }

    animate(ctx) {
        // this.movePenguin();
        this.drawPenguin(ctx);
    }

    move() {
        // this.x += this.velocity;
        // debugger
        this.y1 += this.velocity;
        this.y2 -= this.velocity;
        // this.y1 = this.y2;
        // this.width = 0;
    }

    stop() {
        // this.width = 5;
    }

    drawPenguin(ctx){
        const penguin_left = new Image();
        const penguin_right = new Image();
        penguin_left.src = 'src/assets/penguin_2.png'; 
        penguin_right.src = 'src/assets/penguin_1.png';
        ctx.drawImage(penguin_left,this.x1, this.y1, 100, 100); //position, penguin size
        ctx.drawImage(penguin_right, this.x2, this.y2, 130, 110);
        
    }
}