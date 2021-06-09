const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var plane
var ball1,ball2,ball3,ball4,ball5;
var ball6,ball7,ball8,ball9,ball10;
var rotator1, rotator2, rotator3;
var block1, block2;

var angle1=60;
var angle2=60;
var angle3=60;


function setup() {
	createCanvas(550, 600);
  engine = Engine.create();
	world = engine.world;

	var plane_options={
  isStatic:true
 }

plane=Bodies.rectangle(600,height,1200,20,plane_options)
World.add(world,plane)
block1=Bodies.rectangle(100,400,150,20,plane_options);
World.add(world,block1);
block2=Bodies.rectangle(400,400,150,20,plane_options);
World.add(world,block2);


var ball_options={
restitution:0.6,
friction:0.02
}

ball1=Bodies.circle(220,10,10,ball_options)
World.add(world,ball1)
ball2=Bodies.circle(220,10,10,ball_options)
World.add(world,ball2)
ball3=Bodies.circle(220,10,10,ball_options)
World.add(world,ball3)
ball4=Bodies.circle(220,10,10,ball_options)
World.add(world,ball4)	
ball5=Bodies.circle(220,10,10,ball_options)
World.add(world,ball5)  



var rotator_options={
isStatic:true
}

rotator1=Bodies.rectangle(250,200,150,20,rotator_options)
World.add(world,rotator1)
rotator2=Bodies.rectangle(250,200,150,20,rotator_options)
World.add(world,rotator2)
rotator3=Bodies.rectangle(250,200,150,20,rotator_options)
World.add(world,rotator3)

fill("brown")
rectMode(CENTER)
ellipseMode(RADIUS)

}

function draw() {
  background("lightgreen");
  Engine.update(engine)
 
  rect(plane.position.x,plane.position.y,1200,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);

  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,10);
  ellipse(ball5.position.x,ball5.position.y,10);
 

  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.2;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.3;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;
    
}



