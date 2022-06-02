float ghrs, gmins, gsecs;
int centerx, centery;
float gx, gy;
int theta;
int clockSize, secsHandSize, minsHandSize, hrsHandSize;

void setup() {
  size(500, 500);
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

void draw() {
  background(0);
  clockFace();
  drawHand("hours", ghrs);
  drawHand("minutes", gmins);
  drawHand("seconds", gsecs);
  updateTime();
}

float timeToAngle(String type, float time) {
  float t = 0;
  
  if(type == "hours") {
    t = radians(time * 30 - 90);
  }
  else if(type == "minutes" || type == "seconds") {
    t = radians(time * 6 - 90);
  }
  
  println(type + ": " + time + ", " + + t);
  return t;
}

void drawHand(String type, float time) {
  //Check hw10_spin for this part
  float t = timeToAngle(type, time);
  
  if(type == "hours") {
    //draw hour hand
    stroke(200, 200, 0);
    strokeWeight(5);
    line(centerx, centery, newX(hrsHandSize, centerx, t), newY(hrsHandSize, centery, t));
  }
  else if(type == "minutes") {
    //draw minute hand
    stroke(200, 100, 0);
    strokeWeight(3);
    line(centerx, centery, newX(minsHandSize, centerx, t), newY(minsHandSize, centery, t));
  }
  else if(type == "seconds") {
    //draw second hand
    stroke(200, 0, 0);
    strokeWeight(1);
    line(centerx, centery, newX(secsHandSize, centerx, t), newY(secsHandSize, centery, t));
  }
}

void clockFace() {
  stroke(200);
  strokeWeight(5);
  circle(centerx, centery, clockSize);
  
  drawHand("hours", ghrs);
  drawHand("minutes", gmins);
  drawHand("seconds", gsecs);
}

void updateTime() {
  gsecs = second();
  gmins = minute() + (gsecs / 60);
  ghrs = hour() + (gmins / 60);
}

float newX(int radius, int centx, float t) {
  float x = radius * cos(t) + centx;
  return x;
}

float newY(int radius, int centy, float t) {
  float y = radius * sin(t) + centy;
  return y;
}
