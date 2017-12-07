//Create two variables that will store the new objects from the class Circle
let circleArray = [];
let arraySize = 700;
var CheckboxReverse;
let lowSpeed = (0)
let highSpeed = (100)
function setup() {
  createCanvas(500, 500);
  background(160);
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var rd = random(255);
  var gr = random(255);
  var bl = random(255);
  this.Shape = random(1)
  aSlider = createSlider(0, 255, 255);
  aSlider.position(500, 500)
  dSlider = createSlider(0.0005, 10, 1)
  dSlider.position(500, 400)
  fSlider = createSlider(10, 50, 30)
  fSlider.position(500, 300)
  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle(width/2, height/2, random(-0.025, 0.025), random(-0.025, 0.025), random(5));
  }
}
function draw() {
  var a = aSlider.value();
  var from = color(r,g,b, a);
  var to = color(rd, gr, bl, a);
  //fillcol = lerpColor(this.from, this.to, this.Shape);
  //fill(fillcol);
  var
  setFrameRate(fSlider.value());
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();
  }
}

//Definition of the class Circle
class Circle{

  constructor(x, y, speedX, speedY, size){
    this.angle = 0
    this.x = x;
    this.y = y;
    this.speedX = speedX
    this.speedY = speedY
    this.size = size
  }
  //Class function that takes care of motion and collision
  moveFunction(){
    if (this.speedX > 0){
      this.x = this.x + cos(this.angle)
    } else if (this.speedX < 0) {
      this.x = this.x - cos(this.angle)
    }
    this.y = this.y + sin(this.angle)
    this.angle += this.speedX
    this.angle += this.speedY
    push();
    this.angle += this.speedX * dSlider.value();
    this.angle += this.speedY * dSlider.value();
    pop();
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

    //Based on boundaries collision, reverse direction for x and y


  //Class function that displays the ellipse
  displayCircle(){
    this.Shape = random(1)
    noStroke()
    ellipse(this.x, this.y, this.size, this.size);
  }
}
