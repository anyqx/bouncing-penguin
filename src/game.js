//main class, logic, create the other classes, tell the other 
//classes when to render
import Penguin from './penguin';
import Level from './level';

export default class BouncingPenguin {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.registerEvents();
        this.restart();
    }

    play(){
        this.running = true;
        this.animate();
    }

    restart() {
        this.running = false;
        this.score = 0;
        this.penguin = new Penguin(this.dimensions);
        this.level = new Level(this.dimensions);

        this.animate();
    }

    registerEvents() {
        this.boundClickHandler = this.click.bind(this);
        this.ctx.canvas.addEventListener('mousedown', this.boundClickHandler)
    }

    click(e) {
        if(!this.running) {
            this.play();
        }
    }

    animate() {
        this.level.animate(this.ctx);
        this.penguin.animate(this.ctx);

        this.drawScore();
    }

    drawScore() {
        const location = {x: this.dimensions.width / 2, y: this.dimensions.height / 5}
        this.ctx.fillText(this.score, location.x, location.y);
    }
}