let humanChoice = "";
let compChoice = "";

let humanScore = 0;
let compScore = 0;

function getHumanChoice() {
  Choice = prompt("Enter Rock,Paper or Scissor");
  return Choice.toLowerCase();
}

function getCompChoice() {
  let choices = ["rock", "paper", "scissor"];
  Choice = getRandomChoice(choices);
  return Choice;
}

function getRandomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function playRound() {
  humanChoice = getHumanChoice();
  console.log(`HumanChoice: ${humanChoice}`);

  compChoice = getCompChoice();
  console.log(`ComputerChoice: ${compChoice}`);

  getResult(humanChoice, compChoice);
  console.log(`HumanScore: ${humanScore}`);
  console.log(`ComputerScore: ${compScore}`);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (humanScore > compScore) {
    console.log("You win");
  } else if (humanScore === compScore) {
    console.log("Its a tie");
  } else {
    console.log("Computer wins");
  }
  humanScore = 0;
  compScore = 0;
}

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
