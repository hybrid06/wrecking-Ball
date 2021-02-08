const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var platform;
var ball, slingshot;




function preload() {
      
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    stand1 = new Stand(390,300,250,10);

   //level one
  box1 = new Box(300,275,30,40);
  console.log(box1);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  //level two
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  //level three
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  //top
  box16 = new Box(390,155,30,40);

    ball = new Ball(200,100,20);

  
    slingshot = new SlingShot(ball.body,{x:200, y:100});
}

function draw(){
    
    background ("gray")
    Engine.update(engine);
    
    
    ground.display();
    stand1.display();
     fill("cyan");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("cyan");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("cyan");
  box13.display();
  box14.display();
  box15.display();

   

    ball.display();
   
    
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}




function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(ball.body, {x: 200 , y: 50});
        bird.trajectory=[]
       slingshot.attach(bird.body);
      sound3.play();
       
    }
}


