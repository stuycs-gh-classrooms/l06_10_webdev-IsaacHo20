var ghrs;
var gmins;
var gsecs;
var centerx
var centery;
var gx;
var gy;
var theta;
var clockSize;
var secsHandSize;
var minsHandSize;
var hrsHandSize;

function setup () {
  createCanvas(500, 500);
  background(0);
  fill(0);
  
  ghrs = hour();
  gmins = minute();
  gsecs = second();
  centerx = width / 2;
  centery = height / 2;
  gx = 0.0;
  gy = 0.0;
  theta = 0;
  clockSize = 19 * width / 20;
  secsHandSize = 9 * clockSize / 20;
  minsHandSize = 4 * clockSize / 10;
  hrsHandSize = clockSize / 4;
}

function draw () {
  background(0);
  clockFace();
  drawHand("hours", ghrs);
  drawHand("minutes", gmins);
  drawHand("seconds", gsecs);
  updateTime();
}

function timeToAngle (type, time) {
  t = 0;
  
  if(type == "hours") {
    t = radians(time * 30 - 90);
  }
  else if(type == "minutes" || type == "seconds") {
    t = radians(time * 6 - 90);
  }
  
  print(type + ": " + time + ", " + + t);
  return t;
}

function drawHand (type, time) {
  t = timeToAngle(type, time);
  
  if (type == "hours") {
    //draw hour hand
    stroke(200, 200, 0);
    strokeWeight(5);
    line(centerx, centery, newX(hrsHandSize, centerx, t), newY(hrsHandSize, centery, t));
  }
  else if (type == "minutes") {
    //draw minute hand
    stroke(200, 100, 0);
    strokeWeight(3);
    line(centerx, centery, newX(minsHandSize, centerx, t), newY(minsHandSize, centery, t));
  }
  else if (type == "seconds") {
    //draw second hand
    stroke(200, 0, 0);
    strokeWeight(1);
    line(centerx, centery, newX(secsHandSize, centerx, t), newY(secsHandSize, centery, t));
  }
}//drawHand

function clockFace() {
  stroke(200);
  strokeWeight(5);
  circle(centerx, centery, clockSize);
  
  drawHand("hours", ghrs);
  drawHand("minutes", gmins);
  drawHand("seconds", gsecs);
}

function updateTime() {
  gsecs = second();
  gmins = minute() + (gsecs / 60);
  ghrs = hour() + (gmins / 60);
}

function newX(int radius, int centx, float t) {
  x = radius * cos(t) + centx;
  return x;
}

function newY(int radius, int centy, float t) {
  y = radius * sin(t) + centy;
  return y;
}
