var nums = [100, 25, 46, 72];

var num = 23;


function setup() {
  createCanvas(500, 400);
  
}

function draw() {
  background(8);
  
  for (var i = 0; i < 4; i++) {
    stroke(255);
    noFill();
    ellipse(i * 100 + 100, 200, nums[i], nums[i]);
    
  }
 // ellipse(100, 200, num, num);
  
  //ellipse(200, 200, nums[2], nums[2]);
}



