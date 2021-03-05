//draw background and moving penguin food and letters(if time allows)

export default class Level {
    constructor(dimensions) {
        this.dimensions = dimensions;
    }
    
    animate(ctx){
        this.drawBackground(ctx);
    }

    drawBackground(ctx) {
        const gameboard = new Image();
        gameboard.src = 'src/assets/sea_background.jpg';
        // gameboard.onload = () => ctx.drawImage(gameboard, 10, 10, this.dimensions.width, this.dimensions.height)
        ctx.drawImage(gameboard, 10, 10, this.dimensions.width, this.dimensions.height)
        
    }

}