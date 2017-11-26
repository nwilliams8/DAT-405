//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//04_Exercise01 - Loops and Random Color

let size = 50;

function setup() {
  createCanvas(500, 500);
  frameRate(10);
  noLoop();
  noStroke();
  from = color(random(255), random(255), random(255))
  to = color(random(255), random(255), random(255))
  scale(0.5, 0.5)
  background(lerpColor(from, to, random(-1)))

}

function draw() {
  //Run the nested loop for x, and y
  for (let y = 0; y < 100; y++) {
    for (let x = 0; x < 100; x++) {
      fill(lerpColor(from, to , random(1)))
      ellipse(random(500), random(500),  random(40), random(40))
      rotate(random(20), random(20))
      translate(random(50), random(50))

    }
  }
}
