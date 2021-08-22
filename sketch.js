var soldier, soldierImage, soldierAnimation;
var bg, bgImage;
var bulletImage;
var bulletGroup;
var enemy;
var enemyBulletGroup;
var enemyImage;
var enemyBulletImage;
var enemyChopperImage;
var chopperBulletImage;
var invisibleWall;
var rocket;
var rocketImage;
var shooterUpImage;

function preload() {
  soldierAnimation = loadAnimation("soldier1.png", "soldier2.png", "soldier3.png", "soldier4.png", "soldier5.png", "soldier6.png");
  /*
  bulletImage = loadImage("bullet.png");
  enemyImage = loadImage("enemy.png");
  enemyBulletImage = loadImage("enemyBullet.png");
  chopperImage = loadImage("chopper.png");
  chopperBulletImage = loadImage("choppeerBullet.png");
  rocketImage = loadImage("rocket.png");
  shooterUpImage = loadImage("soldierUp.png");
  shooterImage = loadImage("soldier1.png");
  */
  bgImage = loadImage("background1.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  shooter = createSprite(600, 500, 50, 50);
  shooter.addAnimation("shooter",shooterAnimation)
  shooter.addAnimation("shooterup",shooterUpImage)
  shooter.scale = 0.5;

  bg = createSprite(200,200,600,400);
  bg.addImage(bgImage);
}

function draw() {
  background(0,0,0);
  
  drawSprites();
}

