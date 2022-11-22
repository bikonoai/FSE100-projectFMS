//Setup is only executed once immediately after running
let playing;
function setup() {
  createCanvas(400, 500);
  playing = false;

}

//draw is executed infinitely while the program runs
let choice = 0;
let x = 90;
let beanImg;
let beanImgNum = 0;
let beanStateImg;
let beanState = 0;
let forwardButton;
let message = 0, stepInfo;


let showText = false;

// COUNTERS
var beanScore = 0; // BEAN PICKING 

function preload() {
  switch(beanState){
    case 0:
      beanStateImg = loadImage('Normal Bean.png');
      break;
    case 1:
      beanStateImg = loadImage('Happy Bean.png');
      break;
    case 2:
      beanStateImg = loadImage('Sad Bean.png');
      break;
  }
  switch(beanImgNum) {
    case 0:
      beanImg = loadImage('1 Materials Needed.png'); 
      break;
    case 1:
      beanImg = loadImage('2 Pick Bean.png');
      break;
    case 2:
      beanImg = loadImage('3 Bean Over Cup.png');
      break;
    case 3:
      beanImg = loadImage('4 Dropped bean.png');
      break;
    case 4:
      beanImg = loadImage('5 Plus Score.png');
      break;
    case 5:
      beanImg = loadImage('6 Minus Score.png');
      break; 
    case 6:
      beanImg = loadImage('6 Minus Score.png');
      break;     

  }
  
  
  
  
}

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
   case 2:  // Bean Picking
     renderGame2 ();
     break;
   case 3:
     testGame3();
     break; 
   case 7: 
     beanStartPage();
     break;
   case 4:
     pauseGame();

    break;
   case 6:
     pauseGame2();
   }

}

