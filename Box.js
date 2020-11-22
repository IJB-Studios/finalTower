class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution: 0.4,
        friction: 0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.visibility = 255;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    var angle = this.body.angle
    if (this.body.speed < 3) {
      push()
      rect(pos.x, pos.y, this.width, this.height)
      pop()
    } else {
      World.remove(world, this.body)
      push()

      this.visibility -= 5
      tint(255, this.visibility)
      pop();
    }
  }
  score(){
    if (this.visibility < 0 && this.visibility > -1005) {
      score++
    }
  }
}