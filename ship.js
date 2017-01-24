// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function Ship() {
  this.x = width/2;
  this.xdir = 0;
  this.shipHeight = 60;
  this.shipWidth = 20;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height - 20, this.shipWidth, this.shipHeight);
  }

  this.setDir = function(dir) {
    this.xdir = dir * 5;
  }

  this.move = function(dir) {
    if (this.x + this.xdir >= 0 && this.x + this.xdir <= 600)
      this.x += this.xdir;
  }

}
