//Player
var player;

//Player Sprites
var front,back,left,right;
var frontSword,backSword,leftSword,rightSword;
var playerSprite
//Map
var map, mapImg;

// water
var
 lightWater, lightWaterImage;

 var ship,shipImg1,shipImg2,shipImg3;
function preload() {
  //loading Images
  lightWaterImage = loadImage("Water.png")

  mapImg = loadImage("Map2.png")

  front = loadImage("Player_Sprites/frontSprite.png")
  back = loadImage("Player_Sprites/backSprite.png")
  left = loadImage("Player_Sprites/leftSprite.png")
  right = loadImage("Player_Sprites/rightSprite.png")

  frontSword = loadImage("Player_Sprites/frontSword.png")
  backSword = loadImage("Player_Sprites/backSword.png")
  leftSword = loadImage("Player_Sprites/leftSword.png")
  rightSword = loadImage("Player_Sprites/rightSword.png")

  shipImg1 = loadImage("Game_Assets/Objects/Other/Ship1.png")
  shipImg2 = loadImage("Game_Assets/Objects/Other/Ship2.png")
  shipImg3 = loadImage("Game_Assets/Objects/Other/Ship3.png")
}

function setup() {
  createCanvas(1600, 800);

  //Creating Water
  lightWater = createSprite(400, 400)
  lightWater.addImage("water", lightWaterImage)
  lightWater.scale = 5.0

  //Creating Map
  map = createSprite(400, 400)
  map.addImage("map", mapImg)
  map.scale = 3.0

  //Called Boundries Function from 'Boundries.js'
  Boundries();

  // player = createSprite(-380, -305, 50, 50);

  ship = createSprite(700,878,50,50)
  ship.addImage("ship1",shipImg1)
  ship.scale = 3.0
  ship.setCollider("rectangle",0,0,40,50)
  // ship.debug = true

  player = createSprite(-578,-312, 50, 50);
  player.addImage("front",front)
  player.addImage("back",back)
  player.addImage("left",left)
  player.addImage("right",right)

  player.addImage("frontSword",frontSword)
  player.addImage("backSword",backSword)
  player.addImage("leftSword",leftSword)
  player.addImage("rightSword",rightSword)
  player.scale = 1.1
  player.setCollider("rectangle",0,0,40,60)
  // player.debug = true


  // start camera
  camera.on()
}

function draw() {
  background('lightblue');
  //collision
  player.collide(lightGreenBoundry)
  player.collide(bridges)
  player.collide(darkgreenBoundry)
  player.collide(ship)

  // players movement with camera positions
  Movement();

  camera.x = player.x
  camera.y = player.y

  // if(player.y > 542){
  //   camera.y = 1050
  //   camera.x = -100
  // }
  // else{
  //   camera.x = -277
  //   camera.y = 10
  // }

  shipMovement();
 
  drawSprites();
  camera.zoom = 3;

  pointerPosX = mouseX
  pointerPosY = mouseY

}
