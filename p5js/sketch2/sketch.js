var r;
var g;
var b;
var a;

function setup() {
  createCanvas(480, 220);
}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(255);
  let c = color(r,g,b,a);
  quad(mouseX,mouseY,80,mouseX,mouseY,80,mouseX,mouseY);
  stroke(c)
}