const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;



function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  log = new Log();
  ball = new Ball();
  chain = new Chain(log.body,ball.body);
}

function draw() {
    background(0);
    Engine.update(engine);
    ball.display();
    log.display();
    chain.display();
    textFont('Georgia');
    textSize(20);
    text("PRESS SPACE TO TAKE THE PENDULUM TO THE MOUSE",100,300);
    text("PRESS ENTER TO RELEASE",250,320)

  if(keyCode === 10)  {
    ball.body.velocity.x = 5 ;
    ball.body.velocity.y = -3  ;
      }



  if(keyCode === 32)  {
    Matter.Body.setPosition(ball.body , {x:mouseX,y:mouseY})
      }
    }
