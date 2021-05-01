import { defaultCipherList } from "node:constants";

const CONSTANTS = {
    PENGUIN_UPPER_HEIGHT: 40,
    PENGUIN_LOWER_HEIGHT: 20,
}

class Penguin {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;
        this.velocity = 2;
        this.isAtBottom = false;
        this.hasJumped = false
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
}

  

class PenguinLeft extends Penguin {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width / 3; //left top penguin
        this.y = this.dimensions.height /4;
    }

      drawLeft(ctx){
        const penguin = new Image();
        penguin.src = 'src/assets/penguin_1.png';
        ctx.drawImage(penguin,this.x, this.y, 100, 100); //position, penguin size
    }
}


class PenguinRight extends Penguin {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width / 3 * 2; //right bottom penguin
        this.y = this.dimensions.height /4 * 3;
    }

      drawRight(ctx){
        const penguin = new Image();
        penguin.src = 'src/assets/penguin_2.png'; 
        ctx.drawImage(penguin, this.x, this.y, 130, 110);
    }
}
}

export {PenguinLeft, PenguinRight}; 