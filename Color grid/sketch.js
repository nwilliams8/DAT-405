
let size = 50;
function setup() {
  createCanvas(505, 505);
  //No stroke for shapes
}

//Rendering function
function draw() {
  background(0);
  var mouse1 = map(mouseY, 0, height, 0, 255);
  var mouse2 = map(mouseX, 0, width, 0, 255);
  var mouse3 = map(mouseY, 0, width, 255, 0);

  var color1 = color(255, 37, 54, 255);
  var color2 = color(26, 194, 203, mouse1);
  var color3 = color(26, 194, 203, mouse2);
  var color4 = color(239, 108, 46, mouse3);

    for (let y = 0; y < height; y+=size) {
      for (let x = 0; x < width; x+=size){
        if (mouseX>x && mouseX<x+size && mouseY>y && mouseY<y+size) fill(color1);
        else if (mouseX>x && mouseX<x+size) fill(color2);
        else if (mouseY>y && mouseY<y+size) fill(color3);
        else fill(color4);
        rect(x, y, size, size);
      }
    }
}
