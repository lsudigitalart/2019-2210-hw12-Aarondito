var ship = [];
var invasion = 10;

function setup() {
  createCanvas(800, 750);
  

}

function draw() {
    background(3);

    
     
    noStroke();
    fill(255);
    ellipse(27, 100, 7, 7);
  
   
    noStroke();
    fill(255);
    ellipse(15, 725, 7, 7);
     
    noStroke();
    fill(255);
    ellipse(700, 715, 7, 7);
   
    noStroke();
    fill(255);
    ellipse(750, 700, 7, 7); 

    noStroke();
    fill(255);
    ellipse(27, 715, 7, 7);

     
    noStroke();
    fill(255);
    ellipse(715, 25, 7, 7);
     
    noStroke();
    fill(255);
    ellipse(605, 100, 7, 7);

     
    noStroke();
    fill(255);
    ellipse(575, 255, 7, 7);

     
    noStroke();
    fill(255);
    ellipse(589, 600, 7, 7);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   
    noStroke();
    fill(255);
    ellipse(27, 700, 7, 7);
  
  
    
    noStroke();
    fill(255);
    ellipse(98, 398, 7, 7);
   
    noStroke();
    fill(255);
    ellipse(400, 400, 7, 7);
  
   
    noStroke();
    fill(255);
    ellipse(10, 686, 7, 7);
  
   
    noStroke();
    fill(255);
    ellipse(365, 599, 7, 7);
  
   
    noStroke();
    fill(255);
    ellipse(39, 200, 7, 7);
  
   
    noStroke();
    fill(255);
    ellipse(2, 100, 7, 7);
  
  
  
          
  
          
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