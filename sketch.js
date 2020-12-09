
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
   var Survivaltime=0;
var score =0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  
  monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  ground = createSprite(400,350,900,10);
 
  console.log(ground.x)


}


function draw() {
   ground.velocityX=-4;
     
  if(ground.x<0)
  {
    ground.x=ground.width/2;
  }
  background(220);
     stroke("white");
  textSize(20);
  fill("white")
  text("score:"+score,500,50);
  
    stroke("black");
  textSize(20);
  fill("black")
  text("Survival time:"+score,500,50);
    if (World.frameCount % 80 == 0)
    {
       food();
    }
  
   if (World.frameCount% 300 == 0)
     {obstacle=createSprite (280,325,10,40)
         obstacle.addImage(obstacleImage);
 obstacle.velocityX = -3;
obstacle.lifetime = 150;
obstacle.scale = 0.1; 
     }
 
if(keyDown("space")&& monkey.y>=100){
  monkey.velocityY=-12;
}
  monkey.velocityY=monkey.velocityY+0.8;
    

  monkey.collide(ground);


  drawSprites();
}

function food()
{
  banana=createSprite(0,Math.round(random(120, 200)), 10, 10)
    banana.addImage(bananaImage);
  banana.velocityX = 3;
  banana.lifetime = 150;
  banana.scale = 0.1;
}







































































