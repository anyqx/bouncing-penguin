class Obstacles {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;
    }

    move() {
        this.x -= this.velocity;
    }

}

class Plastic extends Obstacles{
    constructor(dimensions) {
        super(dimensions)
        this.height = 100;
        this.width = 110;
        this.velocity = Math.floor(Math.random() *3) + 1;
    }

    drawPlastic(ctx) {
        const plastic = new Image();
        plastic.src = 'src/plastic_bag.png';
        ctx.drawImage(plastic, this.x, this.y - 150, this.width, this.height)

    }

    animate(ctx) {
        this.move();
        this.drawPlastic(ctx);
    }
}

class Pop extends Obstacles{
    constructor(dimensions) {
        super(dimensions)
        this.height = 130;
        this.width = 130;
        this.velocity = 5;
    }

    drawPop(ctx) {
        const pop = new Image();
        pop.src = 'src/pop.png';
        ctx.drawImage(pop, this.x, this.y - 150, this.width, this.height)

    }

    animate(ctx) {
        this.move();
        this.drawPop(ctx);
    }
}
export { Plastic, Pop };