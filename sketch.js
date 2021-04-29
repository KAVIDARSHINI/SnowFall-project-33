const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snows = []; 
var engine, world;
var backImage;
var girl,girlImage;
var invisibleGround;


function preload(){
  getBackgroundImage();

  girlImage = loadImage("girl.png");
}

function setup() {
  var canvas = createCanvas(1500,700);
  canvas.position(18,10);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


  invisibleGround = createSprite(750,670,1500,7);
  invisibleGround.shapeColor = "black";
  invisibleGround.visible = false;

  girl = createSprite(300,590,20,20);
  girl.addImage(girlImage);
  girl.scale = 0.3;
}

function draw() {
  if(backImage){
    background(backImage);  
    textSize(30);
    fill("black");
    
  }

  if(keyDown ( "space")){
    girl.velocityY = -15;
  }

  girl.velocityY = girl.velocityY + 0.8;
  girl.collide(invisibleGround);
  
  if(frameCount % 4 === 0){
    snows.push(new Snow(random(width/2-700,width/2+700), 10,10));
}

for (var s = 0; s < snows.length; s++) {

  snows[s].display();
}



   

  drawSprites();
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var JSONresponse = await response.json();
  console.log(JSONresponse);
  var dt = JSONresponse.datetime;
  console.log(dt);

  hour = dt.slice(11,13);
  console.log(hour);

  if(hour >= 03 && hour <= 09 ){
    back = "snow1.jpg";
  } else if(hour >= 09 && hour <= 15){
    back = "snow2.jpg";
  } else {
    back = "snow3.jpg";
  }

  backImage = loadImage(back);

}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
     girl.x = girl.x + 20;
  } else if(keyCode === LEFT_ARROW){
     girl.x = girl.x - 20;
  } 

  

}

