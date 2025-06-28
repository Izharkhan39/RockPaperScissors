let humanChoice = "";
let compChoice = "";

let humanScore = 0;
let compScore = 0;

function getHumanChoice() {
  let choice = prompt("Enter Rock,Paper or Scissor");
  return choice.toLowerCase();
}

function getCompChoice() {
  let choices = ["rock", "paper", "scissor"];
  return getRandomChoice(choices);
}

function getRandomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(roundNum) {
  console.log(`~~~Round ${roundNum}~~~`);
  humanChoice = getHumanChoice();
  console.log(`HumanChoice: ${humanChoice}`);

  compChoice = getCompChoice();
  console.log(`ComputerChoice: ${compChoice}`);

  getResult(humanChoice, compChoice);
  console.log(`HumanScore: ${humanScore}`);
  console.log(`ComputerScore: ${compScore}`);
}

function playGame() {
  for (let i = 1; i < 6; i++) {
    playRound(i);
  }
  if (humanScore > compScore) {
    console.log("You won the game");
  } else if (humanScore === compScore) {
    console.log("Its a tie between you and the Computer");
  } else {
    console.log("Computer wins");
  }
  humanScore = 0;
  compScore = 0;
}

document.addEventListener("DOMContentLoaded", playGame);

function getResult(userChoice, compChoice) {
  if (userChoice === compChoice) {
    console.log("Its a Tie");
    return;
  }

  if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    humanScore++;
    console.log("You win this round");
  } else {
    compScore++;
    console.log("Computer wins this round");
  }
}
