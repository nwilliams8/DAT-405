//https://p5js.org
//https://p5js.org/learn/

//DAT405 / GAD405
//03_Colorlines (Exercise 01)
//Link all circles with individual lines
//Color of the line is the mix of the circle colors

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(700, 400);

  //Size of stroke
  strokeWeight(7);
  background(100);
  //No stroke for shapes
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  // top left to top right
  stroke(255,0,255, 5);
  line(50,50, width-50, 50);
  // top left tp bottom left
  stroke(0,255,255, 5);
  line(50,50, 50, height-50);
  // top right to bottom right
  stroke(255,165,0, 5);
  line(width-50, 50, width-50, height-50);
  // bottom left to bottom right
  stroke(255,255,0, 5);
  line(50, height-50, width-50, height-50);
  // top left to bottom right
  stroke(0,255,0 , 5);
  line(50, 50, width-50, height-50);




  noStroke();

  //top left
  fill(0, 0, 255);
  ellipse(50, 50, 100, 100);


  //Top right corner shape position and color
  fill(255, 0, 0);
  ellipse(width-50, 50, 100, 100);


  //Bottom left corner shape position and color
  fill(0, 255, 0);
  ellipse(50, height-50, 100, 100);


  //Bottom right corner shape position and color
  fill(255, 255, 0);
  ellipse(width-50, height-50, 100, 100);

}
