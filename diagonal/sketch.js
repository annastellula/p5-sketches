var ball = {
    x: 20, 
    y: 20,
   draw: function() {
     this.x = this.x + 1;
     this.y = this.y + 1
      ellipse(this.x, this.y, 20, 20);
      
    }
};

function setup() {
  createCanvas(1000, 1000);
  
}

function draw() {
 ball.draw();
}


