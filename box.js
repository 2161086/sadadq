// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/urR596FsU68

function Box(x, y, w, c) {
  var options = {
    friction: 0.5,
    restitution: 1
  }
  this.body = Bodies.rectangle(x, y, w,options);

  this.w = w;
  this.c = c;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    blendMode(DODGE);
    fill(this.c);
    ellipse(0, 0, this.w);
    pop();

    if (dist(pos.x, pos.y, mouseX, mouseY) < windowWidth/10) {
      // blendMode(BLEND);
      this.c = 0;
    } else {
      this.c = c;
    }

  }
}