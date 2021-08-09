
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left;
var right;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground =new Ground(400,690,800,40);
	right = new Ground(390,400,20,400);
	left = new Ground(10,400,20,400);

	var ball_option={
		isStatic:false,
		resstitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,200,15,ball_option);
  World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



