const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine, world, canvasmouse;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var gameState = "none";

function setup() {
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    var canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    var options = {mouse: canvasmouse};
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    bob3 = new Pendulum(windowWidth/2, (windowHeight/3)*2);
    bob2 = new Pendulum(bob3.body.position.x-80, (windowHeight/3)*2);
    bob1 = new Pendulum(bob2.body.position.x-80, (windowHeight/3)*2);
    bob4 = new Pendulum(bob3.body.position.x+80, (windowHeight/3)*2);
    bob5 = new Pendulum(bob4.body.position.x+80, (windowHeight/3)*2);
    rope1 = new Rope(bob1.body, {x: bob1.body.position.x,y: 50});
    rope2 = new Rope(bob2.body, {x: bob2.body.position.x,y: 50});
    rope3 = new Rope(bob3.body, {x: bob3.body.position.x,y: 50});
    rope4 = new Rope(bob4.body, {x: bob4.body.position.x,y: 50});
    rope5 = new Rope(bob5.body, {x: bob5.body.position.x,y: 50});
}

function draw() {
    background(color(mouseY, mouseX, 100));
    Engine.update(engine);

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    textSize(windowWidth/70);
    textFont("Georgia");
    fill(0)
    strokeWeight(windowWidth/500);
    stroke(255);
    text("Current Bob#: "+gameState, 20,windowHeight-30);
    text("To swing a bob, you must click on the bob number that you want to move on your keyboard.", 10,20);
    text("For example, if you want to move the second bob, click on the number 2 & then drag your mouse to move bob #2.", 10, 40);
    text("You can see what bob number you are on down below.", 10, 60);
}

function mouseDragged() {
    if(gameState === "1") {
        Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
    }
    if(gameState === "2") {
        Body.setPosition(bob2.body, {x: mouseX, y: mouseY});
    }
    if(gameState === "3") {
        Body.setPosition(bob3.body, {x: mouseX, y: mouseY});
    }
    if(gameState === "4") {
        Body.setPosition(bob4.body, {x: mouseX, y: mouseY});
    }
    if(gameState === "5") {
        Body.setPosition(bob5.body, {x: mouseX, y: mouseY});
    }
}

function keyPressed() {
    if(keyCode === 49) {
        gameState = "1";
    }
    if(keyCode === 50) {
        gameState = "2";
    }
    if(keyCode === 51) {
        gameState = "3";
    }
    if(keyCode === 52) {
        gameState = "4";
    }
    if(keyCode === 53) {
        gameState = "5";
    }
}