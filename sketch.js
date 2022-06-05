
var trex ,trex_running;
var edges;
var ground, ground_img;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_img = loadImage("ground2.png")
  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  fill("red")
  
  trex = createSprite(50,160,10,10)
  trex.addAnimation("running",trex_running)
  edges = createEdgeSprites() // group category

    trex.scale = 0.5
    trex.x = 50

    ground = createSprite(300,180,600, 10)
    ground.addImage("ground_running",ground_img)
    ground.velocityX = -2
    
}

function draw(){
  background("lightblue")
  if(keyDown("space")){
    trex.velocityY = -10
  }
  
  if(ground.x <0){
    ground.x = width/2
  }
  console.log(trex.y)
  // gravity
  trex.velocityY =  trex.velocityY +0.5
  trex.collide(ground)
  drawSprites()
}
