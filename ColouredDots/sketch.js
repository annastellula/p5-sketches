var spot = {
  x: 100,
  y: 50  
};

var col = {
  r: 255,
  g:0,
  b:0
};

function setup() {
  createCanvas(600,400);
  background = (0);
  
}

function draw() {
  col.r =random(0,150);
  col.g =random(0,100);
  col.b=random(0,155);
  spot.x = random(0, width);
  spot.y = random(0, height);
  fill(col.r, col.g, col.b);
  stroke(col.r, col.g, col.b, 100)
    ellipse(spot.x, spot.y, 5, 5)
   
  
}