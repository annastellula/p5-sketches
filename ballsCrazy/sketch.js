var x = 0
var speed = 2;
var on = false;

var spot = {
  x: 0,
  y: 200  
};

var col = {
  r: 255,
  g:0,
  b:0
};

function setup() {
  createCanvas(600,400);
 
}

function draw() {
  if (on) {
    background(255);
  } else {
    background(0);
  }
  spot.x = random(0, width);
  fill(col.r, col.g, col.b, 100);
  stroke(255);
  
  ellipse(spot.x, spot.y, 100, 100)
}

function mousePressed () {
  if (mouseY > 100 && mouseY < 300) {
  on = !on

  }
}