var ground,groundImage;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600, 600);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  
  console.log(ground.x);
  
  bananaGroup = createGroup();
 
 SurvivalTime = 0;
  
}


function draw() {
background("white");
  stroke("black")
 textSize(20);
  fill("black")
 SurvivalTime =  Math.ceil(frameCount/frameRate()); 
  text("SurvivalTime: "+ SurvivalTime, 100,50);
  
   if(keyDown("space")){
     monkey.velocityY = -4;
   }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  if(ground.x < 0){
   ground.x = ground.width/2;  
  }
  
  banana();
  obstacle();
 drawSprites();
  
}

function banana() {
 if(frameCount % 80 === 0){
   bananas = createSprite(200,200,20,20);
   bananas.addImage(bananaImage);
   bananas.scale = 0.1;
   bananas.y = Math.round(random(120,200));
   bananas.velocityX = -2;
   bananas.lifetime = 50;
   bananaGroup.add(bananas)
 } 
}

function obstacle(){
  if(frameCount % 300 === 0){
    obstacles = createSprite(200,310,20,20)
    obstacles.lifetime = 100;
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.2;
  }
}


