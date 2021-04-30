class Food {
    // fish1, fish2, fish3, shrimp, squid
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;
    }

    move() {
        this.x -= this.velocity;
    }
}

class Fish1 extends Food {
    constructor(dimensions) {
        super(dimensions)
        this.height = 130;
        this.width = 130;
        this.velocity = 5;
    }

    drawFish1(ctx) {
        const fish1 = new Image();
        fish1.src = 'src/fish1.png';
        ctx.drawImage(fish1, this.x, this.y - 150, this.width, this.height)

    }

    animate(ctx) {
        this.move();
        this.drawFish1(ctx);
    }
}

class Fish2 extends Food {
    constructor(dimensions) {
        super(dimensions)
        this.height = 130;
        this.width = 130;
        this.velocity = 5;
    }

    drawFish2(ctx) {
        const fish2 = new Image();
        fish2.src = 'src/fish2.png';
        ctx.drawImage(fish2, this.x, this.y - 150, this.width, this.height)

    }

    animate(ctx) {
        this.move();
        this.drawFish2(ctx);
    }
}

class Fish3 extends Food {
    constructor(dimensions) {
        super(dimensions)
        this.height = 130;
        this.width = 130;
        this.velocity = 5;
    }

    drawFish3(ctx) {
        const fish3 = new Image();
        fish3.src = 'src/fish3.png';
        ctx.drawImage(fish3, this.x, this.y - 150, this.width, this.height)

    }

    animate(ctx) {
        this.move();
        this.drawFish3(ctx);
    }
}

class Shrimp extends Food {
    constructor(dimensions) {
        super(dimensions)
        this.height = 100;
        this.width = 100;
        this.velocity = 5;
    }

    drawShrimp(ctx) {
        const shrimp = new Image();
        shrimp.src = 'src/shrimp.png';
        ctx.drawImage(shrimp, this.x, this.y - 150, this.width, this.height)

    }

    animate(ctx) {
        this.move();
        this.drawShrimp(ctx);
    }
}

class Squid extends Food {
    constructor(dimensions) {
        super(dimensions)
        this.height = 100;
        this.width = 100;
        this.velocity = 5;
    }

    drawSquid(ctx) {
        const squid = new Image();
        squid.src = 'src/squid.png';
        ctx.drawImage(squid, this.x, this.y - 150, this.width, this.height)

    }

    animate(ctx) {
        this.move();
        this.drawSquid(ctx);
    }
}

export { Fish1, Fish2, Fish3, Shrimp, Squid };