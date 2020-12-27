class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: (windowHeight/3)*2, 
            angularStiffness: 1
        }
        this.pointB = pointB;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {
        var posA = this.rope.bodyA.position;
        var posB = this.pointB;
        push();
        strokeWeight(3)
        stroke(this.color);
        line(posA.x, posA.y, posB.x, posB.y)
        pop();
    }
}