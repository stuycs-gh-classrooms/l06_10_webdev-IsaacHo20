var centerx;
var centery;
var gx;
var gy;
var theta;
var col;
var stretch;
var midline;

function setup() {
  frameRate(1);
  createCanvas(500, 500);
  centerx = width / 2;
  centery = height / 2;
  gx = 3 * width / 4;
  gy = centery;
  theta = 0;
  col = 0;
  stretch = width / 4;
  midline = height / 2;
  
  line(centerx, centery, gx, gy);
  circle(gx, gy, 50);
}

function draw() {
  background(col(150));
  fill(col);
  
  line(centerx, centery, gx, gy);
  circle(gx, gy, int(50));
  
  if (theta < 360) {
    theta += 6;
  }
  else {
    theta = 0;
  }
  col = theta * 255 / 360;
  
  gx = newX(stretch, centerx, theta);
  gy = newY(stretch, centery, theta);
}

function newX(radius, centx, t) {
  var x = radius * cos(radians(t)) + centx;
  return x;
}

function newY(radius, centy, t) {
  y = radius * sin(radians(t)) + centy;
  return y;
}
