var words = ["rainbow", "heart", "purple", "friendship"];
var index = 0;
var num = 23;


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  fill(255);
  textSize(32);
  text(words[index], 12, 200);
}
  function mousePressed() {
    index = index + 1;
}



