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
        this.isAtBottom = false;
        this.hasJumped = false;
    }

    animate(ctx) {
        if (this.hasJumped === false) {
            this.move();
        }
        
        // ((this.y1 < this.dimensions.height / 4) ||  (this.y1 < this.dimensions.height / 4 * 3)) {
        //     this.move();
        // } 
        this.drawPenguin(ctx);
    }   

    move() {
        if (this.isAtBottom) {
            if (this.y1 < 139) {
                this.hasJumped = true;
                this.isAtBottom = false;
            }
            this.y1 -= this.velocity;
            this.y2 += this.velocity;
            
        } else {
            if (this.y1 > 409) {
                this.isAtBottom =true;
            }
            console.log('y1:' + this.y1, 'y2:' + this.y2 , 'velocity' + this.velocity);
            this.y1 += this.velocity;
            this.y2 -= this.velocity;
        }
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