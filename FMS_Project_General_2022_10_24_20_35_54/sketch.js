//Setup is only executed once immediately after running
function setup() {
 createCanvas(400, 500);
}

//draw is executed infinitely while the program runs
let choice = 0;
let x = 90;
function draw() {
  clear()
  print(choice)
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
  }
}

function renderMainMenu() {
  stroke('black');
  clear();
  background('white');
  textSize(22);
  fill(40);
  text('Hello, User', 40, 50, 200, 200);
  
  let img1;
  function preload() {
    img1 = loadImage('assets/ex1');
  }
  
  let col = color('#6699ff');
  btn1 = createButton('Exercise 1');
  btn1.position(40, 120);
  btn1.style('background-color', col);
  btn1.mousePressed(() => {choice = 1;
                           removeElements();
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

function renderGame1() {
 //console.log('here');
 background(220);
 square(x, 220, 55);
 x = x+1;
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
 background(300);
  textSize(20);
 fill(40);
 text('Welcome to exercise 3!', 100, 50, 300, 200);
  textSize(10);
  strokeWeight(0);
  text('Please read the description below before you begin:',50,90,300,200 );
  text('This is a fun game about drawing shapes to train motor skills. You will be asked to trace a variety of shapes with your finger across the screen. The intelligent system will track whether or not the trace is accurate and there will be a point system to track your progress', 50,100,300,150)
  text('When you are ready please tap the "begin" button.', 50,180,300,200)
  
  btn3Begin = createButton('Begin');
  btn3Begin.position(160, 240);
  btn3Begin.style('background-color', cos);
  btn3Begin.size(60);
  btn3Begin.mousePressed(() => {choice = 3;
                           Elementsgoeshere();
                          }
                   );
}
function beginGame3(){
  text('Please trace the displayed shape:')
  text('')
}
}
