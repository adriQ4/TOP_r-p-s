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

// const humanScore = 0;
// const computerScore = 0;
