
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, trash1, trash2, trash3, paper1;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(100, 390, 1000, 10);

	trash1 = new trash(650, 345, 10, 80);
	trash2 = new trash(750, 345, 10, 80);
	trash3 = new trash(700, 380, 90, 10);

	paper1 = new paper(50, 300, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();

  trash1.display();
  trash2.display();
  trash3.display();

  paper1.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:9, y:-11})
	}
}


