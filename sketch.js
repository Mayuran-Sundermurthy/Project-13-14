var bow , arrow,  background,score, arrow, red, blue, green, pink;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redGroup, blueGroup, greenGroup, pinkGroup, arrowGroup;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  createEdgeSprites();
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);   
  bow.addImage(bowImage); 
  bow.scale = 1;
  score = 0;
  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();
  arrowGroup.debug = true; 
  redGroup.debug = true;
  blueGroup.debug = true;
  pinkGroup.debug = true;
  background.depth = score.depth;
  score.depth = score.depth +1;
}

function draw() {
 background(0);
 
 text("Score: " + score,50,20);
 console.log(score);
 
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  if(arrowGroup.isTouching(redGroup)){
    score = score + 10;
    redGroup.destroyEach();
    arrowGroup.destroyEach();
  }

  if(arrowGroup.isTouching(blueGroup)){
    score = score + 5;
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
  }

  if(arrowGroup.isTouching(greenGroup)){
    score = score + 2;
    greenGroup.destroyEach();
    arrowGroup.destroyEach();       
  }

  if(arrowGroup.isTouching(pinkGroup)){
    score = score + 1;
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
  }

  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }

  if(select_balloon == 2){
    blueBalloon();
  }

  if(select_balloon == 3){
    greenBalloon();
  }

  if(select_balloon == 4){
    pinkBalloon();
  }

  }
  
  
  
  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

 
}


function redBalloon() {
  red = createSprite(200,0);
  red.x = Math.round(random(30,370));
  red.addImage(red_balloonImage);
  red.velocityY = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red);

  
 
}

function blueBalloon() {
  //write code for spwaning blue balloons
  blue = createSprite(200,0);
  blue.x = Math.round(random(30,370))
  blue.velocityY = 3;
  blue.addImage(blue_balloonImage);
  blue.lifetime = 150;
  blue.scale = 0.1; 
  blueGroup.add(blue);

  
}

function greenBalloon() {
  //write code for spwaning green balloons
  green = createSprite(200,0);
  green.x = Math.round(random(30,370))
  green.addImage(green_balloonImage);
  green.velocityY = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenGroup.add(green);
  
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  pink = createSprite(200,0);
  pink.x = Math.round(random(30,370));
  pink.addImage(pink_balloonImage);
  pink.velocityY = 3;
  pink.lifetime = 150;
  pink.scale = 1.3;
  pinkGroup.add(pink);
  
  
}
