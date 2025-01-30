// Get Computer Choice

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3 + 1);
  if (number === 1) {
    return "ROCK";
  } else if (number === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

// Get Human Choice
const getHumanChoice = (choice) => choice;

//Scores

const humanScore = 0;
const computerScore = 0;

//Game

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return console.log("DRAW");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    return console.log("PLAYER WIN: Rock win to Scissors.");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    return console.log("COMPUTER WIN: Rock win to Paper");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    return console.log("PLAYER WIN: Paper win to Rock");
    humanScore++;
  } else if (humanChoice && computerChoice === "scissors") {
    return console.log("COMPUTER WIN: Scissors win to Paper");
    computerScore++;
  } else {
    return "hola mundo";
  }
}
const humanSelection = getHumanChoice("scissors");
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));
