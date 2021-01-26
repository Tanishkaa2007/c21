var fixedrect,movingrect;






function setup() {
  createCanvas(800,400);
fixedrect = createSprite(200,200,50,50);
movingrect = createSprite(300,200,80,20);
fixedrect.shapeColor = "green";
movingrect.shapeColor = "green";
fixedrect.debug = true;
movingrect.debug = true;
movingrect.velocityX = -5;
 fixedrect.velocityX = 5;
}

function draw() {
  background(0); 
  
  

  bounceOff(movingrect,fixedrect);
  drawSprites();
}

