// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function Flower(x, y, rgbX, rgbY, rgbZ) {
  this.x = x;
  this.y = y;
  this.r = 20;
  this.toDelete = false;
  this.xdir = 2;

  this.destroy = function() {
    this.toDelete = true;
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.shiftUp = function() {
    this.xdir *= -1;
    this.y -= this.r;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function() {
    noStroke();
    fill(rgbX, rgbY, rgbZ);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

}
