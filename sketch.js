const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof1,rope1,rope2,rope3,rope4,rope5
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	bob1=new Bob(400,400,30);
	bob2=new Bob(370,400,30);
	bob3=new Bob(340,400,30);
	bob4=new Bob(430,400,30);
	bob5=new Bob(460,400,30);
	roof1=new Roof(410,200,200,20);
	rope1=new Rope(bob1.body,roof1.body,400,200);
	rope2=new Rope(bob2.body,roof1.body,370,200);
	rope3=new Rope(bob3.body,roof1.body,340,200);
	rope4=new Rope(bob4.body,roof1.body,430,200);
	rope5=new Rope(bob5.body,roof1.body,460,200);
	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  background("yellow");
  rectMode(CENTER);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-20,y:20});
  }
}