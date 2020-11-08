const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld,ground, ground_options,ball,ball_options;

function setup() {

  var canvas=createCanvas(400,400);
  myEngine=Engine.create();  //myEngine.world
  myWorld=myEngine.world;

  ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myWorld,ground);


  ball_options={
    restitution:0.5
  }
    ball=Bodies.circle(200,200,20,ball_options);
    World.add(myWorld,ball);
  /*
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);*/

}

function draw() {
  background(0,0,0);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
}