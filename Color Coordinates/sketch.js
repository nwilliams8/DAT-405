//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//02_Nested For-Loop - Console

function setup() {
  createCanvas(400, 400);
  size = 100
  this.shape2_fill = color(random(255), random(255), random(255));
  this.shape3_fill = color(random(255), random(255), random(255));
  this.shape4_fill = color(random(255), random(255), random(255));
  this.shape1_fill = color(random(255), random(255), random(255));
}
function draw() {
    fill(shape1_fill)
    ellipse(size, size, size, size);
    fill(shape2_fill)
    ellipse(size * 2, size, size, size);
    fill(shape3_fill)
    ellipse(size, size * 2, size, size);
    fill(shape4_fill)
    ellipse(size * 2, size * 2, size, size);

}
function mousePressed() {
  var d1 = dist(mouseX, mouseY, size, size)
  var d2 = dist(mouseX, mouseY, size*2, size)
  var d3 = dist(mouseX, mouseY, size, size*2)
  var d4 = dist(mouseX, mouseY, size*2, size*2)
  if (d1 < size/2) {
    shape1_fill = color(random(255), random(255), random(255))
  } else if (d2 < size/2) {
    shape2_fill = color(random(255), random(255), random(255))
  } else if (d3 < size/2) {
    shape3_fill = color(random(255), random(255), random(255))
  } else if (d4 < size/2) {
    shape4_fill = color(random(255), random(255), random(255))
  }
}
