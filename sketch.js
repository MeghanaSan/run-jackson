var runner, runner_1;
var path, pathImg;

function preload(){
  //pre-load images

  pathImage = loadImage("path.png");
  runner_1 = loadAnimation("path.png");
  runner_1 = loadAnimation("Runner-1.png", "Runner-2.png");
  
 
}

function setup(){
  createCanvas(400,400);
  background("black")
  //create sprites here

  path = createSprite(200,200);
  path.addImage("path", pathImage);
  path.velocityY= 4;
  
  runner = createSprite(200,310,10,10);
  runner.addAnimation("Running", runner_1);
  runner.scale = 0.07;
  
  invisibleWall = createSprite(15,200,100,400);
  invisibleWall.visible = false;

  invisibleWall_2 = createSprite(390,200,100,400);
  invisibleWall_2.visible = false;


  
  
  

  
}

function draw() {
  background(0);

  runner.x = World.mouseX;
  
  if (path.y > 400){
    path.y = height/2;
  }

  runner.collide(invisibleWall);
  runner.collide(invisibleWall_2);

drawSprites();
}
