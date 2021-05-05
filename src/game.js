//main class, logic, create the other classes, tell the other 
//classes when to render
import Level from './level';
import { Left, Right } from './penguin';
import { Plastic, Pop } from './obstacles';
import { Fish1, Fish2, Fish3, Shrimp, Squid } from './food'

export default class BouncingPenguin {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        // this.frame = 0;
        // this.eventsHandler();
        
        this.start();
        // this.score = 0;
        // this.animate()
    }
    
    start() {
        // this.running = true;
        // this.score = 0;
        // this.frame = 0;
        this.level = new Level(this.dimensions);
        this.left = new Left(this.dimensions);
        this.right = new Right(this.dimensions);

        this.animate();
    }

    eventsHandler() {
        // this.spaceBarHandler = this.spaceDown.bind(this);
        window.addEventListener('keydown',(e) => {
            if (e.code === 'Space') {
                // this.spaceBarHandler();
                this.left.animate(this.ctx)
                this.right.animate(this.ctx)
            }
        })
    }

    animate() {
        this.level.animate(this.ctx);
        this.left.animate(this.ctx);
        this.right.animate(this.ctx);

        this.drawScore();
        requestAnimationFrame(this.animate.bind(this))
    }

    drawScore() {
        // const location = {x: this.dimensions.width / 2, y: this.dimensions.height / 5}
        // this.ctx.fillText(this.score, location.x, location.y); 
        this.ctx.fillText(`SCORE: ${this.score}`, this.dimensions.height/2, this.dimensions.width/10);
    }
}