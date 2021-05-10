
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var engine,world;

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.

 leftside = new Dustbin(550,620,200,100);
 bottomside = new Dustbin(610,660,100,20);
 rightside = new Dustbin(670,620,20,100);

paper = new Paper(100,600,10);

ground = new Ground(400,680,800,20);

}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);

  leftside.display();
  bottomside.display();
  rightside.display();
  ground.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:15,y:-15});
	}
}
