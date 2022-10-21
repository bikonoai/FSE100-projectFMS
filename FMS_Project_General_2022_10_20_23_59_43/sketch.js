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
  clear();
  background(220);
  textSize(22);
  fill(40);
  text('Hello, User', 40, 50, 200, 200);
  
  btn1 = createButton('Exercise 1');
  btn1.position(40, 120);
  btn1.mousePressed(() => {choice = 1;
                           removeElements();
                          }
                   );
  
  btn2 = createButton('Exercise 2');
  btn2.position(40, 220);
  
  btn3 = createButton('Exercise 3');
  btn3.position(40, 320);
  
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
}

function renderGame3(){
 clear();
 background(220);
}
