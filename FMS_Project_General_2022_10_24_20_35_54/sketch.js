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
 background(220);
  textSize(20);
 fill(40);
 text('The exercise 3 is succesfully laucnhed', 40, 390, 200, 200);
}
