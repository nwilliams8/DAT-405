//Create two variables that will store the new objects from the class Circle
let circleArray = [];
let arraySize = 200;
var CheckboxReverse;
var red;
var green;
var blue;
function setup() {
  var canvas = createCanvas(500, 500);
  var text = createDiv('Circular Motion')
  text.position(300, 50)
  text.style.fontSize = "50px";
  canvas.parent("myContainer");
  canvas.position(100, 80)
  background(255);
  aSlider = createSlider(0, 255, 255);
  aSlider.position(500, 40)
  dSlider = createSlider(0.0005, 10, 1)
  dSlider.position(500, 400)
  fSlider = createSlider(10, 60, 30)
  fSlider.position(500, 300)
  cSlider = createSlider(0, 255, 0)
  cSlider.position(500,200)
  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle(width/2, height/2, random(-0.025, 0.025), random(-0.025, 0.025), random(10));
  }
}
function draw() {
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
    this.r = random(225);
    this.g = random(225);
    this.b = random(225);
  }
  //Class function that takes care of motion and collision
  moveFunction(){
    if (this.speedX > 0){
      this.x = this.x + cos(this.angle)
    } else if (this.speedX < 0) {
      this.x = this.x - cos(this.angle)
    }
    this.y = this.y + sin(this.angle)
    this.angle += this.speedX/2
    this.angle += this.speedY/2
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
    this.fillcol = color(this.r, this.g, this.b, aSlider.value())
    fill(this.fillcol)
    noStroke()
    ellipse(this.x, this.y, this.size, this.size);
  }
}
