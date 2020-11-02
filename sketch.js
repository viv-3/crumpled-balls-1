
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ball

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper(600,500,PI/2)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display
  
  drawSprites();
 
}



