const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

var bobRadius = 30-20/2;

function setup() {
	var canvas = createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(500,100,180,20);

	bob1 = new Bob(500,260,30);
	bob2 = new Bob(530,260,30);
	bob3 = new Bob(560,260,30);
	bob4 = new Bob(470,260,30);
  bob5 = new Bob(440,260,30);
  
  rope1 = new Rope(bob1.body,roof.body,-bobRadius*4,0);
	
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(80,80,80);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  
  drawSprites();
 
}