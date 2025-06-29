import { showModal } from "./modal.js";

let humanChoice = "";
let compChoice = "";

let humanScore = 0;
let compScore = 0;

const humanSign = document.querySelector("#playerSign");
const computerSign = document.querySelector("#computerSign");

const humanScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");

const userScoreInfo = document.querySelector("#score-info");
const userScoreOutcome = document.querySelector("#score-message");
const gameOutcome = document.querySelector("#endGameMsg");

const choiceContainer = document.querySelector("#choices");

const restartGameBtn = document.querySelector("#restartGame");

function restartGame() {
  location.reload();
}

function handleChoiceClick(event) {
  const button = event.target.closest("button");

  if (button && button.dataset.choice) {
    humanChoice = button.dataset.choice;
    playRound();
  }
}

choiceContainer.addEventListener("click", handleChoiceClick);

//Updates the Player Selection icon
function updateChoices(humanChoice, compChoice) {
  switch (humanChoice) {
    case "rock":
      humanSign.textContent = `✊`;
      break;
    case "paper":
      humanSign.textContent = `✋`;
      break;
    case "scissor":
      humanSign.textContent = `✌`;
      break;
  }

  switch (compChoice) {
    case "rock":
      computerSign.textContent = `✊`;
      break;
    case "paper":
      computerSign.textContent = `✋`;
      break;
    case "scissor":
      computerSign.textContent = `✌`;
      break;
  }
}

function getCompChoice() {
  let choices = ["rock", "paper", "scissor"];
  return getRandomChoice(choices);
}
function getRandomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function playRound() {
  compChoice = getCompChoice();

  updateChoices(humanChoice, compChoice);

  getResult(humanChoice, compChoice);

  if (humanScore === 5) {
    gameOutcome.textContent = "You Won!";
  } else if (compScore === 5) {
    gameOutcome.textContent = "You Lost!";
  }

  if (isGameOver()) {
    choiceContainer.removeEventListener("click", handleChoiceClick);
    restartGameBtn.addEventListener("click", restartGame);
    showModal();
  }
}
function isGameOver() {
  if (humanScore === 5 && compScore < 5) {
    return true;
  } else if (compScore === 5 && humanScore < 5) {
    return true;
  } else {
    return false;
  }
}

function updateScore(humanScore, compScore) {
  humanScoreDisplay.textContent = `Player: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer: ${compScore}`;
}

function getResult(userChoice, compChoice) {
  if (userChoice === compChoice) {
    userScoreInfo.textContent = "Its a Tie";
    userScoreOutcome.textContent = `${humanChoice} ties with ${compChoice}`;
    return;
  }

  if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    humanScore++;

    userScoreInfo.textContent = "You won!";
    userScoreOutcome.textContent = `${humanChoice} beats ${compChoice}`;
  } else {
    compScore++;

    userScoreInfo.textContent = "You lost!";
    userScoreOutcome.textContent = `${humanChoice} is beaten by ${compChoice}`;
  }
  updateScore(humanScore, compScore);
}
