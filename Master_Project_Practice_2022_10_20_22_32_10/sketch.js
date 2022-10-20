let circleX = 100;
let circleY = 0;
let speedX = 5;
let speedY = 3;

let recWidth = 80; // Width of the shape
let recHeight = 40;
let recX = 110; // Starting position of shape
let rec2X = 50;
let recY = 300;
let rec2Y = 100;
let recXSpeed = 2;
let rec2XSpeed = 3;
let recYSpeed = 6;
let rec2YSpeed = 5;

let triX1 = 150;
let triY1 = 100;
let triX2 = 180;
let triY2 = 50;
let triX3 = 140;
let triY3 = 60;
let tDx = 1;
let tDy = 2;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  
  fill("purple");
  stroke("green");
  strokeWeight(4);
  circle(circleX, circleY, 70);

  circleX = circleX + speedX;
  circleY = circleY + speedY;
  
  if(circleX < 0 || circleX > width) {
    speedX = speedX * -1;
  }
  
  if(circleY < 0 || circleY > height) {
     speedY = speedY * -1;
  }
  
  
  //second shape
  fill('blue');
  strokeWeight(3);
  stroke('red');
  rect(recX, recY, recWidth, recWidth,20);
  
  recX = recX + recXSpeed;
  recY = recY + recYSpeed;
  
  if(recX < 0 || recX > width) {
    recXSpeed = recXSpeed * -1;
  }
  
  if(recY < 0 || recY > height) {
     recYSpeed = recYSpeed * -1;
  }
  
  
  //third shape
  fill('yellow');
  strokeWeight(3);
  stroke('blue');
  rect(rec2X, rec2Y, recWidth, recHeight);
  
  rec2X = rec2X + rec2XSpeed;
  rec2Y = rec2Y + rec2YSpeed;
  
  if(rec2X < 0 || rec2X > width) {
    rec2XSpeed = rec2XSpeed * -1;
  }
  
  if(rec2Y < 0 || rec2Y > height) {
     rec2YSpeed = rec2YSpeed * -1;
  }
  
  
  //fourth shape
  fill("pink");
  stroke("grey");
  strokeWeight(4);
  triangle(triX1,triY1,triX2,triY2,triX3,triY3);
  
  triX1 += tDx;
  triY1 += tDy;
  triX2 += tDx;
  triY2 += tDy;
  triX3 += tDx;
  triY3 += tDy;
  
  if(triY1 < 0 || triY1 > height) {
    tDy *= -1;
  }
  
  if(triX2 < 0 || triX2 > width) {
    tDx = 0;
    tDY = 0;
  }
}