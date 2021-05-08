var invisibleground;
var bg, backgroundimg;

var pancakes;

var bear1img,bear1;

var obstaclesgroup;
var obstacle1,obstacle2;

var score;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var startimage,endimage;

var start,end

function preload(){
 // backgroundimg = loadImage("backgroundimg.png")
  bear1img = loadImage("bear.png")
  obstacle1 = loadImage("rocks_05.png")
  obstacle2 = loadImage("rocks-04.png")
  pancakes = loadImage("pancake.png")
  startimage = loadImage("start_button.png")
  endimage = loadImage("textGameOver.png")

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  
  invisibleground = createSprite(400,500,800,20)
 // invisibleground.visible= false

 // bg = createSprite(2000,0,4*width,height)
 // bg.addImage(backgroundimg)
  //bg.x = bg.width
 // bg.scale = 8

  bear1 = createSprite(60,450)
  bear1.addImage(bear1img)
 bear1.scale = 0.2
  
 obstaclesgroup = createGroup()
 score = 0;

 start = createSprite(displayWidth)
}

function draw() {
 background(255)

 
if(gameState === PLAY){
 invisibleground.velocityX = -8;
  if(invisibleground.x<0 ){
    
    invisibleground.x = invisibleground.width/2
  
  if(keyDown("space")&& bear1.y >= 100) {
    bear1.velocityY = -12;
   
}

bear1.velocityY = bear1.velocityY + 0.8
 bear1.collide(invisibleground)

 
 score = score + Math.round(frameCount / 60);

 spawnObstacles()
 spawnPancake()
}
 
 else if(gameState === END){
   bear1.velocityX = 0

 }


 if(bear1.isTouching(obstaclesgroup)){
   gameState = END;
 }
  drawSprites();

  text("Score :" + score, 400, 50)

}

function spawnObstacles(){
  if(frameCount % 100=== 0){
   var obstacle = createSprite(displayWidth-20,450)
  // obstacle.velocityX = -(6 + score/100)
   obstacle.velocityX = -6.5
   var rand = Math.round(random(1,2))
   switch(rand){
     case 1: obstacle.addImage(obstacle1)
             break;
     case 2 :obstacle.addImage(obstacle2)
             
             break;
        default: break;
   }
   obstacle.scale = 0.4
   obstacle.lifetime = 300;

   obstaclesgroup.add(obstacle);
  }
}

function spawnPancake(){
  if(frameCount % 60=== 0){
   var pancake = createSprite(displayWidth-20,400)
  // obstacle.velocityX = -(6 + score/100)
  pancake.addImage(pancakes)
   pancake.velocityX = -6.5
   pancake.y = Math.round(random(100,displayHeight-200))
   
   pancake.scale = 0.2
   pancake.lifetime = 300;

  }
  }
