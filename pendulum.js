class Pendulum {
    constructor(x, y) {
        var options = {
            restitution: 1,
            isStatic: false,
            slop: 1,
            inertia: Infinity
        }
        this.radius = 40;
        this.body = Bodies.circle(x, y, 40, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x, pos.y);
        noStroke();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0, 0, 40, 40);
        pop();
    }
}