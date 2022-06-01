function setup() {
  background(200);
  size(1000, 1000);
  i = 0;
  options[] = {0, 200};
  while (i <= 100) {
    colourRect(options);
    i++;
  }
}

function draw() {
  fill(options[int(random(2))], options[int(random(2))], options[int(random(2))]);
  rect(int(random(800)), int(random(800)), int(random(200)), int(random(200)));
}
