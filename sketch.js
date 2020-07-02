const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup() {
  createCanvas(1350,650);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1100,550,200,20);

  box1 = new Box(1020, 500, 20, 20)
  box2 = new Box(1040, 500, 20, 20)
  box3 = new Box(1060, 500, 20, 20)
  box4 = new Box(1080, 500, 20, 20)
  box5 = new Box(1100, 500, 20, 20)
  box6 = new Box(1120, 500, 20, 20)
  box7 = new Box(1140, 500, 20, 20)
  box8 = new Box(1160, 500, 20, 20)
  box9 = new Box(1180, 500, 20, 20)
  box10 = new Box(1050, 450, 20, 20)
  box11 = new Box(1070, 450, 20, 20)
  box12 = new Box(1090, 450, 20, 20)
  box13 = new Box(1110, 450, 20, 20)
  box14 = new Box(1130, 450, 20, 20)
  box15 = new Box(1150, 450, 20, 20)
  box16 = new Box(1080, 400, 20, 20)
  box17 = new Box(1100, 400, 20, 20)
  box18 = new Box(1120, 400, 20, 20)
  box19 = new Box(1100, 350, 20, 20)

  ball = new Ball(150,150,20)

  slingshot = new Slingshot(ball.body,{x:150,y:150})

  log1 = new Log(300,300,100,10)
  log2 = new Log(450,200,100,10)
  log3 = new Log(600,400,100,10)
  log4 = new Log(700,300,100,10)
  log5 = new Log(800,450,100,10)
  log6 = new Log(900,350,100,10)

  
  
}

function draw() {
  background(0);  
  Engine.update(engine)
  
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();

  ball.Display();

  slingshot.view();

  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();
  log6.display();


}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
slingshot.connect.bodyA = null;
  
}