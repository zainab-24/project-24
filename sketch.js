
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ball,ground;
function preload(){

}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  box1=new dustbin(600,380,230,20);
  box2= new dustbin(480,290,20,200);
  box3= new dustbin(720,290,20,200);
  ground =new Ground(400,400,800,20);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites ()

  }