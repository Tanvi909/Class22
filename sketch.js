const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;

  var options= {
    isStatic: true
    
  }
  ground= Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);

  var ball_options= {
    restitution: 1
  }
  ball= Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  var rect_options= {
    
    restitution: 1
  }
  diamond= Bodies.circle(100,100,40, rect_options);
  World.add(world,diamond);



}

function draw() {
  background(0);  

  Engine.update(engine);
rectMode(CENTER); 
fill("brown");
rect(ground.position.x,ground.position.y,400,20);
fill("white");
ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20,20);

ellipseMode(RADIUS); 
fill("blue");
ellipse(diamond.position.x,diamond.position.y,40,40);

}