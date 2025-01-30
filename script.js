// selects

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

function getHumanChoice() {
  let choice;
  let result;
  do {
    choice = prompt("Choice: Rock, Paper or Scissors");
    if (choice) {
      result = choice.toLocaleUpperCase();
    }
  } while (!["ROCK", "PAPER", "SCISSORS"].includes(result));
  return result;
}

// SCORES
let humanScore = 0;
let computerScore = 0;

// PLAY GAME ONE TIME

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return console.log(`${humanChoice} VS ${computerChoice} = DRAW`);
  } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
    computerScore++;
    return console.log(
      `COMPUTER WIN: ${computerChoice} WRAPS THE ${humanChoice}`
    );
  } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    humanScore++;
    return console.log(`PLAYER WIN: ${humanChoice} BROKE THE 
    ${computerChoice}`);
  } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
    computerScore++;
    return console.log(
      `COMPUTER WIN: ${computerChoice} CUT THE ${humanChoice}`
    );
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    humanScore++;
    return console.log(
      `PLAYER WIN: ${humanChoice} WRAPS THE ${computerChoice}`
    );
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    humanScore++;
    return console.log(`PLAYER WIN: ${humanChoice} CUT THE ${computerChoice}`);
  } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
    computerScore++;
    return console.log(
      `COMPUTER WIN: ${computerChoice} BROKE THE ${humanChoice}`
    );
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
