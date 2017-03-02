/*  Original Code by Jaap de Maat & Sion Fletcher - CSM GCD BA Y1 Unit 3 - Jan 2017
    edited by ANNA ANTROPOVA 
*/


function setup() {
  //set Canvas to size of window
  createCanvas(windowWidth, windowHeight);

  //Intoduction Page
    background(51);
    
  
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width)*4;
      pixels[index+0] =x;
      pixels[index+1] =random(255);
      pixels[index+2] =y;
      pixels[index+3] =255;
    }
  }
    updatePixels();
    
    
    
    
  //create Button object 1 (London)
  button1 = createButton('LONDON');
  button1.position(25, 20);
  //Load Data when Button 1 is Pressed
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

  //create Button object 2 (NEW YORK)
  button2 = createButton('NEW YORK');
  button2.position(25, 40);
  //Load Data when Button 2 is Pressed
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22New%20York%2C%20New%20York%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 3 (tokyo)
  button3 = createButton('TOKYO');
  button3.position(25, 60);
  //Load Data when Button 3 is Pressed
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Tokyo%2C%20Tokyo%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 4 (SAO PAULO)
  button4 = createButton('SAO PAULO');
  button4.position(25, 80);
  //Load Data when Button 4 is Pressed
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 5 (MELBOURNE)
  button5 = createButton('MELBOURNE');
  button5.position(25, 100);
  //Load Data when Button 5 is Pressed
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Melbourne%2C%20Melbourne%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
}


function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp;
  var windSpeed = data.query.results.channel.wind.speed;
  var windDirection = data.query.results.channel.wind.direction;
  
  //forcast data
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;

// HOW to get avarage of tempD2H+tempD2L?!?!
//var tempforcast1 = ((tempD2H+tempD2L)/2);
 



//print data to the console
//print(temp);
//print(windSpeed);
print(tempD2H);
print(tempD2L);
//print(tempforcast1);


 background(51);
  
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width)*4;
      pixels[index+0] =x;
      pixels[index+1] =random(windDirection);
      pixels[index+2] =y;
      pixels[index+3] =windSpeed * 10;
    }
  }
    updatePixels();

  //add data info in bottom left corner of the screen
  //for more information about using text in a P5js sketch visit:
  //http://creative-coding.decontextualize.com/text-and-type/
  
  textSize(windSpeed * 3);
  textFont("Futura");
  textAlign(LEFT);
     
    fill(255,0,0)
    text(windSpeed, 100, windowHeight - 100);
  textSize(21)
  fill(255,0,150)
    text("wind", 80, windowHeight - 50);
    text("speed", 80, windowHeight - 20);
textSize(30)    
    fill(255,0,0)
    text(temp, 200, windowHeight - 100);
    textSize(21)
    fill(255,0,150)
    text("t", 207, windowHeight - 50);
   textSize(30) 
    fill(255,0,0);
    text(windDirection, 300, windowHeight - 100);
    
    textSize(21)
    fill(255,0,150)
    text("wind", 300, windowHeight - 50);
    text("direction", 300, windowHeight - 20);
    
    // text(windangle, 30 windowHeight);

  //create ellipse and set width and height of the ellipse to windSpeed data
  fill(255);
  noStroke();
 ellipse(windowWidth / 2, windowHeight / 2, windSpeed * 3, windSpeed * 3);
  
   //create ellipse and set width and height of the ellipse to temp data
  noFill();
  strokeWeight(4);
  stroke(255);
ellipse(windowWidth / 4, windDirection, temp * 4, temp * 4); {
  
}

  
  
  //create rect and set rotation of rect to windDirection
translate(windowWidth / 2, windowHeight / 2);
 fill(255, 0,0);
  noStroke();
  angleMode(DEGREES); // Change the mode to DEGREES
  rotate(windDirection);

ellipse(0, 0, 150, 20);
  



}