
//Setup is only executed once immediately after running
let theta;

function setup() { 
  createCanvas(400, 500);
  theta = PI * 2 / 5;
}

//draw is executed infinitely while the program runs
let choice = 0;
let x = 90;
let starX=0;
let starY=0;
let p1;
let p2;
let counterStar;
let bestScore = 0;

function draw() {
 switch(choice) {
   case 0:
     renderMainMenu();
     break;
   case 1:
     renderGame1();
     break;
   case 2:
     renderGame2 ();
     break;
   case 3:
     renderGame3();
     break; 
   case 4:
     pauseGame();
  }
}

function renderMainMenu() {
  stroke('white');
  fill('black');
  clear();
  background('white');
  textSize(22);
  fill(40);
  text('Hello, User', 40, 50, 200, 200);
  
  counterStar = 0;
  
  let img1;
  function preload() {
    img1 = loadImage('assets/ex1');
  }
  
  let col = color('#6699ff');
  
  btn1 = createButton('Exercise 1');
  btn1.position(40, 120);
  btn1.style('background-color', col);
  btn1.mousePressed(() => {choice = 1;
                           clear();
                           removeElements();
                           //myStar(this.starX, this.starY, this.outRad, this.inRad);
                            p1 = random(width);
                            p2 = random(height);
                          }
                   );
  
  btn2 = createButton('Exercise 2');
  btn2.position(40, 220);
  btn2.style('background-color', col);
  btn2.mousePressed(() => {choice = 2;
                           removeElements();
                          }
                   );
  
  btn3 = createButton('Exercise 3');
  btn3.position(40, 320);
  btn3.style('background-color', col);
  btn3.mousePressed(() => {choice = 3;
                           removeElements();
                          }
                   );
  
  textSize(20);
  fill(40);
  text('Enjoy exercising!', 40, 390, 200, 200);
}

function mousePressed() {
  switch(choice) {
    case 1:
       //myStar(starX, starY, 50, 25).myClick();
        myClick();
  }
}

let star;
function renderGame1() {
  strokeWeight(4);
  stroke(0);
  fill(255, 204, 0);
  text("Tap on a star", 150, 100);
  
  let col = color('#6699ff');
  btnPause = createButton("Pause");
  btnPause.position(320, 30);
  btnPause.style('background-color', col); 
  btnPause.mousePressed(() => {
                                choice = 4;
                                removeElements();
                              }
                       );
  
 
  star = new myStar(p1, p2, 50, 25);
}

function pauseGame () {
  clear();
  background(220);
  // textSize(20);
  // fill(40);
  text("You paused the game", 100, 70);
  
  let col = color('#6699ff');
  btnResume = createButton("Resume the game");
  btnResume.position(50, 150);
  btnResume.style('background-color', col); 
  btnResume.mousePressed(() => {
                                choice = 1;
                                removeElements();
                                clear();
                              }
                       );
  
  
  btnMenu = createButton("Go back to main menu");
  btnMenu.position(50, 250);
  btnMenu.style('background-color', col); 
  btnMenu.mousePressed(() => {
                                choice = 0;
                                removeElements();
                                clear();
                              }
                       );
  
  //text("Your best score is " + bestScore, 50, 300);
  
}

function renderGame2 () {
 clear();
 background(220);
 textSize(20);
 fill(40);
 text('The exercise 2 is succesfully laucnhed', 40, 390, 200, 200);
}

function renderGame3(){
 clear();
 background(220);
  textSize(20);
 fill(40);
 text('The exercise 3 is succesfully laucnhed', 40, 390, 200, 200);
}

//STAR DEFINITION BELOW

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

function myClick() {
  var d = dist(mouseX, mouseY, p1, p2);
  if (d < 25) {
    clear();
    p1 = random(width);
    p2 = random(height);
    myStar(p1, p2, 50, 25);
    counterStar += 1;
  }
  
  // if (counter > bestScore) {
  //   bestScore = counter;
  // }
  
  text("Your score: " + counterStar, 10, 50);
}
