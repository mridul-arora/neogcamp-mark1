var readlineSync = require('readline-sync');
var score = 0;

function welcome() {
  var userName = readlineSync.question("What's your Name? ");
  console.log('Hi ' + userName + '!' + ' Welcome to \"DO YOU KNOW MRIDUL?\"');
}

var highScores = [
  {
    name: "Mridul",
    score: 5
  }, {
    name: "Vasu",
    score: 4
  }];

//have atleast 5 questions
//array of objects
var quesAns = [
  {
    question: "Where do I live? ",
    answer: "Gurgaon"
  }, {
    question: "What's my last name? ",
    answer: "Arora"
  }, {
    question: "What's my favourite snack? ",
    answer: "Dahi Bhalla"
  }, {
    question: "Which city was my college in? ",
    answer: "Dehradun"
  }, {
    question: "Was this fun? ",
    answer: "Yes"
  }];

function game() {
  for (var i = 0; i < quesAns.length; i++) {
    var answer = readlineSync.question(quesAns[i].question)
    if (answer.toUpperCase() === quesAns[i].answer.toUpperCase()) {
      console.log("Correct!");
      score++;
    } else {
      console.log("Oops.. That's Wrong!");
    }
    console.log("Score: " + score);
  }

}

function finalScore() {
  console.log("Your final score is: " + score);
  console.log("Check out the highScores of your pals here..");
  highScores.map(scores => console.log(scores.name, ':', scores.score))
  console.log("Ping me a screenshot of your scores, if you break the highscore! I'll update it on the scoreboard!");
}

//main 
welcome()
game()
finalScore()


