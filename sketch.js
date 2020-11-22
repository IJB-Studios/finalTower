const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Engine = Matter.Engine
const Constraint = Matter.Constraint
var engine, world
var boxGroup;
var polygonImage;
var a;
var score = 0;
var circles=[];
var polygon;
var bgSwitch = 0


function preload(){
  polygonImage = loadImage("polygon.png")
}



function setup() {
  boxGroup = new Group();
  engine = Engine.create()
  world = engine.world
  Engine.run(engine)
  createCanvas(800,800);
  stroke(255)
  polygon = Bodies.circle(50, 200, 20)
  World.add(world, polygon)
  sling = new SlingShot(polygon, {x: 100, y: 200}) 
  //creating ground
  ground = new Ground(390, 300, 250, 10)
  //level1
  block1 = new Box(300, 275, 30, 40)
  block2 = new Box(330, 275, 30, 40)
  block3 = new Box(360, 275, 30, 40)
  block4 = new Box(390, 275, 30, 40)
  block5 = new Box(420, 275, 30, 40)
  block6 = new Box(450, 275, 30, 40)
  block7 = new Box(480, 275, 30, 40)
  //level2
  block8 = new Box(330, 235, 30, 40)
  block9 = new Box(360, 235, 30, 40)
  block10 = new Box(390, 235, 30, 40)
  block11 = new Box(420, 235, 30, 40)
  block12 = new Box(450, 235, 30, 40)
  //level3
  block13 = new Box(360, 195, 30, 40)
  block14 = new Box(390, 195, 30, 40)
  block15 = new Box(420, 195, 30, 40)
  //top
  block16 = new Box(390, 155, 30, 40)

  
}



function draw() {
  //camera.zoom=camera.zoom+1
  getTime()
  if (bgSwitch===0) {
  background(210);
  }
  else  {background(40)}
  ground.display()
  sling.display()
  fill("skyblue") 
  block1.display()
  block1.score()
  block2.display()
  block2.score()
  block3.display()
  block3.score()
  block4.display()
  block4.score()
  block5.display()
  block5.score()
  block6.display()
  block6.score()
  block7.display()
  block7.score()
  fill("pink")
  block8.display()
  block8.score()
  block9.display()
  block9.score()
  block10.display()
  block10.score()
  block11.display()
  block11.score()
  block12.display()
  block12.score()
  fill("aqua")
  block13.display()
  block13.score()
  block14.display()
  block14.score()
  block15.display()
  block15.score()
  fill("orange")
  block16.display()
  block16.score()
  imageMode(CENTER)
  image(polygonImage, polygon.position.x, polygon.position.y, 40, 40)
 drawSprites();
 text("Score: "+score, 50, 50)
}

function mouseDragged() {
  Body.setPosition(polygon, {x: mouseX, y: mouseY})
}

function mouseReleased() {
  sling.fly()
}

function keyPressed() {
  if (keyCode === 32) {
    Body.setPosition(polygon, {x:50, y:200})
    sling.attach(polygon)
  }
}

async function getTime() {
  var response = await fetch ("http://worldclockapi.com/api/json/utc/now")
  var responseJSON = await response.json()
  var dateTime = responseJSON.currentDateTime;
  var hour = dateTime.slice(11, 13)
  if (hour >= 06 && hour <= 16) {
    bgSwitch = 0
  } else {
    bgSwitch = 1
  }

}