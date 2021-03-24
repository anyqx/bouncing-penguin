//main class, logic, create the other classes, tell the other 
//classes when to render
import Penguin from './penguin';
import Level from './level';

export default class BouncingPenguin {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.frame = 0;
        this.eventsHandler();
        this.restart();
        this.score = 0;
    }
    
    eventsHandler() {
        this.spaceBarHandler = this.spaceDown.bind(this);
        window.addEventListener('keydown',(e) => {
            if (e.code === 'Space') {
                this.spaceBarHandler();
            }
        })
    }
    
    spaceDown() {
        // if (!this.running) {
        //     this.play();
        // }
        this.animatePenguin();
    }

    play(){
        // this.running = true;
        this.penguin.drawPenguin();
    }

    restart() {
        // this.running = true;
        this.score = 0;
        this.frame = 0;
        this.level = new Level(this.dimensions);
        this.penguin = new Penguin(this.dimensions);

        this.animate();
    }

    animate() {
        this.level.animate(this.ctx);
        this.penguin.animate(this.ctx);

        this.drawScore();
        requestAnimationFrame(this.animate.bind(this))
    }

    drawScore() {
        // const location = {x: this.dimensions.width / 2, y: this.dimensions.height / 5}
        // this.ctx.fillText(this.score, location.x, location.y); 
        this.ctx.fillText(`SCORE: ${this.score}`, this.dimensions.height/2, this.dimensions.width/10);
    }
}