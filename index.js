var readlineSync = require("readline-sync");
const chalk = require("chalk");

let score = 0; 
let userName = readlineSync.question(chalk.red("What's your name? "));

console.log(chalk.bgRed(" Welcome " + userName + "! Let's play DO YOU KNOW PARVEZ? "));

function quiz(question, answer) {
  console.log("----------------------------");
  let userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(chalk.green("Right!"));
    score += 1;
  }
  else {
    console.log(chalk.red("Wrong!"));
  }

  console.log("Your score is " + score);
}

let questions = [{
  question: "Where do I live? ",
  answer: "Hyderabad"
}, {
  question: "What's my favourite food? ",
  answer: "Biryani"
}, {
  question: "What's my favourite dessert? ",
  answer: "Ice cream"
}, {
  question: "What's my favourite sport? ",
  answer: "Football"
}];

for (let i=0; i<questions.length; i++) {
  quiz(questions[i].question, questions[i].answer);
}

console.log("YAY! Your total score is", score);
console.log("-------------");
console.log("Top scorers: ");
console.log("Parvez: 5");
console.log("(Send me a screenshot of your score if you should be on this list)");