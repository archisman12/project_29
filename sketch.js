const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon1Obj;

  
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(width/2,600,width,30);
  stand1 = new Stand(590,300,250,10);
 
 
  //level one
  block1 = new Block(500,275,30,40);
  block2 = new Block(530,275,30,40);
  block3 = new Block(560,275,30,40);
  block4 = new Block(590,275,30,40);
  block5 = new Block(620,275,30,40);
  block6 = new Block(650,275,30,40);
  block7 = new Block(680,275,30,40);
  //level two
  block8 = new Block(530,235,30,40);
  block9 = new Block(560,235,30,40);
  block10 = new Block(590,235,30,40);
  block11 = new Block(620,235,30,40);
  block12 = new Block(650,235,30,40);
  //level three
  block13 = new Block(560,195,30,40);
  block14 = new Block(590,195,30,40);
  block15 = new Block(620,195,30,40);
  //top
  block16 = new Block(590,155,30,40);

  //striker
  polygon1Obj= new Polygon(300,200,30)
  Slingshot1 = new Slingshot(polygon1Obj.body,{x:220,y:190});

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  polygon1Obj.display()
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  Slingshot1.display();
 

}

function mouseDragged(){
  Matter.Body.setPosition(polygon1Obj.body, {x:mouseX,y:mouseY})

}

function mouseReleased(){
  Slingshot1.fly();
}

