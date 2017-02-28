
function setup() {
   createCanvas (600, 400);
}

function draw() {
   background(0);
   stroke(255);
   strokeWeight(4);
   noFill();
   if(mouseX > 250) {
   ellipse(300, 200, 100, 100);
} 
if (mouseX > 150) {
 rect(300, 200, 100, 100); 
} 
if (mouseX > 50) {
  line(0, 0, width, height);

}
   
}
  

