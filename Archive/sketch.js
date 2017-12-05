//Create two variables that will store the new objects from the class Circle
let circleArray = [];
let arraySize = 1000;

function setup() {
  createCanvas(500, 500);
  background(160);
  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle(width/2, height/2, random(-0.05, 0.05), random(-0.05, 0.05), random(1, 10));
  }
}

function draw() {;
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();
  }
}

//Definition of the class Circle
class Circle{

  constructor(x, y, speedX, speedY, size){
    this.angle = 0
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
    this.a = 255;
    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.from = color(this.rd, this.grn, this.bl);
    this.to = color(this.r, this.g, this.b);
    this.fillcol = lerpColor(this.from, this.to, random(1))
  }

  //Class function that takes care of motion and collision
  moveFunction(){
    this.x = this.x + cos(this.angle)
    this.y = this.y + sin(this.angle)

    this.angle += this.speedX/2
    this.angle += this.speedY/2

    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }



    //Based on boundaries collision, reverse direction for x and y

  }

  //Class function that displays the ellipse
  displayCircle(){
    noStroke()
    fill(this.fillcol);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
