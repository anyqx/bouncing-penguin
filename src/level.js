//draw background and moving penguin food and letters(if time allows)

export default class Level {
    constructor(dimensions) {
        this.dimensions = dimensions;
    }
    
    animate(ctx){
        this.drawBackground(ctx);
    }

    drawBackground(ctx) {
        const background = new Image();
        background.src = 'src/assets/sea_background.jpg';
        ctx.drawImage(background, 0, 0, this.dimensions.width/2, this.dimensions.height)
    }

}