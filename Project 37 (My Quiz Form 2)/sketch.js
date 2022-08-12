var canvas, backgroundImage;
var contestant, contestantCount, allContestants;
var quiz, question, answer, database;
var gameState = 0;

function preload() {
  bgImg = loadImage("/bg.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw() {
  background(bgImg);
  if(contestantCount === 2) {
    quiz.update(1);
  }
  
  if(gameState === 1) {
    clear();
    quiz.play();
  }
}