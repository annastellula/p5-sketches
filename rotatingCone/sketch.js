function setup(){
  createCanvas(1000, 1000, WEBGL);
}

function draw(){
  background(200);
  rotateX(frameCount * 0.1);
  rotateZ(frameCount * 0.01);
  cone(300, 400);
}