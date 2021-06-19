function Movement(){
    // move with arrow keys 
  if (keyDown("UP_ARROW")) {
    player.y -= 10
    player.changeImage("front")
    playerSprite = "up"
  }
  if (keyDown("DOWN_ARROW")) {
    player.y += 10
    player.changeImage("back")
  }
  if (keyDown("RIGHT_ARROW")) {
    player.x += 10
    player.changeImage("right")
    playerSprite = "right"
  }
  if (keyDown("lEFT_ARROW")) {
    player.x -= 10
    player.changeImage("left")
    playerSprite = "left"
  }
if (keyDown("a")) {
  camera.zoom = camera.zoom - 0.1;
}

}