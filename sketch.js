var ship = [];
var invasion = 10;

function setup() {
  createCanvas(800, 750);
  

}

function draw() {
   background(0,0,35,25); 
 //space
   var galaxy = { 
   locationX : random(width),
   locationY : random(height),
   size : random(3,6)
 }
   ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
   ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
 

  
          
  invasion++;


  for (var f = 0; f < ship.length; f++) {
    ship[f].update();
  }

  if (invasion > 90) {
    var newShip = new Jitter(random(50, 750), -90);
    ship.push(newShip);
    invasion = 0;
  }

  for (var u = ship.length - 3; u >= 2; u--) {
    if (ship[u].invasion > 10) {
    }
  }
}

function Jitter(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 3;
  this.c = color(random(0, 125), random(0, 255), random(0, 255));
  this.update = function() {
    this.y += this.speed;

    drawUfo(this.x, this.y, this.c);
  };
}

function drawUfo(x, y, HullColor) {
  push();
  translate(x, y);

  stroke(0);
  strokeWeight(5);


  noStroke();

  fill(HullColor);
  ellipse(0, 35, 30, 50);
  ellipse(0, 25, 60, 35);
  stroke(HullColor);
  strokeWeight(5);

  noStroke();
  fill(255);
  ellipse(0, 25, 25, 25);

  noStroke();
  fill(255);
  ellipse(7, 7, 7, 7);

  noStroke();
  fill(255);
  ellipse(-7, 7, 7, 7);


  pop();
}