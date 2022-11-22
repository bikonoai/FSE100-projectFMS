//Setup is only executed once immediately after running
function setup() {
 createCanvas(400, 500);
}

//draw is executed infinitely while the program runs
let choice = 0;
let x = 90;
let beanImg;
let beanImgNum = 0;
let forwardButton;
let message = 0, stepInfo;


let showText = false;

// COUNTERS
var beanScore = 0; // BEAN PICKING 

function preload() {
  forwardButton = loadImage('Forward Button.png');
  print(beanImgNum);
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
  clear()
  print(choice)
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
     renderGame3();
     break; 
   case 4: 
     beanStartPage();
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
  
  btn2 = createButton('Exercise 2'); // Bean Picking
  btn2.position(40, 220);
  btn2.style('background-color', col);
  btn2.mousePressed(() => {choice = 4;  //choice change here
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

function renderGame2 () {  // Bean Picking
 let col = color('#6699ff');
  
  //let beanScore = 0;
  
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
  text('Score',300, 25, 100, 100);
  text(beanScore, 360, 25, 100, 100);

  
 addScoreButton = createButton('I successfully put a bean in the cup! (+1)')
 addScoreButton.position(50, 120);
 addScoreButton.style('background-color', col);
  
 addScoreButton.mousePressed(updateBeanScore);
  
  minusScoreButton = createButton('I did NOT successfully put a bean in the cup. (-1)')
 minusScoreButton.position(50, 160);
 minusScoreButton.style('background-color', col);
  
 minusScoreButton.mousePressed(minusBeanScore);
  
 endButton = createButton('End')
 endButton.position(50, 250);
 endButton.style('background-color', col);
  
 endButton.mousePressed(minusBeanScore);
  
//   newScreenButton = createButton('New')
//  newScreenButton.position(300, 120);
//  newScreenButton.style('background-color', col);
  
//  newScreenButton.mousePressed(beanStartPage);

  
  //putBeanYES = createButton
  //putBeanNO = createButton
  //putBeanMISTAKE = createButton  // Mistakenly clicked putBeanYES
  

}

function calculateScore(){
  
  
}

function beanStartPage(){
  let col = color('#6699ff');
  choice = 4;
   
  
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
}
function updateBeanScore(){
  
  text(beanScore, 360, 25, 100, 100);
  beanScore++;
  }

function renderGame3(){
 clear();
 background(220);
 textSize(20);
 fill(40);
 text('The exercise 3 is succesfully laucnhed', 40, 390, 200, 200);
}