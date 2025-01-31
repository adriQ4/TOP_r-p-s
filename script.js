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
  let result;
  do {
    let choice = prompt("Choice: Rock, Paper or Scissors");
    if (!choice) {
      alert("You need to eneter choice!");
      continue;
    }
    result = choice.toUpperCase();
  } while (!["ROCK", "PAPER", "SCISSORS"].includes(result));
  return result;
}

// SCORE:

let humanScore = 0;
let computerScore = 0;

// PLAY GAME ONE TIME
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`DRAW: ${humanChoice} VS ${computerChoice}`);
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore++;
    console.log(`PLAYER WINS: ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`COMPUTER WINS: ${computerChoice} beats ${humanChoice}`);
  }
  console.log(`SCORE: PLAYER [${humanScore}] - [${computerScore}] COMPUTER`);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  console.log("FINAL SCORE:");
  console.log(`PLAYER: ${humanScore} - COMPUTER: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log(
      `SCORE: PLAYER: ${humanScore} - ${computerScore} COMPUTER \n🏆 PLAYER WINS THE GAME!`
    );
  } else {
    console.log(
      `SCORE: PLAYER: ${humanScore} - ${computerScore} COMPUTER \n)🤖 COMPUTER WINS THE GAME!`
    );
  }
}

playGame();
