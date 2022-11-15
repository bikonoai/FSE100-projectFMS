//Setup is only executed once immediately after running
let playing;
function setup() {
  createCanvas(400, 500);
  playing = false;

}

//draw is executed infinitely while the program runs
let choice = 0;
let x = 90;
function draw() {
  //clear()
  //print(choice)
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
     testGame3();
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


// if (playing){ render game itself} else {all the code you have in game3}

function testGame3(){
  if(playing){
    beginGame3();
  }
  else{
    renderGame3();
  }
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
  text('This is a fun game about drawing shapes to train motor skills. You will be asked to trace a variety of shapes with your finger across the screen. The intelligent system will track whether or not the trace is accurate and there will be a point system to track your progress', 50,110,320,200)
  text('When you are ready please tap the "begin" button.', 50,180,300,200)
  
  let col1 = color(45, 223, 200, 50);
  btn3Begin = createButton('Begin');
  btn3Begin.position(160, 240);
  btn3Begin.style('background-color', col1);
  btn3Begin.size(60);
  btn3Begin.mousePressed(() => {    
    removeElements();
    clear();
    generateShape();
    playing=true;
  });
  
 
  
                   
}

let x1, w, h, x2, y2, y1;
//const shapePoints = [];

function generateShape() {
  x1 = 100;
  y1 = 150;
  
  w_rand = random(150);
  w = w_rand+100
  
  
  h_rand = random(200);
  h = h_rand+100
  
  print('x1:' +x1);
  print('y1:' +y1);
  print('w:' +w);
  print('h:' +h);
  x2 = x1 + w;
  y2 = y1 + h;
  
//   for (let i = x1; i <= x2; i++){
//     shapePoints.push = [i,y1];
//     shapePoints.Push = [i,y2];


//   }

//   for (let i = y1; i <= y2; i++){
//     shapePoints.push = [x1,i];
//     shapePoints.push = [x2,i];
//   }
  //if (mouseIsPressed){
    //(mouseDragged(event));
  //}
  
  fill('white');
  stroke('green');
  strokeWeight(20);
  rect(x1, y1, w, h);
}
const drawPoints = [];
function mouseDragged() {
    
//   let inLbar = event.clientX <= x1 + 10 && event.clientX >= x1 - 10 &&     event.clientY >= y1 - 10 && event.clientY <= y1+h+10;
  
//   print('inside x:'+inLbar)
  if (!playing && !started)
    return;
  print(event.clientX);
  print(event.clientY);
  ellipse(mouseX, mouseY, 24);
  //fill('red');
  
  calculateScore(mouseX, mouseY);
  drawPoints.push = [mouseX, mouseY]
  

  //How to know when we are at our destination?
  //event.clientX and event.clientY
  //x2, y2
  //compute the dist() between clientx/y and x2/y2
  //dist <= 10: good!
  
  
  return false;
}
let started = false;
function beginGame3(){
  //background(300);
  started = true;
  textSize(10);
  fill('black');
  stroke('white');
  textSize(15);
  text('Please fill in the displayed shape:',50,60,300,150);
  
  describe('White rect at center with bright green outline.');
  // print ('x-variable: ' + mouseX);
  // print ('y-variable: ' + mouseY)
  
  
  
  //mousePressed();

  fill('black');
  stroke('white');
  let score = ((corrCount/totalCount) * 100).toFixed(0);
  //let s = 
  textSize(15);
  text("Current Score: " + score +"%" , 50, 475, 350, 150);
  //text('');
  //stroke(30,70,200);
  //noFill();
  //rect(50,100,200,100);
  stroke('red');
  strokeWeight(8);
}
let totalCount = 0;
let corrCount = 0;
function calculateScore(X,Y){
  totalCount = totalCount + 1;
  //check if X and Y is within the shape
  
  //if so increment corrCount
  
  //always increment totalCount
  if ((X <= x2 && X >= x1) && (Y <= y2 && Y >= y1)){
    corrCount = corrCount + 1;
  }
}
// function mousePressed() {
//   fill('black');
//   ellipse(mouseX, mouseY, 5, 5);
//   // prevent default
//   return false;
// }







// //Setup is only executed once immediately after running
// let playing;
// function setup() {
//   createCanvas(400, 500);
//   playing = false;

// }

// //draw is executed infinitely while the program runs
// let choice = 0;
// let x = 90;
// function draw() {
//   clear()
//   print(choice)
//  switch(choice) {
//    case 0:
//      renderMainMenu();
//      break;
//    case 1:
//      renderGame1();
//      break;
//    case 2:
//      renderGame2 ();
//      break;
//    case 3:
//      testGame3();
//      break; 
//   }
// }

// function renderMainMenu() {
//   stroke('black');
//   clear();
//   background('white');
//   textSize(22);
//   fill(40);
//   text('Hello, User', 40, 50, 200, 200);
  
//   let img1;
//   function preload() {
//     img1 = loadImage('assets/ex1');
//   }
  
//   let col = color('#6699ff');
//   btn1 = createButton('Exercise 1');
//   btn1.position(40, 120);
//   btn1.style('background-color', col);
//   btn1.mousePressed(() => {choice = 1;
//                            removeElements();
//                           }
//                    );
  
//   btn2 = createButton('Exercise 2');
//   btn2.position(40, 220);
//   btn2.style('background-color', col);
//   btn2.mousePressed(() => {choice = 2;
//                            removeElements();
//                           }
//                    );
  
//   btn3 = createButton('Exercise 3');
//   btn3.position(40, 320);
//   btn3.style('background-color', col);
//   btn3.mousePressed(() => {choice = 3;
//                            removeElements();
//                           }
//                    );
  
//   textSize(20);
//   fill(40);
//   text('Enjoy exercising!', 40, 390, 200, 200);
// }

// function renderGame1() {
//  //console.log('here');
//  background(220);
//  square(x, 220, 55);
//  x = x+1;
// }

// function renderGame2 () {
//  clear();
//  background(220);
//  textSize(20);
//  fill(40);
//  text('The exercise 2 is succesfully laucnhed', 40, 390, 200, 200);
// }


// // if (playing){ render game itself} else {all the code you have in game3}

// function testGame3(){
//   if(playing){
//     removeElements();
//     beginGame3();
//   }
//   else{
//     renderGame3();
//   }
// }

// function renderGame3(){
//  clear();
//  background(300);
//   textSize(20);
//  fill(40);
//  text('Welcome to exercise 3!', 100, 50, 300, 200);
//   textSize(10);
//   strokeWeight(0);
//   text('Please read the description below before you begin:',50,90,300,200 );
//   text('This is a fun game about drawing shapes to train motor skills. You will be asked to trace a variety of shapes with your finger across the screen. The intelligent system will track whether or not the trace is accurate and there will be a point system to track your progress', 50,110,320,200)
//   text('When you are ready please tap the "begin" button.', 50,180,300,200)
  
//   let col1 = color(45, 223, 200, 50);
//   btn3Begin = createButton('Begin');
//   btn3Begin.position(160, 240);
//   btn3Begin.style('background-color', col1);
//   btn3Begin.size(60);
//   btn3Begin.mousePressed(() => playing=true);
                   
// }

// function beginGame3(){
//   background(300);
//   textSize(10);
//   text('Please trace the displayed shape:',50,60,300,150);
//   //text('');
// }
