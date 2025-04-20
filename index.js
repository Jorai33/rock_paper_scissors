// Create a function named getComputerChoice
function getComputerChoice() {
  // Get a random number between 1 and 3
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  // If random number equals 1, then computers'choice equals "rock"
  // Else if random number equals 2, then computers'choice equals "paper"
  // Else computers'choice equals "scissors"
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  // Returns computer's choice
  return computerChoice;
}

console.log(getComputerChoice());

// Create a function getHumanChoice
function getHumanChoice() {
  // Prompt "Rock, paper or scissors ?"
  // Assign prompt value to human's choice
  let humanChoice = prompt("Rock, paper or scissors ?");

  // Return human's choice
  return humanChoice;
}

console.log(getHumanChoice());
