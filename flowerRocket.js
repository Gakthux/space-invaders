// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function FlowerRocket(x, y) {
  this.x = x;
  this.y = y;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(140, 210, 65);
    triangle(this.x - 5, this.y - 5, this.x, this.y + 5, this.x + 5, this.y - 5);
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hits = function(ship) {
    var d = dist(this.x, this.y, ship.x, ship.y);
    if (d <= ship.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.y = this.y + 5;
  }

}