function renderMainMenu() {
  //stroke('black');
  fill('black');
  stroke('white');
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
  
  btn2 = createButton('Exercise 2'); // Bean Picking
  btn2.position(40, 220);
  btn2.style('background-color', col);
  btn2.mousePressed(() => {choice = 7;  //choice change here
                           removeElements();
                          }
                   );
  
  btn3 = createButton('Exercise 3');
  btn3.position(40, 320);
  btn3.style('background-color', col);
  btn3.mousePressed(() => {choice = 3;
                           removeElements();
                           clear();
                           generateShape()
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

function renderGame2 () {  // Bean Picking
 let col = color('#6699ff');
  
  
 clear();
 background('white');
 noStroke();
 fill(col);
 rect(0,0,400,75);
 textSize(20);
 fill(40);
 text('Bean Picking', 50, 50, 200, 200);
  
  // text('Instructions', 50, 100, 200, 200);
  // text('Insert Picture of Exercise', 50, 150, 200, 200);  //picture or video of the activity
  text('Score',150, 100, 100, 100);
  text(beanScore, 220, 100, 100, 100);
  
  beanStateImg.resize(150, 0);
  image(beanStateImg, 130, 90);

  //Pause Button
  btnPause = createButton("Pause");
  btnPause.position(40, 390);
  btnPause.style('background-color', col); 
  btnPause.mousePressed(() => {
                                choice = 6;
                                removeElements();
                              }
                       );

  
 addScoreButton = createButton('I successfully put a bean in the cup! (+1)')
 addScoreButton.position(50, 280);
 addScoreButton.style('background-color', col);
  
 addScoreButton.mousePressed(updateBeanScore);
  
  minusScoreButton = createButton('I did NOT successfully put a bean in the cup. (-1)')
 minusScoreButton.position(50, 320);
 minusScoreButton.style('background-color', col);
  
 minusScoreButton.mousePressed(minusBeanScore);
  
 
  
//  endButton = createButton('End')
//  endButton.position(50, 400);
//  endButton.style('background-color', col);
  
//  endButton.mousePressed(minusBeanScore);
 
}

function calculateScore(){
  
  
}

function beanStartPage(){
  let col = color('#6699ff');
  choice = 7;
   
  
  clear();
  background('white');
  noStroke();
  fill(col);
  rect(0,0,400,75);
  textSize(20);
  fill(40);
  text('WELCOME TO BEAN PICKING!', 60, 50, 300, 200);
  text('Activity Instructions', 25, 100, 300, 200);
  
  image(beanImg, 50,135);
  
  //Start Button
  startButton = createButton('Start')
  startButton.position(300, 475);
  startButton.style('background-color', col);
  
  startButton.mousePressed(startBeanGame);
  
  // Continue Button
  continueButton = createButton('Continue')
  continueButton.position(300, 450);
  continueButton.style('background-color', col);
  
  continueButton.mousePressed(changeImage);
  
  // Back Button
  backButton = createButton('Back')
  backButton.position(250, 450);
  backButton.style('background-color', col);
  
  backButton.mousePressed(backImage);
  
  if (message == 0){
    stepInfo = "You will need: \n   * A flat surface (like a table) \n   * beans   \n * cup"; 
    // picture insert w/ items needed (cup, beans, flat surface)
  }
  if (message == 1){
    stepInfo = "1) Pick up the bean";
  }
  if (message == 2){
    stepInfo = "2) Bring the bean over to the cup";
  }
  if (message == 3){
  stepInfo = "3) Put the bean in the cup.";
  }
  if (message == 4){
  stepInfo = "4) Press the +1 button if bean lands in cup";
  }
  if (message == 5){
  stepInfo = "5) Press the -1 button if bean doesn't land in cup";
  }
  if (message == 6){
  stepInfo = "When you're ready to begin, click start!";
  }
  
  
  text(stepInfo, 25, 320, 300, 200);

}

function startBeanGame(){
  removeElements();
  choice = 2;
}

function backImage() {
  
  if ((message >=0) && (message <= 6)){
    if (message == 0){
      
    }
    else{
    message--;
    beanImgNum -= 1;
    }
  }
  print("Bean Image" + beanImgNum);
  print("Message" + message);
  preload();
}

function changeImage() {
  
  if ((message >= 0) && (message <= 6)){  // 0,1,2, 3
    if (message == 6){
      
    }
    else{ beanImgNum += 1;
    message++;}}
   
  print("Bean Image" + beanImgNum)
  print("Message" + message)
  preload();
}

function minusBeanScore(){
  text(beanScore, 360, 25, 100, 100);
  beanScore--;  
  beanState = 2;
  preload();
}
function updateBeanScore(){
  
  text(beanScore, 360, 25, 100, 100);
  beanScore++;
  
  beanState = 1;
  preload();
  }

//this is a separate function 
function pauseGame2 () {
  clear();
  background(220);
  // textSize(20);
  // fill(40);
  text("You paused the game", 100, 100);
  
  let col = color('#6699ff');
  btnResume = createButton("Resume the game");
  btnResume.position(50, 200);
  btnResume.style('background-color', col); 
  btnResume.mousePressed(() => {
                                choice = 2;
                                removeElements();
                              }
                       );
  
  
  btnMenu = createButton("Go back to main menu");
  btnMenu.position(50, 300);
  btnMenu.style('background-color', col); 
  btnMenu.mousePressed(() => {
                                choice = 0;
                                removeElements();
                              }
                       );
  
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
 removeElements();
 background(300);
  textSize(20);
 fill(40);
 text('Welcome to exercise 3!', 100, 50, 300, 200);
  textSize(10);
  strokeWeight(0);
  text('Please read the description below before you begin:',50,90,300,200 );
  text('This is a fun game about filling shapes to train motor skills. You will be asked to fill a variety of shapes with your finger or mouse across the screen. The intelligent system will track whether or not the fill is accurate and there will be a percentage system to track your progress', 50,110,320,200)
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
  stroke('red');
  strokeWeight(8);
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
  text('Please fill in the displayed shape:',40,50,300,170);
  
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

  fill('black');
  stroke('white');
  restartButton()
  // fill('black');
  // stroke('white');
  if (score >= 80 && score <= 100){
    
    text('You are doing great. Keep Going!',50,80,300,150)
  }
  if (score <= 70){
    text('You got this! Try to fill more of the shape!',50,80,300,150)
  }
  
  fill('black');
  stroke('white');
   let col = color('#6699ff');
  btnPause = createButton("Pause");
  btnPause.position(320, 30);
  btnPause.style('background-color', col); 
  btnPause.mousePressed(() => {
                                choice = 4;
                                removeElements();
                              }
                       );
  
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
function restartButton(){
//createButton(Restart, restartGame);
btn3R = createButton('Restart');
btn3R.position(320, 470);
let col2 = color(45, 223, 200, 50);
btn3R.style('background-color', col2);
btn3R.size(60);
btn3R.mousePressed(() => {    
    removeElements();
    clear();
    generateShape();
    beginGame3();
    totalCount = 0;
    corrCount = 0;
}
                       )}


function pauseGame () {
  clear();
  background(220);
  // textSize(20);
  // fill(40);
  text("You paused the game", 100, 100);
  
  let col = color('#6699ff');
  btnResume = createButton("Resume the game");
  btnResume.position(50, 200);
  btnResume.style('background-color', col); 
  btnResume.mousePressed(() => {
    choice = 3;
    removeElements();
    clear();
    generateShape();
    beginGame3();
    // totalCount = 0;
    // corrCount = 0;
                              }
                       );
  
  
  btnMenu = createButton("Go back to main menu");
  btnMenu.position(50, 300);
  btnMenu.style('background-color', col); 
  btnMenu.mousePressed(() => {
    choice = 0;
    clear();
    removeElements();
                              }
                       );
  
}


