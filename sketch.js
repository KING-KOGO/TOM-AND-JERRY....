var bgImg;
var cat,catSImg,catWImg,catStImg;
var mouse,mouseTImg,mouseGImg,mouseWImg;
function preload() {
 
    bgImg = loadImage("images/garden.png");
    catSImg=loadAnimation("images/cat1.png");
    catWImg=loadAnimation("images/cat2.png","images/cat3.png");
    catSTImg=loadAnimation("images/cat4.png");
    mouseTImg=loadAnimation("images/mouse3.png","images/mouse2.png");
    mouseGImg=loadAnimation("images/mouse1.png");
}    

function setup(){
   createCanvas(1200,600);
    mouse=createSprite(200,450,10,10);
    mouse.addAnimation("teasing",mouseTImg);
    mouse.addAnimation("gifting",mouseGImg);
    mouse.scale=0.15;
    cat=createSprite(1000,450,10,10);
    cat.addAnimation("sitting",catSImg);
    cat.addAnimation("standing",catSTImg);
    cat.addAnimation("walking",catWImg);
    cat.scale=0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
      cat.velocityX=0;
      cat.changeAnimation("sitting",catSImg);
      mouse.changeAnimation("gifting",mouseGImg);
    }
    drawSprites();
}


function keyPressed(){
   if(keyCode===LEFT_ARROW){
     //cat.changeAnimation("standing",catSTImg);
     cat.velocityX=-4;
     cat.changeAnimation("walking",catWImg);
   }
  




}
