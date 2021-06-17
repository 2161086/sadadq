var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Body = Matter.Body,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  engine = Engine.create();
  world = engine.world;
  // Engine.run(engine);ss
  var options = {
    isStatic: true,
    rotationSpeed: 0.01,
  };
  ground = Bodies.rectangle(width / 2, height / 2, 3000, 20, options);

  World.add(world, ground);
  for (let i = 0; i < 150; i++) {
    boxes.push(
      new Box(random(width), random(0, -height), random(10, 150), color(random(200, 255),random(200, 255),random(200, 255)))
    );
  }
}

function draw() {
  blendMode(BLEND);
  background(0,20);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].body.position.y > height) {
      boxes.splice(i, 1);
      boxes.push(
        new Box(
          random(width),
          random(0, -height),
          random(10, 150),
        
          color(random(200, 255),random(200, 255),random(200, 255))
        )
      );

    }
    if (mouseIsPressed) { 
      boxes[i].body.position.y = -height;
    }
        boxes[i].show();
  }

  

  push();
  translate(ground.position.x, ground.position.y);
  rotate(ground.angle);
  noStroke(255);
  // fill(255,0,0);
  // rectMode(CENTER);
  rect(0, 0, 3000, 10, 10);
  pop();
}

function updateRotation() {
  Body.setAngle(ground, ground.angle + ground.rotationSpeed);
  requestAnimationFrame(updateRotation);
}
window.requestAnimationFrame(updateRotation);

