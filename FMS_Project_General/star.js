let theta = PI * 2 / 5;

function myStar(starX, starY, outRad, inRad) {
  this.starX = random(width);
  this.starY = random(height);
  this.outRad = 50;
  this.inRad = 25;
  beginShape();
  
  for (let i = 0; i < 5; i++) {
   vertex(starX + cos(i * theta) * outRad, starY + sin(i * theta) * outRad);
   vertex(starX + cos((i + 0.5) * theta) * inRad, starY + sin((i + 0.5) * theta) * inRad);
  }
  endShape(CLOSE);
} 

this.display = function() {
  strokeWeight(4);
  stroke(0);
}

this.myClick = function() {
  //clear();
  var d = dist(mouseX, mouseY, this.starX, this.starY);
  if (d < this.inRad) {
    clear();
    this.myStar(this.starX, this.starY, this.outRad, this.inRad);
  }
}
