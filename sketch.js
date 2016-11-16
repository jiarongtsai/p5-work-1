function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(50);
	stroke(255);
	rectMode(CENTER);
	noFill();
	frameRate(10);
	drawRect1(windowWidth/4, windowHeight/2, 30, 6, 5);
	drawF(windowWidth/4*3-50, windowHeight/2, 35, 6, 5)
}

function drawRect1(x, y, r, seg, level) {
  if(level > 0){
		if(mouseX < width/2+100 ) {
    	rect(x, y, r, r);
    	level--;
    	for(var i=0; i<seg; i++){
				var xc = x+ cos(i*TWO_PI/seg) *map(mouseX, 0, height, 0, 2*r);
	      var yc = y+ sin(i*TWO_PI/seg) *map(mouseY, 0, width, 0, 4*r);
	      drawRect1(xc, yc, r, seg, level);
			}
    }
  }
}

function drawF(x, y, r, seg, level) {
	if(level > 0){
    // ellipse(x, y, r);
		if(mouseX > width/2-100){
    	rect(x, y, r, r);
    	level--;
    	for(var i=0; i<seg; i++){
				var xc = x+ cos(i*TWO_PI/seg+mouseX/200) *r;
	      var yc = y+ sin(i*TWO_PI/seg+mouseY/200) *r;
	      drawF(xc, yc, r, seg, level);
			}
    }
  }
}
