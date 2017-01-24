// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

var ship;
var rocket;
var flowers = [];
var flowerRockets = [];
var score = 0;
var level = 1;
var lifes = 3;

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  var shipColorX = random(255);
  var shipColorY = random(255);
  var shipColorZ = random(255);
  for (var i = 0; i < 8; i++) {
    flowers[i] = new Flower(i * 60 + 60, 60, shipColorX, shipColorY, shipColorZ);
  }
}

function draw() {
  if (lifes == 0) {
    textSize(62);
    text("GAME OVER", width / 6, height / 2);
  } else {
    background(30);
    ship.show();
    ship.move();

    textSize(18);
    text("SCORE : " + score, width / 100, height / 20);
    textSize(18);
    text("LEVEL : " + level, width - 90, height / 20);
    textSize(18);
    text("LIFES : " + lifes, width - 85, height - 15);

    if (flowers.length == 0) {
      var shipColorX = random(255);
      var shipColorY = random(255);
      var shipColorZ = random(255);

      level++;
      for (var i = 0; i < 8; i++) {
        flowers[i] = new Flower(i * 60 + 60, 60, shipColorX, shipColorY, shipColorZ);
      }
    }

    if (rocket) {
      rocket.show();
      rocket.move();
      for (var j = 0; j < flowers.length; j++) {
        if (rocket.hits(flowers[j])) {
          flowers[j].destroy();
          rocket.evaporate();
        }
      }
    }

    for (var i = 0; i < flowers.length; i++) {
      var randomNb = random(100);
      if (randomNb < level / 2) {
        var flowerRocket = new FlowerRocket(flowers[i].x, flowers[i].y + flowers[i].r);
        flowerRockets.push(flowerRocket);
      }
    }

    for (var i = 0; i < flowerRockets.length; i++) {
      flowerRockets[i].show();
      flowerRockets[i].move();
      if (flowerRockets[i].y > height) {
        flowerRockets[i].evaporate();
      }
      if (flowerRockets[i].toDelete) {
        flowerRockets.splice(i, 1);
      }

      if (flowerRockets[i]
        && flowerRockets[i].y - 15 >= height - 60
        && flowerRockets[i].x >= ship.x - 10
        && flowerRockets[i].x <= ship.x + 10) {
        flowerRockets[i].evaporate();
        lifes--;
      }
    }

    var edge = false;

    for (var i = 0; i < flowers.length; i++) {
      flowers[i].show();
      flowers[i].move();
      if (flowers[i].x + flowers[i].r > width - 10 || flowers[i].x - flowers[i].r < 0) {
        edge = true;
      }
    }

    if (edge) {
      for (var i = 0; i < flowers.length; i++) {
        if (flowers[i].y > 50) {
          flowers[i].shiftUp();
        } else {
          flowers[i].shiftDown();
        }
      }
    }

    for (var i = flowers.length - 1; i >= 0; i--) {
      if (flowers[i].toDelete) {
        flowers.splice(i, 1);
        score++;
      }
    }

    if ((rocket && rocket.toDelete) || (rocket && rocket.y < 0)) {
      rocket = null;
    }
  }
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' ') {
    if (!rocket) {
      rocket = new Rocket(ship.x, height - 50);
    }
  }
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  }
  if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
