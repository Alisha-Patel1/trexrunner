
var trex ,treximage;
function preload(){
  treximage=loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundimage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,150,20,20)
  trex.addAnimation("trexLabel",treximage)
 trex.scale=0.7

 ground=createSprite(300,190,600,10)
  ground.addImage("groundLabel",groundimage)
}

function draw(){
  background("lightgrey")

  if(keyDown("space")){
    trex.velocityY=-10
  }
trex.velocityY=trex.velocityY+2

trex.collide(ground)

  drawSprites();

}
