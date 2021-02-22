const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraints;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var chain1, chain2, chain3, chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,500,50);

	bobObject1 = new Paper(250,400,75);
	bobObject2 = new Paper(325,400,75);
	bobObject3 = new Paper(400,400,75);
	bobObject4 = new Paper(475,400,75);
	bobObject5 = new Paper(550,400,75);

	chain1 = new Chain(bobObject1.body,roof.body,-this.r*2,0)
	/*chain2 = new Chain(bobObject2.body,roof.body,-bobDiameter*2,0)
	chain3 = new Chain(bobObject3.body,roof.body,-bobDiameter*2,0)
	chain4 = new Chain(bobObject4.body,roof.body,-bobDiameter*2,0)
	chain5 = new Chain(bobObject5.body,roof.body,-bobDiameter*2,0)
*/
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  chain1.display();
  /*chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
*/
  drawSprites();
 
}



