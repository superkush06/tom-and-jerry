var bg, jerry, tom;
var jerryImg, tomImg, jerry2, jerry3, tom2, tom3,bgImg;
function preload() {
    jerryImg = loadImage("images/mouse1.png");
    tomimg = loadImage("images/cat1.png");
    jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3 = loadImage("images/mouse4.png");
    tom2 = loadAnimation("images/cat2.png","images/cat3.png");
    tom3 = loadImage("images/cat4.png");
    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    jerry = createSprite(200,700,100,100);
    jerry.addImage("jerryImg",jerryImg);
    jerry.scale = 0.2;
    tom = createSprite(900,700,100,100);
    tom.addImage("tomImg",tomImg);
    tom.scale = 0.2;
}

function draw() {
    background("bgImg", bgImg);
    keyPressed();
    if(cat.x - mouse.x < (cat.width - mouse.width) / 2) {
        tom.velocityX = 0;
        tom.addImage("happy_tom",tom3);
        tom.changeImage("happy_tom");
        jerry.addImage("happy_jerry",jerry3);
        jerry.changeImage("happy_jerry");
    }
    drawSprites();
}


function keyPressed(){

  if(keyCode == LEFT_ARROW) {
      jerry.addAnimation("jerry",jerry2);
      jerry.changeAnimation(jerry);
      tom.addAnimation("tom_running",tom2);
      tom.changeAnimation("tom_running");
      tom.velocityX = -3;
  }
}