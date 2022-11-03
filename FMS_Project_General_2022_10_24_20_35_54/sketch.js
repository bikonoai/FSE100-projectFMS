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


let showText = false;

// COUNTERS
var beanScore = 0; // BEAN PICKING 

function preload() {
  forwardButton = loadImage('Forward Button.png');
  
  switch(beanImgNum) {
    case 0:
      beanImg = loadImage('Black Bean.jpg');  // variable to switch
      break;
    case 1:
      beanImg = loadImage('Green Bean.jpg');
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
  
  text('Instructions', 50, 100, 200, 200);
  text('Insert Picture of Exercise', 50, 150, 200, 200);  //picture or video of the activity
  text('Score',300, 25, 100, 100);
  text(beanScore, 360, 25, 100, 100);

  
 addScoreButton = createButton('+1')
 addScoreButton.position(350, 120);
 addScoreButton.style('background-color', col);
  
 addScoreButton.mousePressed(updateBeanScore);
  
  newScreenButton = createButton('New')
 newScreenButton.position(300, 120);
 newScreenButton.style('background-color', col);
  
 newScreenButton.mousePressed(beanStartPage);

  
  //putBeanYES = createButton
  //putBeanNO = createButton
  //putBeanMISTAKE = createButton  // Mistakenly clicked putBeanYES
  

}

function beanStartPage(){
  removeElements();
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
  
  
  text('Get youself some beans', 25, 300, 300, 200);

  
  image(beanImg, 50,135);
  beanImg.resize(300,0);
  
  newScreenButton = createButton('New')
 newScreenButton.position(300, 120);
 newScreenButton.style('background-color', col);
  
 newScreenButton.mousePressed(beanStartPage);
  
  
}

function changeImage() {
  beanImgNum += 1;
  
}

function updateBeanScore(){
  
  text(beanScore, 360, 25, 100, 100);
  beanScore += 1;
  }

function renderGame3(){
 clear();
 background(220);
  textSize(20);
 fill(40);
 text('The exercise 3 is succesfully laucnhed', 40, 390, 200, 200);
}