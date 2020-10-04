var speed,weight,bullet, wall,thickness;

function setup() {
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  createCanvas(1800,400);
  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "grey";
  bullet.velocityX = speed;
}

function draw() {
  background("blue");
  text(damage,900,200);
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
bullet.velocityX=0;
var damage = (0.5 * weight * speed * speed) / (thickness * thickness* thickness);
textSize(20);
text(damage,700,200);
if(damage > 10){
  wall.shapeColor = "red";
}
if(damage < 10){
  wall.shapeColor = "green";
}
  }
  drawSprites();
}


 