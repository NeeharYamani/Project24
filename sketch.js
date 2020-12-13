
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var edge1,edge2,bottom;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(800,height,1600,30)
    dustbin1 = new Dustbin(1300,670,180,90);
    dustbin2 = new Dustbin(1195,621,120,180);
    dustbin3 = new Dustbin(1400,621,120,180);
    paper = new Ball(150,650,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 keyPressed();
  drawSprites();
  
  function keyPressed(){
    if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    }
  }
}



